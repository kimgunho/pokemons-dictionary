import React from 'react'
import styled from 'styled-components'
import { UseUserPokemons } from '../../context/pokemonContext'

const Items = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 70px;
`
const Item = styled.li`
  width: 29%;
  margin: 2%;
  padding: 20px;
  cursor: pointer;
  border-radius: 30px;
  box-shadow: 2px 2px 10px #2727279e;
  box-sizing: border-box;
  text-align: center;
  background-color: #f0f0f0;
  border: 1px solid #ddd;
  h3 {
    color: #333;
    padding: 10px 0;
    white-space: nowrap;
  }
  img {
    width: 100%;
    max-width: 100px;
  }
  p.type {
    text-align: left;
    color: #333;
    span {
      background-color: ${({ color }) => color};
      border-radius: 50%;
      font-size: 1em;
      width: 10px;
      height: 10px;
      display: inline-block;
      color: #fff;
    }
  }
`
const MoreBtn = styled.button`
  border: 0;
  background-color: #333;
  color: #fff;
  font-size: 1.25em;
  padding: 10px 30px;
  border-radius: 10px;
  display: block;
  margin: 30px auto 0;
`

function Pokemons({ items, countFunc, more }) {
  const { setSelectPokemon } = UseUserPokemons()

  return (
    <>
      <Items className="pokemons">
        {items.map((item, index) => (
          <Item
            key={index}
            color={item.color}
            onClick={() => {
              setSelectPokemon(item)
            }}
          >
            <p className="type">
              <span></span> {item.type}
            </p>
            <img src={item.img} alt={item.name} />
            <h3>
              no.{item.id} {item.name}
            </h3>
          </Item>
        ))}
      </Items>

      <MoreBtn ref={more} onClick={countFunc} className="more">
        more
      </MoreBtn>
    </>
  )
}

export default Pokemons
