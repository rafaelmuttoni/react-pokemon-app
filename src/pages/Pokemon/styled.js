import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

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
    text-transform: capitalize;
    padding: 1rem 0;
    font-size: 3rem;
    font-weight: 300;
    color: #333;
  }

  img {
    width: 288px;
    margin: 1rem 0;
  }

  li {
    padding: 1rem 0;
  }
`;

export const ReturnLink = styled(Link)`
  background: #ff1f1f;
  border-radius: 0.2rem;
  padding: 1rem 0;
  margin: 0 6rem;
  text-decoration: none;
  color: white;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin-right: 1rem;
  }

  &:hover {
    filter: opacity(0.75);
  }
`;
