import styled, { keyframes } from 'styled-components';

// Create button animation
const rotate = keyframes`
  from {
    transform: rotate(360deg);
  }

  to{
    transform: rotate(0deg);
  }
`;

export const LoadingContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  margin: 0 auto;

  font-size: 150%;
  font-weight: 700;
  color: #fff;

  background-color: #40bfc1;

  svg {
    font-size: 150%;
    animation: ${rotate} 2s linear infinite;
  }
`;
