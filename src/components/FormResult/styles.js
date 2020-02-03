import styled from 'styled-components';

export const FormResultWrapper = styled.div`
  background: #fff3e4;
  color: #555;
  height: auto;
`;

export const CityResult = styled.div`
  padding: 24px 24px 20px;
  margin: 0 auto;

  @media only screen and (max-width: 480px) {
    padding: 20px 16px 16px 0px;
  }
`;

export const OrangeRow = styled.hr`
  border: 0;
  background: #ff8000;
  height: 1px;
  margin: 0 24px;

  box-shadow: 0px 1px 0px #ffdbb2;

  @media only screen and (max-width: 480px) {
    margin: 0 auto;
  }
`;

// /* Container created to position the close Button and  the CityWeather content */
export const WrapperResult = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

export const CloseButton = styled.button.attrs({
  type: 'button',
})`
  border: 0;
  background: none;

  svg {
    height: 32px;
    width: 32px;

    color: #ff8000;
  }
`;

export const CityWeather = styled.div`
  margin-left: 32px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media only screen and (max-width: 480px) {
    margin-left: 36px;
  }
`;

export const City = styled.p`
  font-size: 112.5%;
  font-weight: 700;

  @media only screen and (max-width: 480px) {
    font-size: 75%;
  }
`;

export const CurrentWeather = styled.div`
  font-size: 250%;
  font-weight: 700;

  margin: 32px 0;

  span {
    display: inline-block;
  }
  span:first-child {
    margin-right: 16px;
  }

  span:first-letter {
    text-transform: uppercase;
  }

  @media only screen and (max-width: 480px) {
    font-size: 200%;
  }
`;

export const AditionalInfo = styled.div`
  display: flex;
  flex-direction: row;
`;

export const ColumnBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  &:last-child {
    margin-left: 32px;
  }
`;

export const TemperatureMinMax = styled.div`
  font-size: 100%;
  font-weight: 700;

  display: flex;
  flex-direction: row;
  align-items: center;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  svg {
    color: #ff8000;
    height: 18px;
    width: 18px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 75%;
  }
`;
export const FeelsLike = styled.div`
  font-size: 100%;

  p {
    font-weight: 300;

    span {
      font-weight: 700;
      margin-left: 8px;
    }
  }

  p:first-letter {
    text-transform: uppercase;
  }

  @media only screen and (max-width: 480px) {
    font-size: 75%;
  }
`;

export const Wind = styled.div`
  font-size: 100%;
  font-weight: 300;
  margin-top: 24px;

  span {
    font-weight: 700;
    margin-left: 8px;
  }

  p:first-letter {
    text-transform: uppercase;
  }

  @media only screen and (max-width: 480px) {
    font-size: 75%;
  }
`;

export const Humidity = styled.div`
  font-size: 100%;
  margin-top: 24px;

  p {
    font-weight: 300;

    span {
      font-weight: 700;
      margin-left: 8px;
    }
  }

  p:first-letter {
    text-transform: uppercase;
  }

  @media only screen and (max-width: 480px) {
    font-size: 75%;
  }
`;

export const ForecastList = styled.ul`
  list-style: none;

  padding: 20px 0px;

  display: flex;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 480px) {
    padding: 24px 0px;
  }
`;

export const ForecastItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & + li {
    margin-left: 24px;
  }

  @media only screen and (max-width: 480px) {
    :last-child {
      display: none;
    }
  }
`;

export const Day = styled.p`
  font-size: 112.5%;
  font-weight: 700;

  @media only screen and (max-width: 480px) {
    font-size: 100%;
  }
`;

export const DayTemperatureMinMax = styled.p`
  font-size: 87.5%;
  font-weight: 700;
  color: #ff8000;
  margin-top: 8px;

  span:last-child {
    margin-left: 8px;
  }

  @media only screen and (max-width: 480px) {
    font-size: 75%;
  }
`;
