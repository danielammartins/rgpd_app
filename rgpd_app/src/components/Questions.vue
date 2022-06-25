<script>
import YesOrNo from './yesOrNoQuestions.vue'
import TextInputQuestions from './TextInputQuestions.vue'
import questions from "../assets/questions.json";
import { ref, computed } from 'vue'

export default {
  data() {
    return {
      inQuestions: false,
      questionIndex: 0,
      teste: questions.questions[0].question,
      questionType: 0
  }
  },
  methods: {
    getCurrentQuestion() {
      let question = questions.questions[0].question;
      this.questionIndex++;
	    return question
    }
  },
  props: {
    questionNumber: String
  },
  mounted() {
    this.questions = questions
  },
  components: {
    "yes-no": YesOrNo,
    "text-input": TextInputQuestions
  }
}

const checkType = () => {
  console.log("oi")
  // If question has type 0, it's a yes/no question. 
  if(this.questions.questions[questionIndex].type == 0) 
    this.questionType = 0;
  // If it has type 1, it's a text input question
  else 
    this.questionType = 1;
};

</script>

<template>
  <yes-no :question="getCurrentQuestion()"></yes-no>
</template>
