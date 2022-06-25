<script>
export default {
  data() {
    return {
      timestamp: this.generateTimestamp()
    }
  },
  props: {
    inQuestions: Boolean
  },
  methods: {
    toggle() {
      this.$emit('toggleInQuestions');
    },
    generateTimestamp() {
      let current = new Date();
      let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
      let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds() + ":" + current.getMilliseconds();
  
      return (cDate + '.' + cTime);
    }
  }
}
</script>

<template>

  <div class="container">

    <button class="btnHome" id="btnGerar" @click="toggle()">
      Gerar Pedido de Consentimento / Nota Informativa
    </button>

    <button class="btnHome" id="btnConsultar">
      <a href="https://eur-lex.europa.eu/legal-content/PT/TXT/PDF/?uri=CELEX:32016R0679&from=PT" target="_blank">
        Consultar o Regulamento Geral de Proteção de Dados
      </a>
    </button>
  </div>

</template>

<style scoped>
  .container {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 35vh;
  }

  .btnHome {
    display: inline-block;
    background-color: white;
    color: black;
    border: 2px solid #114c5f4f;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
  }

  .btnHome:hover {
    background-color: #114b5f;
    color: white;
  }

  .btnHome:hover a {
    color: white;
  }

  #btnGerar {
    font-weight: bold;
  }

  @media screen and (max-width: 600px) {
    .container {
      margin-top: 30vh;
      width: 80vw;
    }  
}
</style>