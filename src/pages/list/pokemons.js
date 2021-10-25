import React from 'react'
import styled from 'styled-components'

const Item = styled.ul`
  display: flex;
  flex-wrap: wrap;
`

const ItemEl = styled.li`
  width: 29%;
  margin: 2%;
  padding: 20px;
  cursor: pointer;
  border-radius: 30px;
  box-shadow: 2px 2px 10px #2727279e;
  box-sizing: border-box;
  text-align: center;
  background-color: #f0f0f0;
  border: 1px solid ${({ color }) => color};
  h3 {
    color: #333;
    padding: 10px 0;
  }
  img {
    width: 100%;
    max-width: 100px;
  }
  p.numbering {
    text-align: left;
    color: #333;
    span {
      background-color: ${({ color }) => color};
      border-radius: 50%;
      font-size: 1em;
      width: 25px;
      height: 25px;
      display: inline-block;
      text-align: center;
      line-height: 25px;
      color: #fff;
    }
  }
`
const Btn = styled.button`
  border: 0;
  background-color: #333;
  color: #fff;
  font-size: 1.25em;
  padding: 10px 30px;
  border-radius: 10px;
  display: block;
  margin: 30px auto 0;
`

function Pokemons({ item, end, more }) {
  return (
    <>
      <Item className="pokemons">
        {item.map((item, idx) => (
          <ItemEl key={idx} color={item.color}>
            <p className="numbering">
              <span>{item.id}</span> {item.type}
            </p>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
          </ItemEl>
        ))}
      </Item>
      <Btn ref={end} onClick={more}>
        more
      </Btn>
    </>
  )
}

export default Pokemons
