<template>
  <div class="container">
    <button @click="onTest('play')">Play</button>
    <button @click="onTest('pause')">Pause</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  data() {
    return {
      test: 'test',
    }
  },
  methods: {
    onTest(msg){
      console.log(msg);
      axios('http://localhost:3000/spotify/'+msg)
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
