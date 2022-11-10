import * as Vue from 'vue/dist/vue.esm-browser.js'

const Num = {
    props: [
        'number'
    ],

    template: `<div :class="getClass(number)">{{ number }}</div>`,

    methods: {
        getClass(number) {
            return this.isEven(number) ? 'blue' : 'red'
        },

        isEven(number) {
            return number % 2 === 0
        }
    }
}

const app = Vue.createApp({
    components: {
        Num
    },
    template: `
        <button @click="increment">Increment</button>
        <p>{{ count }}</p>

        <input
            type="checkbox"
            v-model="value"
            value="a"
        />

        <input
            type="checkbox"
            v-model="value"
            value="b"
        />

        {{ value }}

        <p class="red">
            {{ error }}
        </p>

        <Num
            v-for="number in numbers"
            :number="number"
        />
    `,

    data() {
        return {
            count: 0,
            value: ['a'   ],
            numbers: [1,2,3,4,5,6,7,8,9,10]
        }
    },

    computed: {
        evenList() {
            return this.numbers.filter(number => this.isEven(number))
        },

        error() {
            if (this.value.length < 5) {
                return 'Must be greater that 5'
            }
        }
    },

    methods: {
        increment() {
            this.count += 1
        },
    }
})
app.mount('#app')
