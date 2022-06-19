<script setup>
import { ref, onMounted } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

let dateTime = null;

const content = ref({});

const getContent = async () => {
  const response = await fetch('http://localhost:3011/delta/delta');
  const json = await response.json();

  content.value = JSON.parse(json);
};

onMounted(getContent);

const setContent = async () => {
  await fetch('http://localhost:3011/delta/delta', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ title: 'delta', content: JSON.stringify(content.value)})
  });

  await getContent();

  // Gets current date; should be it's own function
  let current = new Date();
  let cDate = current.getFullYear() + '-' + (current.getMonth() + 1) + '-' + current.getDate();
  let cTime = current.getHours() + ":" + current.getMinutes() + ":" + current.getSeconds();
  dateTime = cDate + ' ' + cTime;
  
  alert('Conteúdo atualizado com sucesso!');
};


</script>

<template>
  <QuillEditor v-model:content="content" toolbar="#custom-toolbar">
    <template #toolbar>
      <div id="custom-toolbar">
        <select class="ql-size">
          <option value="small"></option>
          <option selected></option>
          <option value="large"></option>
          <option value="huge"></option>
        </select>
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
        <button class="ql-strike"></button>
        <button class="ql-script" value="sub"></button>
        <button class="ql-script" value="super"></button>
        <select class="ql-align">
          <option selected></option>
          <option value="center"></option>
          <option value="right"></option>
          <option value="justify"></option>
        </select>
        <button class="ql-list" value="ordered"></button>
        <button class="ql-list" value="bullet"></button>
        <button class="ql-blockquote"></button>
        <button class="ql-code-block"></button>
        <button class="ql-link"></button>
        <button class="ql-image"></button>
        <button id="your-button" @click="setContent()">Save</button>
      </div>
    </template>
  </QuillEditor>

  <!-- Tem de ir buscar a data do último update -->
  <p id="lastUpdate">Última atualização: {{ dateTime }}</p>

</template>

<style>
  #lastUpdate {
    padding-top: 15px;
  }
</style>

