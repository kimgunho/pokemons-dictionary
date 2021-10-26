import React from 'react'
import styled from 'styled-components'
import { UseUserPokemons } from '../../context/pokemonContext'

const FixDiv = styled.div`
  position: relative;
  div {
    position: absolute;
    top: 40px;
    transition: all 0.1s ease-out;
    height: auto;
    width: 100%;
    max-width: 610px;
    max-height: 800px;
    border-radius: 20px;
    padding: 30px;
    box-sizing: border-box;
    background: #f0f0f0;
    border: 1px solid #ddd;
    h2 {
      float: left;
      font-size: 1.35em;
      font-weight: 400;
    }
    p.type {
      float: right;
      text-transform: capitalize;
      font-size: 1.25em;
    }
    p.text {
      font-size: 1.25em;
      padding: 20px 0;
      line-height: 25px;
      word-break: keep-all;
      span {
        display: block;
        padding-top: 20px;
      }
    }
  }
  div.rotateY {
    @keyframes rotateY {
      0% {
        transform: rotateY(0deg);
      }
      50% {
        transform: rotateY(90deg);
      }
      100% {
        transform: rotateY(0deg);
      }
    }
    animation: rotateY 0.2s ease-in;
  }
`
const CircleImg = styled.img`
  @keyframes imgBackground {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  background: linear-gradient(
    137deg,
    #fff6b7,
    ${({ bgColor }) => bgColor},
    #c2ffd8,
    ${({ bgColor }) => bgColor}
  );
  animation: imgBackground 5s ease infinite;
  background-size: 400% 400%;
  border-radius: 50%;
  display: block;
  margin: auto;
  box-shadow: 3px 3px 10px #ddd;
  border: 1px solid #ddd;
`

const LikeBtn = styled.button`
  border: 0;
  font-size: 1.45em;
  cursor: pointer;
`

function Detail() {
  const { selectedPokemon, collectPokemons, setCollectPokemons } =
    UseUserPokemons()

  function handleCollectPokemons(item) {
    const selectPokemon = collectPokemons.find(({ name }) => item.name === name)
    // // more.style.display = 'none'

    if (!selectPokemon) {
      setCollectPokemons((acc) => [...acc, item])
    } else {
      const filterPokemons = collectPokemons.filter(
        ({ name }) => name !== item.name,
      )
      setCollectPokemons(filterPokemons)
    }
  }

  window.addEventListener('scroll', function () {
    const fixDiv = document.querySelector('.detail')
    const top = window.scrollY
    fixDiv.style.top = `${top}px`
  })

  function likeText() {
    const filterName = collectPokemons.find(
      ({ name }) => name === selectedPokemon.name,
    )

    return !filterName ? '❤️' : '💔'
  }

  const { color, id, name, img, type, text, genera, height, weight } =
    selectedPokemon
  return (
    <FixDiv bgColor={color}>
      <div className="detail">
        <h2>
          <span>{id ? `no.${id}` : ''}</span> {name}
          {id ? (
            <LikeBtn onClick={() => handleCollectPokemons(selectedPokemon)}>
              {likeText()}
            </LikeBtn>
          ) : (
            ``
          )}
        </h2>
        <p className="type">{type ? `type : ${type}` : ``}</p>
        <CircleImg bgColor={color} src={img} alt={name} />
        <p className="text">
          {text}
          <span>
            {genera && height && weight
              ? `            ${genera}  /
            몸무게 : ${height} Kg /
            키 : ${weight} cm
            `
              : ``}
          </span>
        </p>
      </div>
    </FixDiv>
  )
}

export default Detail
