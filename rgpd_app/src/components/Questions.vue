<script>
import TextInputQuestions from './TextInputQuestions.vue';
import YesOrNo from './yesOrNoQuestions.vue';

export default {
  name: 'Questions',
  components: {
    TextInputQuestions,
    YesOrNo
  },
  data() {
    return {
      question: { "type": 1 }
    }
  },
  async beforeCreate() {
    const data = await (await fetch(`http://localhost:3011/question/1`)).json();
    this.question = data
  },
  methods: {
    async answer(nextQ) {
      alert(nextQ)
      if (nextQ != 0) {
        const data = await (await fetch(`http://localhost:3011/question/${nextQ}`)).json();
        this.question = data
      } else {
        this.$emit("finish")
      }
    }
  }
}
</script>

<template>
  <!-- This is for a text input question -->
  <TextInputQuestions v-if="question.type == 1" v-model="questionIndex" :question="question" @answer="answer" />
  <!-- This is for a yes/no question -->
  <YesOrNo v-else-if="question.type == 0" v-model="questionIndex" :question="question" @answer="answer" />

  <div v-else @load="this.emit('finish')"></div>
</template>