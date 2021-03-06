<script>
import Questions from './Questions.vue'
import TextArea from './TextArea.vue'
import { saveAs } from 'file-saver';

export default {
  name: 'app',
  data() {
    return {
      inQuestions: false,
      inWelcome: true,
      inFinish: false,
      finalText: "",
      rgpdNotApplicable: false
    }
  },
  mounted() {
    let externalScript = document.createElement('script')
    externalScript.setAttribute('src', 'https://cdnjs.cloudflare.com/ajax/libs/FileSaver.js/1.3.8/FileSaver.min.js')
    document.head.appendChild(externalScript)
  },
  methods: {
    toggle() {
      this.inQuestions = !this.inQuestions
    },
    toggleWelcome() {
      this.inWelcome = !this.inWelcome;
      this.toggle();
    },
    finish(text) {
      this.inWelcome = false;
      this.inQuestions = false;
      this.inFinish = true;
      this.finalText = text;
    },
    leave() {
      this.inQuestions = false;
    },
    downloadPT() {
      var blob = new Blob([this.finalText], { type: "text/plain;charset=utf-8"});
      saveAs(blob, "pt.txt");
    },
    async downloadEN() {
      const text = await fetch("https://api-free.deepl.com/v2/translate", {
        body: "auth_key=d28fbfff-dec4-c45f-c65c-83df20cb17e0:fx&text=" + this.finalText + "&target_lang=EN",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        method: "POST"
      });

      const jsonText = await text.json();

      const translated = jsonText.translations[0].text;

      var blob = new Blob([translated], { type: "text/plain;charset=utf-8"});
      saveAs(blob, "en.txt");  
    },
    toggleRGPD() {
        this.rgpdNotApplicable = true;
    }
  },
  components: {
    "questions": Questions,
    "text-area": TextArea
  }
}

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

  <div class="container" v-if="!inWelcome && !quizCompleted && inQuestions">
    <div class="questions-container">
      <questions @finish="finish" @toggleRGPD="toggleRGPD"></questions>
    </div>
    <div class="editor-container">
      <text-area></text-area>
    </div>
  </div>
    
  <section v-if="inFinish" class="text-section">
    <p v-if="rgpdNotApplicable" id="rgpd-not">
      O Regulamento Geral de Proteção de Dados não se aplica ao seu tratamento. Consulte o Artigo 9º do RGPD.
    </p>
    <p>  
      Obrigada pela visita!
    </p>
    <br>
    <p>
      Qualquer questão ou sugestão de melhoria é favor contactar daniela.madeira.martins@ubi.pt.
    </p>
    <br>
    <p>
      Se encontrar um erro ou quiser contribuir para o desenvolvimento da plataforma, por favor utilize o GitHub ou envie um email.
    </p>
    <div v-if="!rgpdNotApplicable" id="download-btn">
      <button @click="downloadPT()">Descarregar PT</button>
      <button @click="downloadEN()">Descarregar EN</button>
    </div>  
    
  </section>

</template>

<style scoped>
  .container {
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
    font-size: 1.3rem;
    padding: 20px;
    width: 70%;
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

  #rgpd-not {
    font-weight: bold;
  }
</style>