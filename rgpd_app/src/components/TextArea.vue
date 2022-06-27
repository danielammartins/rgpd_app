<script setup>
const copyToClipboard = () => {
    let text = document.getElementById("text-area").value;

    navigator.clipboard.writeText(text)
            .then(() => {
              alert('Text copied to clipboard');
            })
            .catch(err => {
              alert('Error in copying text: ', err);
            });
   
};
</script>

<template>
  <div class="text-area-container">
    <textarea id="text-area" name="text-area" placeholder="Pode editar o seu texto aqui!"></textarea>
    <button id="copy-btn" @click="copyToClipboard()">Copiar</button>
  </div>

</template>

<style scoped>
textarea {
  width: 100%;
  height: fit-content;
  min-height: 200px;
}

#copy-btn {
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

#copy-btn:hover {
  background-color: #114b5f;
  color: white;
}
</style>