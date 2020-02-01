import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  padding: 16px;
`;

export const ErrorMessage = styled.div`
  color: #000;
  font-size: 150%;
  font-weight: 700;
  text-align: center;
`;

export const ErrorTip = styled.div`
  font-size: 100%;
  color: #555;
`;
