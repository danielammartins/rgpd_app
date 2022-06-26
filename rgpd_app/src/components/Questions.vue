<script>
import YesOrNo from './yesOrNoQuestions.vue'
import TextInputQuestions from './TextInputQuestions.vue'
import questions from "../assets/questions.json";

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
  // If question has type 0, it's a yes/no question. 
  if(this.questions.questions[questionIndex].type == 0) 
    this.questionType = 0;
  // If it has type 1, it's a text input question
  else 
    this.questionType = 1;
};

</script>

<template>

  <!-- Only one should be loaded at the time, depending on the type of the current question-->
  <!-- This is for a text input question -->
  <text-input></text-input>

  <!-- This is for a yes/no question -->
  <yes-no :question="getCurrentQuestion()"></yes-no>

  <!-- IDEIA: o botão de submeter podia estar aqui em vez de nos componentes, e assim ativava logo o nextQuestion. Dentro do nextQuestion é que verificava o tipo de questão. Ou pode estar nos componentes e emitir um evento daqui -->
</template>
