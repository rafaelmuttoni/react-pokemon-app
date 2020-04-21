import styled, { keyframes } from 'styled-components';

import { Link } from 'react-router-dom';

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
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 10px 15px;
    border-radius: 4px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg)
  }

  to {
    transform: rotate(360deg)
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #fbd743;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: opacity(0.8);
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;

    svg {
      animation: ${rotate} 2s linear infinite;
    }
  }
`;

export const ClearButton = styled.button`
  background: #ff1f1f;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    filter: opacity(0.8);
  }
`;

export const FailBanner = styled.div`
  background: #ff1f1f;
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 7px 0;

  p {
    color: white;
    font-weight: 300;
    font-size: 1.2rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-top: 30px;
`;

export const PokeLink = styled(Link)`
  text-decoration: none;

  li {
    padding: 15px 0;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    transition: all 300ms ease-in;

    img {
      width: 84px;
      transition: all 300ms ease-in;
    }

    &:hover {
      box-shadow: 2px -2px 5px 2px rgba(0, 0, 0, 0.15);
      background: #fbd743;

      img {
        width: 96px;
      }
    }

    & + li {
      border-top: 1px solid #eee;
    }

    span {
      font-size: 1.8rem;
      font-weight: 300;
      color: #333;
      text-align: left;
    }
  }
`;
