<script>
import YesOrNo from './yesOrNoQuestions.vue'
import TextInputQuestions from './TextInputQuestions.vue'

export default {
  data() {
    return {
      inQuestions: false
    }
  },
  methods: {

  },
  components: {
    "yes-no": YesOrNo,
    "text-input": TextInputQuestions
  }
}

</script>

<template>
  <div class="cont">
    <text-input></text-input>
  </div>
</template>

<style scoped>
  .cont {
    border: 2px solid green;
    font-size: 1.3rem;
    padding: 20px;
  }
</style>