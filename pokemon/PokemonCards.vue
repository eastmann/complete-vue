<template>
    <div class="cards">
        <Card
            v-for="pokemon in pokemons"
            :key="pokemon.id"
            @click="clickCard(pokemon)"
            :class="{ opace: selectedId && selectedId !== pokemon.id }"
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
</template>

<script>
import Card from './Card.vue'

export default {
    components: {
        Card
    },

    props: {
        pokemons: {
            type: Array,
            default: []
        },
        selectedId: {
            type: Number,
            required: false
        }
    },

    emits: ['chosen'],

    methods: {
        clickCard(pokemon) {
            this.$emit('chosen', pokemon)
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
