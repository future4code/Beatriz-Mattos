import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

class Pokedex extends React.Component() {
    state = {
        pokemonList = [
            "name": "bulbasaur",
            "url": "https://pokeapi.co/api/v2/pokemon/1/"
          },
          {
            "name": "ivysaur",
            "url": "https://pokeapi.co/api/v2/pokemon/2/"
          },
          {
            "name": "venusaur",
            "url": "https://pokeapi.co/api/v2/pokemon/3/"
          }
        ]
    }

    render() {
        
    }
}

export default Pokedex;