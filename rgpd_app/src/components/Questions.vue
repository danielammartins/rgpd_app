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
    const data = await (await fetch(`https://localhost:3011/question/1`)).json();
    this.question = data
  },
  methods: {
    async answer(nextQ) {
      if (nextQ != 0) {
        const data = await (await fetch(`https://localhost:3011/question/${nextQ}`)).json();
        this.question = data
      } 
      else { 
        this.$emit("finish", document.getElementById('text-area').innerHTML)
      }
    },
    submitText() {
      if(document.getElementById('tInput').value == '') {
        alert("Campo de preenchimento obrigatório");
        return;
      }

      if(this.question.id == 7) {
            document.getElementById('text-area').innerHTML += "SECÇÃO II - Finalidade do Tratamento dos Dados";
      }
      document.getElementById('text-area').innerHTML += '\r\n';
      document.getElementById('text-area').innerHTML += document.getElementById('tInput').value;
      document.getElementById('text-area').innerHTML += '\r\n';
      document.getElementById('text-area').innerHTML += '\r\n';
      document.getElementById('text-area').innerHTML += this.question.text != null ? this.question.text + '\r\n' : '';
      document.getElementById('text-area').innerHTML += '\r\n';

      
      // Clear the text input for the next question 
      document.getElementById('tInput').value = '';

      this.answer(this.question.yes);
    },
    submitYesOrNo() {
      // TODO o texto vai ficar guardado na BD em vez de escrito aqui
      // TODO adicionar um counter para as secções, assim a III pode não existir e passa logo para a IV
      // FIXME Deve haver uma forma mais prática de fazer isto  
      if(document.getElementById('yes').checked || document.getElementById('no').checked) {
        if (document.getElementById('yes').checked) {
          if(this.question.id == 9) {
            document.getElementById('text-area').innerHTML += "SECÇÃO III - Licitude do Tratamento dos Dados";
            document.getElementById('text-area').innerHTML += '\r\n';
          }
          document.getElementById('yes').checked = false
          document.getElementById('text-area').innerHTML += this.question.text != null ? this.question.text : ''
          document.getElementById('text-area').innerHTML += '\r\n';
          this.answer(this.question.yes);

          if(this.question.id == 9) {
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "SECÇÃO IV - Direitos do Titular dos Dados";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO DE ACESSO";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular dos dados tem, de acordo com o Artigo 15º, direito de obter do responsável pelo tratamento a confirmação de que os dados pessoais que lhe digam respeito são ou não objecto de tratamento. Se for o caso, o titulare dos dados tem também o direito de aceder aos seus dados e às informações mencionadas no referido artigo";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO AO ESQUECIMENTO";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular dos dados tem, de acordo com o Artigo 17º, o direito de obter do responsável pelo tratamento o apagamento dos seus dados pessoas quando se aplique um dos motivos apresentados no ponto 1 do mesmo artigo.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO À PORTABILIDADE DOS DADOS";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "Como especificado no Artigo 20º, o  titular dos dados tem o direito de receber os dados pessoais que lhe digam respeito e que tenha fornecido a um responsável pelo tratamento, num formato estruturado, de uso corrente e de leitura automática.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO À LIMITAÇÃO DO TRATAMENTO";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular dos dados tem o direito de obter do responsável a limitação do tratamento, se se aplicar qualquer uma das condições previstar no Artigo 18º.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO À RETIFICAÇÃO";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular tem direito, e como consta no Artigo 16º, de obter do responsável do tratamento a retificação dos dados pessoais inexatos que lhe digam respeito.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO DE APRESENTAR RECLAMAÇÃO";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular dos dados tem direito a apresentar reclamação a uma autoridade de controlo se considerar que o tratamento dos dados pessoais  que lhe diga respeito viola o presente regulamento, e o direito à ação judicial se a autoridade de controlo competente não tratar a reclamação e não informar o titular dos dados, no prazo definido pelo Artigo 78º, nº2, sobre o andamento ou resultado da reclamação apresentada.  A Comissão Nacional de Proteção de Dados (CNPD) é a autoridade de controlo nacional para efeitos do RGPD.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO DE OPOSIÇÃO AO TRATAMENTO DOS DADOS";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular dos dados tem o direito de se opor a qualquer momento, por motivos relacionados com a sua situação particular, ao tratamento dos dados pessoais que lhe digam respeito com base no artigo 6º, n.º1, alínea e) ou f), ou no artigo 6º, nº 4, incluindo a definição de perfis com base nessas disposições.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';

          }
        }
        else if (document.getElementById('no').checked) {
          if(this.question.id == 4) {
            this.$emit("toggleRGPD"); 
          }

          if(this.question.id == 8) {
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "SECÇÃO IV - Direitos do Titular dos Dados";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO DE ACESSO";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular dos dados tem, de acordo com o Artigo 15º, direito de obter do responsável pelo tratamento a confirmação de que os dados pessoais que lhe digam respeito são ou não objecto de tratamento. Se for o caso, o titulare dos dados tem também o direito de aceder aos seus dados e às informações mencionadas no referido artigo";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO AO ESQUECIMENTO";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular dos dados tem, de acordo com o Artigo 17º, o direito de obter do responsável pelo tratamento o apagamento dos seus dados pessoas quando se aplique um dos motivos apresentados no ponto 1 do mesmo artigo.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO À PORTABILIDADE DOS DADOS";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "Como especificado no Artigo 20º, o  titular dos dados tem o direito de receber os dados pessoais que lhe digam respeito e que tenha fornecido a um responsável pelo tratamento, num formato estruturado, de uso corrente e de leitura automática.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO À LIMITAÇÃO DO TRATAMENTO";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular dos dados tem o direito de obter do responsável a limitação do tratamento, se se aplicar qualquer uma das condições previstar no Artigo 18º.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO À RETIFICAÇÃO";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular tem direito, e como consta no Artigo 16º, de obter do responsável do tratamento a retificação dos dados pessoais inexatos que lhe digam respeito.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO DE APRESENTAR RECLAMAÇÃO";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular dos dados tem direito a apresentar reclamação a uma autoridade de controlo se considerar que o tratamento dos dados pessoais  que lhe diga respeito viola o presente regulamento, e o direito à ação judicial se a autoridade de controlo competente não tratar a reclamação e não informar o titular dos dados, no prazo definido pelo Artigo 78º, nº2, sobre o andamento ou resultado da reclamação apresentada.  A Comissão Nacional de Proteção de Dados (CNPD) é a autoridade de controlo nacional para efeitos do RGPD.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO DE OPOSIÇÃO AO TRATAMENTO DOS DADOS";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular dos dados tem o direito de se opor a qualquer momento, por motivos relacionados com a sua situação particular, ao tratamento dos dados pessoais que lhe digam respeito com base no artigo 6º, n.º1, alínea e) ou f), ou no artigo 6º, nº 4, incluindo a definição de perfis com base nessas disposições.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
          }

          if(this.question.id == 9) {
            alert("O tratamento dos dados pode não ser válido. Por favor consulte o Artigo 9º do RGPD.");
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "SECÇÃO IV - Direitos do Titular dos Dados";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO DE ACESSO";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular dos dados tem, de acordo com o Artigo 15º, direito de obter do responsável pelo tratamento a confirmação de que os dados pessoais que lhe digam respeito são ou não objecto de tratamento. Se for o caso, o titulare dos dados tem também o direito de aceder aos seus dados e às informações mencionadas no referido artigo";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO AO ESQUECIMENTO";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular dos dados tem, de acordo com o Artigo 17º, o direito de obter do responsável pelo tratamento o apagamento dos seus dados pessoas quando se aplique um dos motivos apresentados no ponto 1 do mesmo artigo.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO À PORTABILIDADE DOS DADOS";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "Como especificado no Artigo 20º, o  titular dos dados tem o direito de receber os dados pessoais que lhe digam respeito e que tenha fornecido a um responsável pelo tratamento, num formato estruturado, de uso corrente e de leitura automática.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO À LIMITAÇÃO DO TRATAMENTO";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular dos dados tem o direito de obter do responsável a limitação do tratamento, se se aplicar qualquer uma das condições previstar no Artigo 18º.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO À RETIFICAÇÃO";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular tem direito, e como consta no Artigo 16º, de obter do responsável do tratamento a retificação dos dados pessoais inexatos que lhe digam respeito.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO DE APRESENTAR RECLAMAÇÃO";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular dos dados tem direito a apresentar reclamação a uma autoridade de controlo se considerar que o tratamento dos dados pessoais  que lhe diga respeito viola o presente regulamento, e o direito à ação judicial se a autoridade de controlo competente não tratar a reclamação e não informar o titular dos dados, no prazo definido pelo Artigo 78º, nº2, sobre o andamento ou resultado da reclamação apresentada.  A Comissão Nacional de Proteção de Dados (CNPD) é a autoridade de controlo nacional para efeitos do RGPD.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "DIREITO DE OPOSIÇÃO AO TRATAMENTO DOS DADOS";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "O titular dos dados tem o direito de se opor a qualquer momento, por motivos relacionados com a sua situação particular, ao tratamento dos dados pessoais que lhe digam respeito com base no artigo 6º, n.º1, alínea e) ou f), ou no artigo 6º, nº 4, incluindo a definição de perfis com base nessas disposições.";
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += '\r\n';
          }
          document.getElementById('no').checked = false
          this.answer(this.question.no);
        }

        if(this.question.id == 5) {
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "SECÇÃO I - Identificação do Responsável pelo Tratamento dos Dados";
        }
        if(this.question.id == 6) {
            document.getElementById('text-area').innerHTML += '\r\n';
            document.getElementById('text-area').innerHTML += "SECÇÃO II - Finalidade do Tratamento dos Dados";
        }
      }
      else alert("Por favor escolha uma opção.");

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
        <!-- FIXME devia ser uma textarea -->
        

        <input type="text" id="tInput" name="answer" :value="question.tfValue" required placeholder="Escreva a sua resposta aqui"
          @keyup.enter="submitText()">
      </div>
      <br>
      <div class="form-container">
        <input type="submit" value="Submeter" @click="submitText()">
      </div>
    </div>
  </section>

  <!-- This is for a y/n question -->
  <section v-else-if="question.type == 0">
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
        <input type="radio" id="no" name="yesOrNo" value="No" />
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