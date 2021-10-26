import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './shared/styles/reset'
import Detail from './pages/detail/detail'
import List from './pages/list'
import { UserPokemonProvider } from './context/pokemonContext'

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

function App() {
  return (
    <UserPokemonProvider>
      <GlobalStyle />
      <Container className="App">
        <Detail />
        <List />
      </Container>
    </UserPokemonProvider>
  )
}

export default App
