<template>
    <div>
        <h2> {{ count }}</h2>
        <button @click="counter">push</button>
    </div>
</template>

<script>
export default {
    computed: {
        count () {
            return this.$store.state.increments.count
        }
    },
    methods: {
        counter: function counter (e) {
            this.$store.commit('increments/increment')
        }
    }
}
</script>