<template>
    <PokemonCards
        :pokemons="pokemons"
        :selectedId="selectedId"
        @chosen="fetchEvolutions"
    />

    <PokemonCards
        :pokemons="evolutions"
    />
</template>

<script>

import PokemonCards from './PokemonCards.vue'

const api = 'https://pokeapi.co/api/v2/pokemon'
const IDS = [1, 4, 7]

export default {
    components: {
        PokemonCards
    },

    data() {
        return {
            pokemons: [],
            evolutions: [],
            selectedId: null
        }
    },

    async created() {
        this.pokemons = await this.fecthData(IDS)
    },

    methods: {
        async fecthData(ids) {
            const responses = await Promise.all(
                ids.map(id => fetch(`${api}/${id}`))
            )

            const json = await Promise.all(
                responses.map(response => response.json())
            )

            return json.map(pokemon => ({
                id: pokemon.id,
                name: pokemon.name,
                sprite: pokemon.sprites.other['official-artwork'].front_default,
                types: pokemon.types.map(type => type.type.name)
            }))
        },

        async fetchEvolutions(pokemon) {
            this.evolutions = await this.fecthData(
                [
                    pokemon.id + 1,
                    pokemon.id + 2
                ]
            )

            this.selectedId = pokemon.id

            console.log(this.evolutions)
        }
    }
}
</script>
