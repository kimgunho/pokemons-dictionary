import React, { useState, createContext, useContext } from 'react'

const pokemonContext = createContext()

export const UserPokemonProvider = ({ children }) => {
  const [pokemons, setPokemons] = useState([])

  return (
    <pokemonContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </pokemonContext.Provider>
  )
}

export const UseUserPokemons = () => {
  return useContext(pokemonContext)
}
