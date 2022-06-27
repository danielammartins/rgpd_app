<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: Number,
  answer: String,
  question: Object
})

const emit = defineEmits(['update:modelValue', 'answer'])

const textInput = ref('')

const submitText = () => {
  emit('update:modelValue', Number(props?.question?.index) + 1 || 0)
  emit('answer', textInput.value)
};

</script>

<template>
  <p>
    {{ question.question }}
  </p>
  <br>
  <form @submit.prevent="submitText">
    <div class="form-container">
      <input type="text" v-model="textInput" id="tInput" name="answer" placeholder="Escreva a sua resposta aqui">
    </div>
    <br>
    <div class="form-container">
      <input type="submit" value="Submit">
    </div>
  </form>

</template>

<style>
  form {
    width: 100%;
  }

  .form-container {
    width: 100%;
  }
</style>