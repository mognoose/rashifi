<template>
  <div class="container">
    <button @click="onPlay('play')">Play</button>
    <!-- <button @click="onPlayPause('pause')">Pause</button> -->
    <form @submit.prevent="youtube()">
      <!-- <input type="text" v-model="url" placeholder="Youtube"> -->
      <!-- <button @click="youtube()">Play</button> -->
    </form>
    <form @submit.prevent="onCmd()">
      <!-- <input type="text" v-model="cmd" placeholder="Command"> -->
      <!-- <button type="submit">send</button> -->
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'App',

  data() {
    return {
      server: 'http://192.168.1.134:3000',
      url: 'https://youtu.be/iCs159Fb4ls',
      cmd: '',
    }
  },
  methods: {
    onCmd(){
      console.log(this.cmd);
      axios(this.server+'/cmd/'+this.cmd)
    },
    onPlay(){
      console.log("url");
      navigator.clipboard.readText().then(url => this.youtube(url))
      // console.log(url);
      // axios(this.server+'/spotify/'+msg)
    },
    youtube(url){
      if(url) this.url = url
      axios.post(this.server+'/youtube/', "url="+this.url)
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
