<script setup>
import { ref } from 'vue'
import YesOrNo from './yesOrNoQuestions.vue'
import TextInputQuestions from './TextInputQuestions.vue'
import JsonQuestions from "../assets/questions.json";

const props = defineProps({
  questionNumber: String
});

const allQuestions = ref(JsonQuestions.questions.map((item, index) => {
  item['index'] = index
  item['answer'] = ''
  return item
}));



const emit = defineEmits(['finish']);

const currectQuestion = ref(allQuestions.value[0]);

const questionIndex = ref(0);

const answer = (value) => {
  currectQuestion.value.answer = value
  
  const nextQuestion = Number(questionIndex.value)
  const totalQuestion = Number(allQuestions.value.length) - 1
  if(currectQuestion.value.answer !== '' && nextQuestion <= totalQuestion) {
    currectQuestion.value = allQuestions.value[nextQuestion]
  } else {
    currectQuestion.value.type = allQuestions.value[0].type = 3
  }
  
  console.log(allQuestions.value)
};

</script>

<template> 
  <!-- This is for a text input question -->
  <TextInputQuestions v-if="Number(currectQuestion.type) === 1" v-model="questionIndex" :question="currectQuestion" @answer="answer" />
  <!-- This is for a yes/no question -->
  <YesOrNo v-else-if="Number(currectQuestion.type) === 0" v-model="questionIndex" :question="currectQuestion" @answer="answer" />
  
  <div v-else @load="this.emit('finish')">
  </div>
</template>
