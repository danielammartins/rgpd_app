<template>
  <div class="container">
    <button class="btnHome" id="btnGerar" @click="goToQuestions">
      Gerar Pedido de Consentimento/Nota Informativa
    </button>
    <button class="btnHome" id="btnConsultar">
      <a href="https://eur-lex.europa.eu/legal-content/PT/TXT/PDF/?uri=CELEX:32016R0679&from=PT" target="_blank">
        Consultar o Regulamento Geral de Proteção de Dados
      </a>
    </button>
  </div>
</template>
<style>
  .container {
    width: fit-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: auto;
    margin-top: 40vh;
    
  }
  .btnHome {
    display: inline-block;
    background-color: white;
    color: black;
    border: 2px solid #e7e7e7;
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
    background-color: #555555;
    color: white;
  }

  #btnGerar {
    font-weight: bold;
  }
</style>
  
<script>

const goToQuestions = () => {
	router.push("/questions");
	}
</script>