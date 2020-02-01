import styled from 'styled-components';

export const CapitalsResults = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  @media only screen and (max-width: 480px) {
    flex-direction: column;
  }
`;

export const List = styled.ul`
  list-style: none;

  & + ul {
    margin-left: 32px;
  }

  li {
    font-weight: 700;
    line-height: 100%;

    display: flex;
    flex-direction: row;

    /* List title */
    &:first-child {
      font-size: 100%;
      font-weight: 300;
      line-height: 100%;
    }

    &:nth-child(2) {
      margin-top: 18px;
    }

    & + li {
      margin-top: 30px;
    }

    span {
      display: block;
      width: 2rem;
      margin-right: 1rem;
    }
  }

  @media only screen and (max-width: 480px) {
    & + ul {
      margin-left: 0;

      li {
        &:first-child {
          display: none;
        }

        &:nth-child(2) {
          margin-top: 30px;
        }

        & + li {
          margin-top: 30px;
        }
      }
    }
  }
`;

export const RetryButton = styled.button`
  border: 0;
  border-radius: 4px;
  padding: 8px;
  background-color: #f0134d;

  font-size: 100%;
  color: #fff;
  font-weight: bold;

  margin-top: 16px;

  display: flex;
  align-items: center;

  &:active {
    background-color: #ff6f5e;
  }

  svg {
    font-size: 150%;
    margin-right: 8px;
  }
`;
