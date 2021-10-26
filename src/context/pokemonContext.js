import React, { useState, createContext, useContext } from 'react'
import questionImg from '../who.png'

const pokemonContext = createContext()

export const UserPokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])
  const [count, setCount] = useState(9)
  const [collectPokemons, setCollectPokemons] = useState([])
  const [selectedPokemon, setSelectPokemon] = useState({
    id: null,
    name: '오늘의 포켓몬',
    img: questionImg,
    type: null,
    color: 'black',
    text: '오늘의 포켓몬은 무엇일까요?',
  })

  return (
    <pokemonContext.Provider
      value={{
        pokemons,
        setPokemons,
        selectedPokemon,
        setSelectPokemon,
        collectPokemons,
        setCollectPokemons,
        count,
        setCount,
      }}
    >
      {children}
    </pokemonContext.Provider>
  )
}

export const UseUserPokemons = () => {
  return useContext(pokemonContext)
}
