<template>
    <button @click="increment">{{ count }}</button>
    <button @click="a++">{{ a }}</button>
    <button @click="b++">{{ b }}</button>
    <p>{{ total }}</p>
    <h2>History log</h2>
    <div
        v-for="number in history"
        :key="number"
    >
        {{ number }}
    </div>
</template>

<script>
import { ref, reactive, computed, watch, watchEffect } from 'vue'

export default {
    setup() {
        // ref -> numbers, string (single value)
        const count = ref(0)
        const increment = () => {
            count.value++
        }

        const a = ref(1)
        const b = ref(2)
        const history = ref([])

        // reactive -> {} or group values
        // const numbers = reactive({
        //     a: 1,
        //     b: 2
        // })

        const total = computed(() => count.value + a.value + b.value)

        // const increase = (value) => {
        //     numbers[value]++
        // }

        // watch -> specify what you are going to watch -> more specific
        watch([a, b], ([newA, newB], [oldA, oldB]) => {
            if (newA !== oldA) {
                history.value.push(`A: ${oldA} -> ${newA}`)
            }
            if (newB !== oldB) {
                history.value.push(`B: ${oldB} -> ${newB}`)
            }
        })

        // watchEffect -> pass whatever you like -> more general
        // watchEffect(() => {
        //     console.log(numbers.a)
        // })

        return {
            a,
            b,
            count,
            total,
            increment,
            history
        }
    }
}
</script>

<style scoped>
p {
    font-size: 40px;
}

button {
    width: 100px;
    height: 100px;

    font-size: 40px;
}
</style>
