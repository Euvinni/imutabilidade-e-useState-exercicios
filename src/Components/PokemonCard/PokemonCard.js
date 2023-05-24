import React from 'react'
import {Card, PokemonName, PokemonType, EvolveButton} from './styles'



const PokemonCard = ({pokemon, evolucaoPokemon}) => {

    const evoluirPokemon = () => {
        evolucaoPokemon({
          name: "Wartortle",
          type: "Water",
          evolved: true,
          weight: 22,
          color: 'blue',
          image: 'https://archives.bulbagarden.net/media/upload/archive/2/22/20130810055910%210067Machoke.png',
          id: 8
        })
    }
    
  return (
        <Card color={pokemon.color}>
        <img src={pokemon.image} alt={`Pokemon`}/>
        <PokemonName>{pokemon.name}</PokemonName>
        <PokemonType>{pokemon.type}</PokemonType>
        <p>{pokemon.weight}kg</p>

        <EvolveButton onClick={() => evoluirPokemon()}>Evoluir!</EvolveButton>
    </Card>
  )
}

export default PokemonCard