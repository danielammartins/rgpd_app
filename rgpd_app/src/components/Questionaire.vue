<script>
import Questions from './Questions.vue'
import TextArea from './TextArea.vue'
import { ref } from 'vue'

export default {
  name: 'app',
  data() {
    return {
      inQuestions: false,
      inWelcome: true,
      inFinish: false
    }
  },
  methods: {
    toggle() {
      this.inQuestions = !this.inQuestions
    },
    toggleWelcome() {
      this.inWelcome = !this.inWelcome;
      this.toggle();
    },
    finish() {
      this.inWelcome = false;
      this.inQuestions = false;
      this.inFinish = true;
    },
    leave() {
      this.inQuestions = false;
    }
  },
  components: {
    "questions": Questions,
    "text-area": TextArea
  }
}

const quizCompleted = ref(false);

</script>


<template>

  <section v-if="inWelcome" class="text-section">
    <p>
      Este questionário vai guiá-lo ao longo de um conjunto de perguntas com o objetivo de compor uma proposta de nota informativa ou consentimento.
    </p>
    <br>
    <p>
      A proposta encontra-se devidamente dividida por secções e em concordância com o Regulamento Geral de Proteção de Dados da União Europeia. 
    </p>
    <br>
    <p>
      Não é permitido voltar atrás, e sair da página antes de terminar leva à perda de toda a informação.
    </p>
    <br>
    <p>
      Depois de terminado o questionário, os dados recolhidos serão eliminados. 
    </p>
    <button @click="toggleWelcome()">Continuar</button>
  </section>

  <section v-if="inFinish" class="text-section">
    <p>  
      Obrigada pela visita!
    </p>
    <br>
    <p>
      Qualquer questão ou sugestão de melhoria é favor contactar me@me.pt.
    </p>
    <br>
    <p>
      Se encontrar um erro ou quiser contribuir para o desenvolvimento da plataforma, por favor crie um Issue no GitHub ou envie um email.
    </p>
    <div id="download-btn">
      <button>Descarregar PT</button>
      <button>Descarregar EN</button>
    </div>
    
  </section>

  <div class="container" v-if="!inWelcome && !quizCompleted && inQuestions">
    <div class="questions-container">
      <questions @finish="finish"></questions>
    </div>
    <div class="editor-container">
      <text-area></text-area>
    </div>
    {{ timestamp }}
  </div>
    

</template>

<style scoped>
  .container {
    border: 2px solid purple;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    width: 85vw;
    height: fit-content;
    margin: auto;
    margin-top: 25vh;
    margin-bottom: 25vh;
  }

  .editor-container {
    padding-left: 20px;
    padding-right: 20px;
    width: 100%;
    height: 100%;
  }

  .questions-container {
    border: 2px solid green;
    font-size: 1.3rem;
    padding: 20px;
  }

  @media screen and (max-width:600px) {
    .container {
      flex-direction: column;
    }

    .editor-container {
      padding-top: 20px;
    }
  }

  .text-section {
    text-align: center;
    font-size: 1.5em;
    line-height: 1.5em;
    width: 60vw;
    height: fit-content;
    margin: auto;
    margin-top: 25vh;
    margin-bottom: 25vh;
  }

  .text-section button {
    display: inline-block;
    background-color: white;
    color: black;
    border: 2px solid #114c5f4f;
    border-radius: 4px;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    margin-top: 5vh;
    transition-duration: 0.4s;
    cursor: pointer;
  }

  .text-section button:hover {
    background-color: #114b5f;
    color: white;
  }

  #finish {
    background-color: white;
    color: black;
    border: 2px solid #114c5f1e;
    border-radius: 4px;
    padding: 16px 32px;
    margin-top: 5%;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition-duration: 0.4s;
    cursor: pointer;
  }

  #finish:hover {
    background-color: #114b5f;
    color: white;
  }

  #download-btn {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width:768px) {
    #download-btn {
      flex-direction: column;
      margin: 0;
    }

    #download-btn button {
      margin-top: 3vh;
    }
  }

</style>