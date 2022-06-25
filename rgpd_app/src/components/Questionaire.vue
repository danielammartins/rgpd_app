<script>
import Questions from './Questions.vue'
import TextEditor from './TextEditor.vue'
import { ref } from 'vue'

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
    "questions": Questions,
    "text-editor": TextEditor
  }
}

const quizCompleted = ref(false);

</script>


<template>
  <div class="container" v-if="!quizCompleted">
    <div class="questions-container">
      <questions></questions>
    </div>
    <div class="editor-container">
      <text-editor></text-editor>
    </div>
    {{ timestamp }}
  </div>
</template>

<style scoped>
  .container {
    border: 2px solid purple;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 85vw;
    height: fit-content;
    margin: auto;
    margin-top: 25vh;
    margin-bottom: 25vh;
  }

  .editor-container {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    height: 100%;
  }

  .questions-container {
    border: 2px solid green;
    font-size: 1.3rem;
    padding: 20px;
  }

  @media screen and (max-width:600px) {
    .container {
      flex-direction: column;
    }

    .editor-container {
      padding-top: 20px;
    }
  }
</style>