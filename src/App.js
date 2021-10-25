import React from 'react'
import styled from 'styled-components'
import GlobalStyle from './shared/styles/reset'
import Detail from './pages/detail/detail'
import List from './pages/list'

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1280px;
  > div {
    width: 50%;
    padding: 20px;
    margin: 2%;
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <Container className="App">
        <Detail />
        <List />
      </Container>
    </>
  )
}

export default App
