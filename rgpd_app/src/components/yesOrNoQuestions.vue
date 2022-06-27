<script>
import { ref } from 'vue'

export default {
  name: 'yesOrNoQuestions',
  props: {
    question: Object
  },
  methods: {
    submitYesOrNo() {
      if (document.getElementById('yes').checked) {
        document.getElementById('yes').checked = false
        document.getElementById('text-area').innerHTML += this.question.text != null ? this.question.text : ''
        this.$emit("answer", this.question.yes)
      }
      else if (document.getElementById('no').checked) {
        document.getElementById('no').checked = false
        this.$emit("answer", this.question.no)
      }
      else alert("PREENCHE TUDO, PREGUIÇOS@!")
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
      <input type="radio" id="yes" name="yesOrNo" value="Yes" />
      <label for="yes"> Sim</label>
    </div>
    <br>
    <div class="form-container">
      <input type="radio" id="no" name="yesOrNo" value="No"/>
      <label for="no"> Não</label>
    </div>
    <br>
    <div class="form-container">
      <button type="submit" @click="submitYesOrNo()">Submit</button>
    </div>
  </div>

</template>

<style scoped>
.form {
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
