import React from 'react';

import { IoMdRefresh } from 'react-icons/io';

import { ErrorWrapper, ErrorMessage } from '../Errors';

import { CapitalsResults, List, RetryButton } from './styles';

const splitCapitals = capitalsList => {
  const halfwayThrough = Math.floor(capitalsList.length / 2);

  return [
    capitalsList.slice(0, halfwayThrough),
    capitalsList.slice(halfwayThrough, capitalsList.length),
  ];
};

function ListTitle() {
  return (
    <li>
      <span>Min</span>
      <span>Max</span>
    </li>
  );
}

function ListItems({ halfCapitals }) {
  return halfCapitals.map(capital => (
    <li key={capital.data.city_name}>
      {capital.status === 200 ? (
        <>
          <span>{`${Math.round(capital.data.data[0].min_temp)}°`}</span>
          <span>{`${Math.round(capital.data.data[0].max_temp)}°`}</span>
        </>
      ) : (
        <>
          <span>--</span>
          <span>--</span>
        </>
      )}
      <p>{capital.data.city_name}</p>
    </li>
  ));
}

function Capitals({ capitalsData, handleRetryButton }) {
  return !capitalsData.error ? (
    <CapitalsResults>
      {splitCapitals(capitalsData.capitals).map((halfCapitals, index) => (
        <List key={index}>
          <ListTitle />
          <ListItems halfCapitals={halfCapitals} />
        </List>
      ))}
    </CapitalsResults>
  ) : (
    <ErrorWrapper>
      <ErrorMessage>
        <h3>Não foi possível carregar as informações!</h3>
      </ErrorMessage>
      <RetryButton onClick={handleRetryButton}>
        <IoMdRefresh />
        Tentar novamente
      </RetryButton>
    </ErrorWrapper>
  );
}

export default Capitals;
