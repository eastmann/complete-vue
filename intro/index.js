import * as Vue from 'vue/dist/vue.esm-browser.js'

const Num = {
    props: [
        'number'
    ],

    template: `
        <button
            :class="getClass(number)"
            @click="click"
        >
        {{ number }}
        </button>`,

    methods: {
        click() {
            this.$emit('chosen', this.number)
        },

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
        <Num
            v-for="number in numbers"
            :number="number"
            @chosen="printChosen"
        />

        <hr>

        <Num
            v-for="number in numberHistory"
            :number="number"
        />
    `,

    data() {
        return {
            numbers: [1,2,3,4,5,6,7,8,9,10],
            numberHistory: []
        }
    },

    computed: {
        evenList() {
            return this.numbers.filter(number => this.isEven(number))
        },
    },

    methods: {
        printChosen(number) {
            this.numberHistory.push(number)
        }
    }
})
app.mount('#app')
