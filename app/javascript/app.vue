<template lang="pug">
  #app
    p {{ message }}
</template>

<script lang="ts">
import Vue from 'vue'

export interface Todo {
  id: number
  task: string
  done: boolean
}

export default Vue.extend({
  data () {
    return {
      message: "Hello Vue!",
      todos: [] as Todo[]
    }
  }
})
</script>

<style scoped>
p {
  font-size: 2em;
  text-align: center;
}
</style>
