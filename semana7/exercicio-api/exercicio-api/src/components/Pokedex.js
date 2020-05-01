import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    justify-content: center;
`

const BoxPokedex = styled.div`
    display: grid;
    grid-rows: 1fr 1fr 1fr;
    grid-columns: 1fr 2fr 1fr;
   
`
const LogoPokemon = styled.img `
    width: 450px;
    height: 250px;
    margin: 10px;
`

const SelectStyled = styled.select`
    display: grid;
    grid-area: 2/1;
`

const Ability = styled.div`

`

class Pokedex extends React.Component {
    state = {
        pokemonList: [],
        pokemonSprite: '',
        pokemonAbility: ''
    }

    componentDidMount = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon/?limit=151',
        ).then(response => {

            this.setState({ pokemonList: response.data.results })

        }).catch(err => {
            console.log(err)
        })
    }

    toCatchPokemon = (e) => {
        const catchName = e.target.value

        axios.get(`https://pokeapi.co/api/v2/pokemon/${catchName}`,
        ).then(response => {
            this.setState({ pokemonSprite: response.data.sprites.front_default})

        }).catch(err => {
            console.log(err)
        })
    }

    toCatchAbilities = (e) => {
        const catchAbilities = e.target.value

        axios.get(`https://pokeapi.co/api/v2/pokemon/${catchAbilities}`,
        ).then(response => {
            this.setState({ pokemonAbility: response.data.abilities.ability[0, 1, 2].name })
        }).catch(err => {
            console.log(err)
        })
    }

    render() {
        const image = this.state.pokemonSprite ? (<img src={this.state.pokemonSprite} alt='pokemon' />) : (<div />);

        return (
            <Container>

            <BoxPokedex>

                <LogoPokemon src='https://pngimage.net/wp-content/uploads/2018/06/gotta-catch-em-all-png-6.png' alt='Logo Pokémon' />
               
                <SelectStyled onChange={this.toCatchPokemon}>
                    <option value={''}>Escolha o seu Pokémon favorito</option>

                    {this.state.pokemonList.map(pokemon => {
                        return <option
                            key={pokemon.name}
                            value={pokemon.name}>
                            {pokemon.name}

                        </option>

                    })}

                </SelectStyled>

                <div>{image}</div>

                <Ability>
                    {this.state.pokemonAbility.map(ability => {
                        return (
                        <p>Habilidades: {this.state.abilities}</p>
                        );
                    })}

                </Ability>

            </BoxPokedex>

        </Container>
        );
    }
}

export default Pokedex;