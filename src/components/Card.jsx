import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100px;
  height: 150px;
  background-color: white;
  border: 1px solid black;
  margin: 1rem;
`;

export default function Card(props) {
  const { color } = props;
  const [cardName, setCardName] = useState("Carte cachée");
  const [isFlipped, setIsFlipped] = useState(false);

  const truc = { nom: "toto", age: 16 };
  const { nom, age } = truc;
  console.log(nom);
  const trucMieux = { description: "coucou", nom: "tata", age: 16 };
  const trucMieux2 = { description: "coucou", ...truc };

  const flipCard = () => {
    if (isFlipped) {
      setCardName(color);
    } else {
      setCardName("Carte cachée");
    }
    setIsFlipped(!isFlipped);
  };

  return <Container onClick={flipCard}>{cardName}</Container>;
}
