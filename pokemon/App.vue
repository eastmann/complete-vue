<template>
    <div class="card">
        <div class="title">
            Title
        </div>

        <div class="content">
            Content
        </div>

        <div class="description">
            Description
        </div>
    </div>

    <button @click="fecthData">Fecth</button>
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

    methods: {
        async fecthData() {
            // const response = await fetch(`${api}/1`)

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

            // this.pokemon = {
            //     id: json.id,
            //     name: json.name,
            //     sprite: json.sprites.other['official-artwork'].front_default,
            //     types: json.types.map(type => type.type.name)
            // }

            console.log(this.pokemons)
        }
    }
}
</script>

<style scoped>
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
