<script>
export default {
  name: 'TextInputQuestions',
  props: {
    question: Object
  },
  mounted() {
    alert(this.question.number);
  },  
  methods: {
    submitText() {
      con(this.question.number);
      document.getElementById('text-area').innerHTML += this.question.text != null ? this.question.text + '\r\n' + '\r\n' : '';
      document.getElementById('text-area').innerHTML += document.getElementById('tInput').value;
      document.getElementById('text-area').innerHTML += '\r\n';
      document.getElementById('text-area').innerHTML += '\r\n';

      // Clear the text input for the next question 
      document.getElementById('tInput').value = '';

      this.$emit("answer", this.question.yes)
    }
  }
}
</script>

<template>
  <p>
    {{ question.question }}
  </p>
  <br>
  <div class="form">
    <div class="form-container">
      <input type="text" id="tInput" name="answer" placeholder="Escreva a sua resposta aqui" @keyup.enter="submitText()">
    </div>
    <br>
    <div class="form-container">
      <input type="submit" value="Submit" @click="submitText()">
    </div>
  </div>

</template>

<style>
  .form {
    width: 100%;
  }

  .form-container {
    width: 100%;
  }
</style>