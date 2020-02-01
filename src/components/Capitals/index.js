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
    <li key={capital.id}>
      <span>{`${Math.round(capital.main.temp_min)}°`}</span>
      <span>{`${Math.round(capital.main.temp_max)}°`}</span>
      <p>{capital.name}</p>
    </li>
  ));
}

function Capitals({ capitals, handleRetryButton }) {
  const REQUEST_STATE = {
    SUCCESS_LIST_RESULT: { code: 200 },
  };

  return capitals.status === REQUEST_STATE.SUCCESS_LIST_RESULT.code ? (
    <CapitalsResults>
      {splitCapitals(capitals.data.list).map((halfCapitals, index) => (
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
