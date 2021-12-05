import React, { useState, createContext, useContext } from 'react'
import defaultImg from '../default-image.png'

const pokemonContext = createContext()

export const UserPokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])
  const [count, setCount] = useState(9)
  const [collectPokemons, setCollectPokemons] = useState([])
  const [selectedPokemon, setSelectPokemon] = useState({
    id: null,
    name: 'Pokemon of today',
    img: defaultImg,
    type: null,
    color: 'black',
    text: 'Please select a pokemon',
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
