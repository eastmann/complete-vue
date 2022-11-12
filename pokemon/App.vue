<template>
    <div class="cards">
        <div class="card"
             v-for="pokemon in pokemons" :key="pokemon.id">

             <div class="title">
                 {{ pokemon.name }}
             </div>

             <div class="content">
                 <img :src="pokemon.sprite" :alt="pokemon.name">
             </div>

             <div class="description">
                 <div v-for="pokemon_type in pokemon.types" :key="pokemon_type">
                     {{ pokemon_type }}
                 </div>
             </div>
        </div>
    </div>
</template>

<script>

const api = 'https://pokeapi.co/api/v2/pokemon'
const ids = [1, 4, 7]

export default {
    data() {
        return {
            pokemons: []
        }
    },

    created() {
        this.fecthData()
    },

    methods: {
        async fecthData() {
            const responses = await Promise.all(
                ids.map(id => fetch(`${api}/${id}`))
            )

            const json = await Promise.all(
                responses.map(response => response.json())
            )

            this.pokemons = json.map(pokemon => ({
                id: pokemon.id,
                name: pokemon.name,
                sprite: pokemon.sprites.other['official-artwork'].front_default,
                types: pokemon.types.map(type => type.type.name)
            }))
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
}
.card {
    border: 1px solid silver;
    border-radius: 8px;
    max-width: 200px;
    margin: 0 5px;
    cursor: pointer;
    box-shadow: 0px 1px 3px darkgrey;
    transition: 0.2s;
}
.title, .content, .description {
    padding: 16px;
    text-transform: capitalize;
    text-align: center;
}
.title, .content {
    border-bottom: 1px solid silver;
}
.title {
    font-size: 1.25em;
}
.card:hover {
    transition: 0.2s;
    box-shadow: 0px 1px 9px darkgrey;
}
</style>
