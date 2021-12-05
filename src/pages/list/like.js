import React from 'react'
import styled from 'styled-components'
import { UseUserPokemons } from '../../context/pokemonContext'

const Nav = styled.ul`
  display: flex;
  width: 50%;
  align-items: center;
`
const NavItem = styled.li`
  background-color: ${({ backgroundColor }) => backgroundColor};
  text-align: center;
  font-size: 1.125em;
  white-space: nowrap;
  width: 40%;
  border: 1px solid #dddddd;
  margin-left: 5%;
  border-radius: 10px;
  padding: 10px;
  box-sizing: border-box;
  cursor: pointer;
`

function Like() {
  const { setPokemons, collectPokemons, setCount } = UseUserPokemons()
  const more = document.querySelector('.more')

  function handleCollectRender() {
    more.style.display = 'none'
    setPokemons(collectPokemons)
  }

  function handlePokemons() {
    more.style.display = 'block'
    setCount(9)
  }

  return (
    <Nav>
      <NavItem backgroundColor={'#ddd'} onClick={handleCollectRender}>
        나의 포켓몬
      </NavItem>
      <NavItem backgroundColor={'#ddd'} onClick={handlePokemons}>
        초기화
      </NavItem>
    </Nav>
  )
}

export default Like
