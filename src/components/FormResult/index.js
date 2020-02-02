import React from "react";
import {
  parseISO,
  getISODay,
  isAfter,
  startOfDay,
  differenceInDays,
  isToday
} from "date-fns";
import { IoMdClose, IoMdArrowDown, IoMdArrowUp } from "react-icons/io";

import {
  FormResultWrapper,
  CityResult,
  WrapperResult,
  OrangeRow,
  CloseButton,
  CityWeather,
  City,
  CurrentWeather,
  AditionalInfo,
  ColumnBlock,
  TemperatureMinMax,
  FeelsLike,
  Wind,
  Humidity,
  ForecastList,
  Day,
  ForecastItem,
  DayTemperatureMinMax
} from "./styles";

import { ErrorWrapper, ErrorMessage, ErrorTip } from "../Errors";

/** Convert metter/sec to km/hour */
const metterToKmSec = metterSec =>
  Math.round((metterSec * 3.6 + Number.EPSILON) * 100) / 100;

const getTodayMinMaxTemperature = forecast => {
  return forecast.data.filter(forecast => isToday(parseISO(forecast.datetime)));
};

const handleError = error => {
  const ERRORS = {
    NOT_FOUND: {
      code: 404,
      message: "Não foi possível localizar a cidade informada!"
    },
    GENERIC_ERROR: {
      code: true,
      message: "Falha na requisição!"
    }
  };
  switch (error.status) {
    case ERRORS.NOT_FOUND.code:
      return (
        <ErrorWrapper>
          <ErrorMessage>{ERRORS.NOT_FOUND.message}</ErrorMessage>
          <ErrorTip>
            <p>
              Para melhorar a precisão da busca, realize a consulta seguindo o
              formato definido na ISO3166:
            </p>
            <p>Nome da cidade + virgula + Sigla de dois dígitos do pais.</p>
            <p>
              <strong>Exemplo</strong>: Londres, GB ou São Paulo, BR
            </p>
          </ErrorTip>
        </ErrorWrapper>
      );
    default:
      return (
        <ErrorWrapper>
          <ErrorMessage>{ERRORS.GENERIC_ERROR.message}</ErrorMessage>
        </ErrorWrapper>
      );
  }
};

function Weather({ weather, forecast }) {
  const minMaxTemperature = getTodayMinMaxTemperature(forecast);

  return (
    <CityWeather>
      <City>{`${weather.data[0].city_name} - ${weather.data[0].country_code}`}</City>

      <CurrentWeather>
        <span>{`${Math.round(weather.data[0].temp)}°C`}</span>
        <span>{weather.data[0].weather.description}</span>
      </CurrentWeather>

      <AditionalInfo>
        <ColumnBlock>
          <TemperatureMinMax>
            <div>
              <IoMdArrowDown />
              <span>{`${Math.round(minMaxTemperature[0].min_temp)}°`}</span>
            </div>
            <div>
              <IoMdArrowUp />
              <span>{`${Math.round(minMaxTemperature[0].max_temp)}°`}</span>
            </div>
          </TemperatureMinMax>

          <Wind>
            <p>
              Vento
              <span>
                {`${Math.round(metterToKmSec(weather.data[0].wind_spd))}km/h`}
              </span>
            </p>
          </Wind>
        </ColumnBlock>

        <ColumnBlock>
          <FeelsLike>
            <p>
              Sensação
              <span>{`${Math.round(weather.data[0].app_temp)}°C`}</span>
            </p>
          </FeelsLike>

          <Humidity>
            <p>
              Humidade
              <span>{`${Math.round(weather.data[0].rh)}%`}</span>
            </p>
          </Humidity>
        </ColumnBlock>
      </AditionalInfo>
    </CityWeather>
  );
}

/**
 * Check if the forecast day is in the 5 days range
 */
const checkForecastRange = (currentDay, forecastDay, FORECAST_RANGE) =>
  differenceInDays(forecastDay, currentDay) <= FORECAST_RANGE;
/**
 * The openweathermap API 5 days / 3hour forecast endpoint returns
 * the forecast relative from the current local time
 * for 5 days with data every 3 hours in UTC.
 * The server measurement for a day starts at 00:00UTC, then 03:00UTC and so on.
 * Lets say it is currently 2020-01-27 01:30:00-04:00AM,
 * the API will return data from 2020-01-27 06:00:00UTC
 * to 2020-02-01 03:00:00.
 * It is necessary to ignore today's forecast,
 * resulting in 4 forecasts days (or 5, depending on the current hour).
 */
const processForecastData = forecast => {
  // Forecast 4 days
  const FORECAST_RANGE = 5;

  // Get current day
  const currentDay = startOfDay(new Date());

  // follow the getISODay format ( 1 for Monday, 7 for Sunday)
  const dayOfWeekMap = {
    1: "Segunda",
    2: "Terça",
    3: "Quarta",
    4: "Quinta",
    5: "Sexta",
    6: "Sábado",
    7: "Domingo"
  };

  return forecast.data
    .filter(
      forecastDate =>
        isAfter(startOfDay(parseISO(forecastDate.datetime)), currentDay) &&
        checkForecastRange(
          currentDay,
          parseISO(forecastDate.datetime),
          FORECAST_RANGE
        )
    )
    .map(forecastDate => {
      return (
        <ForecastItem key={forecastDate.datetime}>
          <Day>{dayOfWeekMap[getISODay(parseISO(forecastDate.datetime))]}</Day>
          <DayTemperatureMinMax>
            <span>{`${Math.round(forecastDate.min_temp)}°`}</span>
            <span>{`${Math.round(forecastDate.max_temp)}°`}</span>
          </DayTemperatureMinMax>
        </ForecastItem>
      );
    });
};

function Forecast({ forecast }) {
  return <ForecastList>{processForecastData(forecast)}</ForecastList>;
}

function CityInfo({ handleCloseButton, weather, forecast }) {
  return (
    <>
      <CityResult>
        <WrapperResult>
          <Weather weather={weather} forecast={forecast} />
          <CloseButton onClick={handleCloseButton}>
            <IoMdClose />
          </CloseButton>
        </WrapperResult>
      </CityResult>

      <OrangeRow />

      <Forecast forecast={forecast} />
    </>
  );
}

function FormResult({
  handleCloseButton,
  viewFormResult,
  cityData,
  VIEW_STATE_FORM_RESULT
}) {
  const { weather, forecast, error } = cityData;

  return (
    <FormResultWrapper>
      {viewFormResult === VIEW_STATE_FORM_RESULT.RENDER_RESULT && (
        <CityInfo
          weather={weather}
          forecast={forecast}
          handleCloseButton={handleCloseButton}
        />
      )}
      {viewFormResult === VIEW_STATE_FORM_RESULT.RENDER_ERROR &&
        handleError(error)}
    </FormResultWrapper>
  );
}

export default FormResult;
