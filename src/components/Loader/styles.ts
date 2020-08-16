import styled, { keyframes } from 'styled-components';
import { FaSpinner } from 'react-icons/fa';

const pulse = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(55, 209, 201, 0.7), 0 0 0 0 rgba(24, 153, 104, 0.7);
  }
  40% {
    box-shadow: 0 0 0 50px rgba(55, 209, 201, 0),
      0 0 0 0 rgba(55, 209, 201, 0.7);
  }
  80% {
    box-shadow: 0 0 0 50px rgba(55, 209, 201, 0),
      0 0 0 30px rgba(55, 209, 201, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(55, 209, 201, 0), 0 0 0 30px rgba(55, 209, 201, 0);
  }
`;

export const Container = styled.div`
  display: grid;
  place-items: center;

  width: 100vw;
  height: 100vh;
  background-color: var(--primary);

  span {
    width: 72px;
    height: 72px;
    font-size: 32px;
    border-radius: 50%;
    background: #177c8099;
    animation: ${pulse} 2s linear infinite;

    display: grid;
    place-items: center;
  }
`;

export const LoaderIcon = styled(FaSpinner)`
  width: 72px;
  height: 72px;
  fill: var(--icon);
  animation: ${pulse} 3s linear infinite;
`;
