import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

export const Loading = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    animation: ${rotate} 2s linear infinite;
  }
`;

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 30px;
  margin: 80px auto;
  text-align: center;

  h1 {
    padding: 1rem 0;
    font-size: 3rem;
    font-weight: 300;
    color: #333;
  }

  img {
    width: 288px;
  }
`;
