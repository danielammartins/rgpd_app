<script setup>
import { ref, reactive, onMounted } from 'vue'
import Quill from 'quill'
import 'quill/dist/quill.snow.css'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'
import { getText, updateText } from '../services/EditorServices'

const editor = ref(null)
const quill = ref(null)
const dateTime = ref('')
const content = ref({})
const options = reactive({
  modules: {
    syntax: false,
    toolbar: '#toolbar-container'
  },
  placeholder: 'Compose an epic...',
  theme: 'snow'
})

onMounted(() => {
  if(editor.value !== null) {
    quill.value = new Quill(editor.value, options)
  }
})

const getContent = async () => {
  const data = await (await fetch('http://localhost:3011/tecontent/1')).json();
  if(data.length >= 1) {
    content.value = JSON.parse(data[0].content)
    if(quill.value !== null) {
      quill.value.setContents(content.value)
    }
    console.log(content.value);
  }
};

onMounted(getContent);

const setContent = async () => {
  if(quill.value !== null) {
    //content.value = quill.value.getContents()
  }
  await fetch('http://localhost:3011/tecontent/1', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ 
      content: JSON.stringify(content.value)
    })
  });

  await getContent();

  // DEV o conteúdo está aqui!! Vai buscar o que está no editor e guarda logo na BD
  console.log(JSON.stringify(content.value))
 
  alert('Conteúdo atualizado com sucesso!');
};

const test = () => {
  setContent();
}

const copyContent = () => {
  setContent();

  var text = JSON.stringify(content.value);

  navigator.clipboard.writeText(text);

  alert("Texto copiado!");
}

// FIXME
const updateTime =  () => {
  let current = new Date();
  let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
  let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
  
  dateTime.value = cDate + ' ' + cTime;

  console.log("Updated time: " + dateTime.value);
};

</script>

<template>
  <QuillEditor v-model:content="content" contentType="delta" toolbar="#custom-toolbar">
    <template #toolbar>
      <div id="custom-toolbar">
        <select class="ql-header">
          <option :value="1"></option>
          <option :value="2"></option>
          <option :value="3"></option>
          <option :value="4"></option>
          <option :value="5"></option>
          <option :value="6"></option>
          <option selected></option>
        </select>
        <button class="ql-bold"></button>
        <button class="ql-italic"></button>
        <button class="ql-underline"></button>
        <select class="ql-align">
          <option selected></option>
          <option value="center"></option>
          <option value="right"></option>
          <option value="justify"></option>
        </select>
        <button class="ql-list" value="ordered"></button>
        <button class="ql-list" value="bullet"></button>
        <button class="ql-link"></button>
        <button type="button" id="your-button" @click="() => {setContent(); updateTime()}">Save</button>
        <button type="button" id="your-button" @click="copyContent()">Copy to Clipboard</button>
      </div>
    </template>
  </QuillEditor>

  <div id="toolbar-container">
    <span class="ql-formats">
      <select class="ql-font"></select>
      <select class="ql-size"></select>
    </span>
    <span class="ql-formats">
      <button class="ql-bold"></button>
      <button class="ql-italic"></button>
      <button class="ql-underline"></button>
      <button class="ql-strike"></button>
    </span>
    <span class="ql-formats">
      <select class="ql-color"></select>
      <select class="ql-background"></select>
    </span>
    <span class="ql-formats">
      <button class="ql-script" value="sub"></button>
      <button class="ql-script" value="super"></button>
    </span>
    <span class="ql-formats">
      <button class="ql-header" value="1"></button>
      <button class="ql-header" value="2"></button>
      <button class="ql-blockquote"></button>
      <button class="ql-code-block"></button>
    </span>
    <span class="ql-formats">
      <button class="ql-list" value="ordered"></button>
      <button class="ql-list" value="bullet"></button>
      <button class="ql-indent" value="-1"></button>
      <button class="ql-indent" value="+1"></button>
    </span>
    <span class="ql-formats">
      <button class="ql-direction" value="rtl"></button>
      <select class="ql-align"></select>
    </span>
    <span class="ql-formats">
      <button class="ql-link"></button>
      <button class="ql-image"></button>
      <button class="ql-video"></button>
      <button class="ql-formula"></button>
    </span>
    <span class="ql-formats">
      <!--<button class="ql-clean"></button>-->
      <button id="custom-button" @click="setContent(); updateTime();">Save</button>
    </span>
  </div>
  
  <div ref="editor"></div>

  <!-- Tem de ir buscar a data do último update -->
  <p id="lastUpdate">Última atualização: {{ dateTime }}</p>

  <button @click="test()">Gerar Markdown</button>
</template>

<style>
  #lastUpdate {
    padding-top: 15px;
  }

  #your-button {
    width: fit-content;
    background-color: white;
    color: black;
    border: 1px solid #114c5f1e;
    border-radius: 4px;
    text-align: center;
    text-decoration: none;
    transition-duration: 0.4s;
    margin-right: 8px;
  }

  #your-button:hover {
    background-color: #114b5f;
    color: white;
    font-weight: bold;
  }
</style>

