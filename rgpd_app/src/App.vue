<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HomeBtns from './components/HomeBtns.vue'
import YesOrNo from './components/yesOrNoQuestions.vue'

export default {
  name: 'app',
  data() {
    return {
      inQuestions: false
    }
  },
  methods: {
    toggle() {
      this.inQuestions = !this.inQuestions
    },
    leave() {
      this.inQuestions = false;
    }
  },
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "home-btns": HomeBtns,
    "yes-no": YesOrNo
}
}
</script>

<template>
  <div id="app">
    <app-header :inQuestions="this.inQuestions" @leave="leave()"></app-header>

    <section v-if="!inQuestions">
      <home-btns :inQuestions="false" @toggleInQuestions="toggle()"></home-btns>
    </section>

    <section v-if="inQuestions">
      <yes-no></yes-no>
    </section>

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
