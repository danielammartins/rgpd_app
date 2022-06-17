<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HomeBtns from './components/HomeBtns.vue'

export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "home-btns": HomeBtns
}
}
</script>

<template>
  <div id="app">
    <app-header></app-header>
    <home-btns></home-btns>
    <app-footer></app-footer>
  </div>
  </template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: monospace;
}

a {
  text-decoration: none;
  color: black;
}
</style>
