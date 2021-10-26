import React from 'react'
import styled from 'styled-components'

const SkeletonUl = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-top: 70px;
`

const ItemEl = styled.li`
  @keyframes backgroundAnimation {
    0% {
      background-color: #ddd;
    }
    50% {
      background-color: #ccc;
    }
    100% {
      background-color: #ddd;
    }
  }
  animation-name: backgroundAnimation;
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
  animation-play-state: running;
  width: 29%;
  margin: 2%;
  padding: 20px;
  cursor: pointer;
  border-radius: 30px;
  box-shadow: 2px 2px 10px #2727279e;
  box-sizing: border-box;
  text-align: center;
  height: 247px;
  text-indent: -99999px;
  h3 {
    color: #333;
    padding: 10px 0;
  }
  img {
    width: 100%;
    max-width: 100px;
  }
  p.numbering {
    text-align: left;
    color: #333;
    span {
      background-color: ${({ color }) => color};
      border-radius: 50%;
      font-size: 1em;
      width: 25px;
      height: 25px;
      display: inline-block;
      text-align: center;
      line-height: 25px;
      color: #fff;
    }
  }
`

const Skeleton = () => {
  return (
    <>
      <SkeletonUl className="pokemons">
        <ItemEl></ItemEl>
        <ItemEl></ItemEl>
        <ItemEl></ItemEl>
        <ItemEl></ItemEl>
        <ItemEl></ItemEl>
        <ItemEl></ItemEl>
        <ItemEl></ItemEl>
        <ItemEl></ItemEl>
        <ItemEl></ItemEl>
        <ItemEl></ItemEl>
        <ItemEl></ItemEl>
        <ItemEl></ItemEl>
        <ItemEl></ItemEl>
        <ItemEl></ItemEl>
        <ItemEl></ItemEl>
      </SkeletonUl>
    </>
  )
}

export default Skeleton
