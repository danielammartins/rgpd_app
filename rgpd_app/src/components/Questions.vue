<script>

export default {
  name: 'Questions',
  data() {
    return {
      // Random value for initialization that will be changed as soon as the questions load
      question: { "type": 1 }
    }
  },
  // Loading the questions before the component is added to the DOM to avoid delays in loading the first question
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
    },
    submitText() {
      document.getElementById('text-area').innerHTML += this.question.text != null ? this.question.text + '\r\n' + '\r\n' : '';
      document.getElementById('text-area').innerHTML += document.getElementById('tInput').value;
      document.getElementById('text-area').innerHTML += '\r\n';
      document.getElementById('text-area').innerHTML += '\r\n';

      // Clear the text input for the next question 
      document.getElementById('tInput').value = '';

      this.answer(this.question.yes);
    },
    submitYesOrNo() {
      if (document.getElementById('yes').checked) {
        document.getElementById('yes').checked = false
        document.getElementById('text-area').innerHTML += this.question.text != null ? this.question.text : ''
        document.getElementById('text-area').innerHTML += '\r\n';
        this.answer(this.question.yes);
      }
      else if (document.getElementById('no').checked) {
        document.getElementById('no').checked = false
        this.answer(this.question.no);
      }
      else alert("PREENCHE TUDO, PREGUIÇOS@!")
    }
  }
}
</script>

<template>

  <!-- This is for a text input question -->
  <section v-if="question.type == 1">
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
        <input type="submit" value="Submeter"  @click="submitText()">
      </div>
    </div>
  </section>

  <section v-else-if="question.type == 0">
    <p>
    {{ question.question }}
  </p>
  <br>
  <div class="form">
    <div class="form-container">
      <input type="radio" id="yes" name="yesOrNo" value="Yes"/>
      <label for="yes"> Sim</label>
    </div>
    <br>
    <div class="form-container">
      <input type="radio" id="no" name="yesOrNo" value="No"/>
      <label for="no"> Não</label>
    </div>
    <br>
    <div class="form-container">
      <button type="submit" @click="submitYesOrNo()">Submeter</button>
    </div>
  </div>

  </section>

    <!--
  <TextInputQuestions v-if="question.type == 1" v-model="questionIndex" :question="question" @answer="answer" />
  <YesOrNo v-else-if="question.type == 0" v-model="questionIndex" :question="question" @answer="answer" />
  -->

  <div v-else @load="this.emit('finish')"></div>
</template>

<style>
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