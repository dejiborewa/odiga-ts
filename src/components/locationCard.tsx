import React from "react";
import styled from "styled-components";

const Image = styled.img`
  width: 100%;
  margin-bottom: 1em;

  @media (min-width: 1024px) {
    margin-right: 0.5em;
    margin-bottom: 0;
    margin-top: 0.5em;
  }
`;

function LocationCard({ data }) {
  return <Image src={data.image} alt={data.text} />;
}

export default LocationCard;
