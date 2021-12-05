import React from "react";
import styled from "styled-components";
import Detail from "./pages/detail/detail";
import List from "./pages/list";
import { UseUserPokemons } from "./context/pokemonContext";

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  margin: auto;
  > div {
    width: 50%;
    padding: 20px;
    margin: 2%;
    position: relative;
  }
`;

const BgUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  transition: all 0.3s ease-in;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  min-height: 100vh;
  background: ${({ color }) => color};
  opacity: 0.45;
  li {
    opacity: 1;
    width: 33.33334%;
    height: 350px;
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
  }
`;

function BgContainer() {
  const { pokemons, selectedPokemon } = UseUserPokemons();
  const pokemonBg = pokemons.map(({ img }) => img);
  return (
    <>
      <BgUl color={selectedPokemon.color}>
        {pokemonBg.map((item, i) => (
          <li
            key={i}
            style={{
              backgroundImage: `url(${item})`,
            }}
          ></li>
        ))}
      </BgUl>
      <Container className="App">
        <Detail />
        <List />
      </Container>
    </>
  );
}

export default BgContainer;
