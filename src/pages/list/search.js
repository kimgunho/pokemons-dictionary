import React from 'react'
import Like from './like'
import styled from 'styled-components'

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
    background-color: #2f9626;
    color: #fff;
    border: 0;
    padding: 10px 20px;
    font-size: 1.25em;
    cursor: pointer;
  }
`

function Search() {
  return (
    <SearchForm>
      <SearchAticle className="search-article">
        <input type="tetx"></input>
        <button>검색</button>
      </SearchAticle>
      <Like />
    </SearchForm>
  )
}

export default Search
