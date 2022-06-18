<script>
import YesOrNo from './yesOrNoQuestions.vue'

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
  }
}

</script>

<template>
  <div class="cont">
    <yes-no></yes-no>
  </div>
</template>

<style scoped>
  .cont {
    border: 2px solid green;
    font-size: 1.3rem;
    padding: 20px;
  }
</style>