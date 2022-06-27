<script setup>
import { ref } from 'vue'

const props = defineProps({
  modelValue: Number,
  answer: String,
  question: Object
})

const emit = defineEmits(['update:modelValue', 'answer'])

const yesOrNo = ref('')

const submitYesOrNo = () => {
  emit('update:modelValue', Number(props?.question?.index) + 1 || 0)
  emit('answer', yesOrNo.value)
}
</script>

<template>
  <p>
    {{ question.question }}
  </p>
  <br>
  <form @submit.prevent="submitYesOrNo">
    <div class="form-container">
      <input type="radio" id="yes" name="yesOrNo" value="Yes" v-model="yesOrNo" :checked="false"/>
      <label for="yes">  Sim</label>
    </div>
    <br>
    <div class="form-container">
      <input type="radio" id="no" name="yesOrNo" value="No" v-model="yesOrNo" :checked="false"/>
      <label for="no">  Não</label>
    </div>
    <br>
    <div class="form-container">
      <button type="submit">Submit</button>
    </div>
  </form>

</template>

<style scoped>
  form {
    width: 100%;
  }

  .form-container {
    width: 100%;
  }

  .form-container button {
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

  .form-container button:hover {
    background-color: #114b5f;
    color: white;
  }
</style>
  
<script>

</script>
