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
const SearchAticle = styled.div`
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
  const searchId = document.getElementById('search-id')
  const modalAlert = document.querySelector('.modal-alert')

  async function onSearch(e) {
    e.preventDefault()
    const searchPokemon = pokemons.filter(({ name }) => name === searchId.value)
    if (searchPokemon) {
      setPokemons(searchPokemon)
      more.style.display = 'none'
    }
    if (searchPokemon.length === 0) {
      modalAlert.style.display = 'block'
    }
  }

  function onPokemonReset(e) {
    const {
      target: { value },
    } = e
    if (value === '') {
      modalAlert.style.display = 'none'
      more.style.display = 'block'
      setCount(9)
    }
  }

  return (
    <>
      <SearchForm>
        <SearchAticle className="search-article">
          <input onChange={onPokemonReset} id="search-id" type="text"></input>
          <button onClick={onSearch}>검색</button>
        </SearchAticle>
        <Like />
      </SearchForm>
      <Modal className="modal-alert">
        <p>검색하신 결과는 존재하지 않습니다 :(</p>
      </Modal>
    </>
  )
}

export default Search
