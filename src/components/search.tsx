import React from "react";
import styled from "styled-components";

const Container = styled.div`
  &.input {
    display: flex;
    align-items: center;
    padding-bottom: 0.8em;
    border-bottom: 2px solid #bfc0c5;
    width: 90%;
    margin: 0em auto 2em;

    @media (min-width: 768px) {
      width: max-content;
      margin: 0 1em 0 0;
    }
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  background: inherit;
  color: white;
  padding-left: 1em;
  font-size: 18px;
  font-weight: 500;

  &:focus {
    border: none;
    outline: none;
  }

  &::placeholder {
    color: white;
  }
`;

function Search({ placeholder }) {
  return (
    <Container className="input">
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="10" cy="10" r="9" stroke="white" stroke-width="2" />
      </svg>

      <Input placeholder={placeholder} />
    </Container>
  );
}

export default Search;
