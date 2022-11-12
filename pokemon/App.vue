<template>
    <div class="cards">
        <Card
            v-for="pokemon in pokemons"
            :key="pokemon.id"
            @click="fetchEvolutions(pokemon)"
            :class="{ opace: pokemon.id !== selectedId }"
            class="card"
        >
            <template v-slot:title>
                {{ pokemon.name }} #{{ pokemon.id }}
            </template>

            <template v-slot:content>
                <img :src="pokemon.sprite" :alt="pokemon.name" />
            </template>

            <template v-slot:description>
                <div v-for="pokemon_type in pokemon.types" :key="pokemon_type">
                    {{ pokemon_type }}
                </div>
            </template>
        </Card>
    </div>

    <div class="cards">
        <Card
            v-for="pokemon in evolutions"
            :key="pokemon.id"
        >
            <template v-slot:title>
                {{ pokemon.name }}
            </template>

            <template v-slot:content>
                <img :src="pokemon.sprite" :alt="pokemon.name" />
            </template>

            <template v-slot:description>
                <div v-for="pokemon_type in pokemon.types" :key="pokemon_type">
                    {{ pokemon_type }}
                </div>
            </template>
        </Card>
    </div>
</template>

<script>

import Card from './Card.vue'

const api = 'https://pokeapi.co/api/v2/pokemon'
const IDS = [1, 4, 7]

export default {
    components: {
        Card
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
                    Number(`${pokemon.id}`) + 1,
                    Number(`${pokemon.id}`) + 2
                ]
            )

            this.selectedId = pokemon.id

            // console.log(this.evolutions)
        }
    }
}
</script>

<style scoped>
img {
    max-width: 100%;
}
.cards {
    display: flex;
    justify-content: center;

    margin-top: 10px;
}

.opace {
    opacity: 0.5;
}

.card:hover {
    opacity: 1;
}
</style>
