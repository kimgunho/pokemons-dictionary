import React from 'react'
import GlobalStyle from './shared/styles/reset'
import { UserPokemonProvider } from './context/pokemonContext'
import Wrapper from './Wrapper'

function App() {
  return (
    <UserPokemonProvider>
      <GlobalStyle />
      <Wrapper />
    </UserPokemonProvider>
  )
}

export default App
