<template>
  <div class="container">
      <div class="activeBox">
          <div v-if="inActive === 0"></div>
      </div>
      <div class="activeBox">
          <div v-if="inActive === 1"></div>
      </div>
      <div class="activeBox">
          <div v-if="inActive === 2"></div>
      </div>
      <div class="activeButton">
          <button type="button" @click="toLeft">Left</button>
          <button type="button" @click="toRight">Right</button>
          <button type="button" @click="toDefault">init</button>
      </div>
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
  data() {
    return {}
  },
    computed: {
        ...mapState('demo', ['inActive'])
    },
    methods: {
        ...mapMutations([]),
        ...mapActions('demo', [
            'toLeft',
            'toRight',
            'toDefault'
        ])
    }
}
</script>