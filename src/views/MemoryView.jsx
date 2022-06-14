import React from "react";
import styled from "styled-components";
import Card from "../components/Card";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin: 10vh 10vw 10vh 10vw;

  @media (max-width: 768px) {
    background-color: red;
  }
`;

export default function MemoryView() {
  const cards = [
    "red",
    "green",
    "black",
    "pink",
    "darkkhaki",
    "purple",
    "white",
    "orange",
    "brown",
    "cyan",
    "yellow",
    "coral",
    "darkred",
    "darksalmon",
    "chartreuse",
    "darkcyan",
  ];

  return (
    <Container>
      {cards.map((card) => {
        return <Card color={card} />;
      })}
    </Container>
  );
}
