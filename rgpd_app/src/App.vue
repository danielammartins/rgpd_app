 <script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import HomeBtns from './components/HomeBtns.vue'
import Questions from './components/Questions.vue'
import Questionaire from './components/Questionaire.vue'
import YesOrNo from './components/yesOrNoQuestions.vue'

export default {
  name: 'app',
  data() {
    return {
      inQuestions: false, 
      timestamp: ""
    }
  },
  methods: {
    toggleQuestions() {
      this.inQuestions = !this.inQuestions;
    },
    leave() {
      this.inQuestions = false;
    }
  },
  components: {
    "app-header": Header,
    "app-footer": Footer,
    "home-btns": HomeBtns,
    "yes-no": YesOrNo,
    "questions": Questions,
    "questionaire": Questionaire
  }
}
</script>

<template>
  <div id="app">
    <app-header v-if="inQuestions" :inQuestions="this.inQuestions" @leave="leave()"></app-header>

    <section v-if="!inQuestions">
      <home-btns :inQuestions="false" @toggleInQuestions="toggleQuestions()"></home-btns>
    </section>

    <section v-if="inQuestions" id="questionaire-section">
      <questionaire></questionaire>
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

  /*
  body {
    background-image: url('assets/background.png');
  }*/
  a {
    text-decoration: none;
    color: black;
  }

  input[type=submit] {
    background-color: white;
    color: black;
    border: 2px solid #114c5f1e;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    font-size: 16px;
    margin: 4px 2px;
    padding: 16px 32px;
    display: inline-block;
    cursor: pointer;
    transition-duration: 0.4s;
  }

  input[type=submit]:hover {
    background-color: #114b5f;
    color: white;
  }

  input[type=text] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
  }
  .container {
    display: flex;
    flex-direction: row;
  }

  #questionaire-section {
    height: fit-content;
  }
</style>
