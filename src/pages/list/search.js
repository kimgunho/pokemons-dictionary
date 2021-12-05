import React from 'react'
import Like from './like'
import styled from 'styled-components'
import { UseUserPokemons } from '../../context/pokemonContext'

const SearchForm = styled.form`
  display: flex;
  padding-bottom: 20px;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
`
const Inner = styled.div`
  width: 50%;
  display: flex;
  input {
    width: 70%;
    border: 0;
    padding: 10px;
    font-size: 1.25em;
    background-color: #f0f0f0;
  }
  button {
    width: 30%;
    background-color: #333;
    color: #fff;
    border: 0;
    padding: 10px 20px;
    font-size: 1.25em;
    cursor: pointer;
  }
`
const Modal = styled.div`
  position: fixed;
  width: auto;
  height: auto;
  padding: 30px 50px;
  background-color: crimson;
  color: #fff;
  left: 50%;
  top: 50%;
  display: none;
  transform: translate(-50%, -50%);
  font-size: 1.25em;
`

function Search() {
  const { pokemons, setPokemons, setCount } = UseUserPokemons()
  const more = document.querySelector('.more')
  const search = document.getElementById('search')
  const alert = document.querySelector('.alert')

  async function onSearch(event) {
    event.preventDefault()
    const searchPokemon = pokemons.filter(({ name }) => name === search.value)
    if (searchPokemon) {
      setPokemons(searchPokemon)
      more.style.display = 'none'
    }
    if (searchPokemon.length === 0) {
      alert.style.display = 'block'
    }
  }

  function handlePokemonReset(event) {
    const {
      target: { value },
    } = event
    if (value === '') {
      alert.style.display = 'none'
      more.style.display = 'block'
      setCount(9)
    }
  }

  return (
    <>
      <SearchForm>
        <Inner className="inner">
          <input onChange={handlePokemonReset} id="search" type="text"></input>
          <button onClick={onSearch}>검색</button>
        </Inner>
        <Like />
      </SearchForm>
      <Modal className="alert">
        <p>검색하신 결과는 존재하지 않습니다 :(</p>
      </Modal>
    </>
  )
}

export default Search
