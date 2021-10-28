import React, { useEffect, useState, useRef } from 'react'
import Search from './search'
import Pokemons from './pokemons'
import Skeleton from './Skeleton'

import { UseUserPokemons } from '../../context/pokemonContext'

function List() {
  const { pokemons, setPokemons, count, setCount } = UseUserPokemons()
  const [isLoading, setIsLoading] = useState(true)

  const fetchPokemons = async (count) => {
    const res = await fetch(
      //
      `https://pokeapi.co/api/v2/pokemon?limit=${count}`,
    )
    const json = await res.json()
    const { results } = json

    const pokemonItem = await Promise.all(
      results.map(async ({ url }) => {
        const pokemonRes = await fetch(url)
        const pokemonJson = await pokemonRes.json()
        const detailUrl = pokemonJson.species.url

        const detailRes = await fetch(detailUrl)
        const detailJson = await detailRes.json()

        return {
          id: pokemonJson.id,
          name: detailJson.names[2].name,
          img: pokemonJson.sprites.other['official-artwork'].front_default,
          type: pokemonJson.types[0].type.name,
          color: detailJson.color.name,
          text: detailJson.flavor_text_entries[23].flavor_text,
          genera: detailJson.genera[1].genus,
          height: pokemonJson.height,
          weight: pokemonJson.weight,
        }
      }),
    )

    setPokemons(pokemonItem)
    setIsLoading(false)
  }

  const loadMore = () => {
    setCount((acc) => acc + 9)
  }

  useEffect(() => fetchPokemons(count), [count])

  const conutEnd = useRef()
  useEffect(() => {
    if (!isLoading) {
      const observer = new IntersectionObserver(
        (entrise) => {
          if (entrise[0].isIntersecting) {
            loadMore()
          }
        },
        { threshold: 0.2 },
      )
      observer.observe(conutEnd.current)
    }
  }, [isLoading])

  return (
    <div>
      <Search />
      {isLoading ? (
        <Skeleton />
      ) : (
        <Pokemons more={loadMore} end={conutEnd} item={pokemons} />
      )}
    </div>
  )
}

export default List
