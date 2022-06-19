<script>
import Questions from './Questions.vue'
import TextEditor from './TextEditor.vue'

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
</script>


<template>
  <div class="container">
    <questions></questions>
    <div class="editor-container">
      <text-editor></text-editor>
    </div>
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
</style>