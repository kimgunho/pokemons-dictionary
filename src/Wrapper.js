import React from 'react'
import styled from 'styled-components'
import Detail from './pages/detail/detail'
import List from './pages/list'
import { UseUserPokemons } from './context/pokemonContext'

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
`

const WrapperBackground = styled.ul`
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
`

function Wrapper() {
  const { pokemons, selectedPokemon } = UseUserPokemons()
  const wrapperBackground = pokemons.map(({ img }) => img)
  return (
    <>
      {/* 포켓몬 리스트 스타일 와퍼 백그라운드  */}
      <WrapperBackground color={selectedPokemon.color}>
        {wrapperBackground.map((pokemon, index) => (
          <li
            key={index}
            style={{
              backgroundImage: `url(${pokemon})`,
            }}
          ></li>
        ))}
      </WrapperBackground>

      <Container>
        <Detail />
        <List />
      </Container>
    </>
  )
}

export default Wrapper
