<script>
export default {
  props: {
    inQuestions: Boolean
  },
  methods: {
    leave() {
      this.$emit('leave');
    }
  }
}
</script>

<template>
  <button class="btnSair" type="button" @click="leave()">Sair</button>

</template>

<style>
  .btnSair {
    position: absolute;
    right: 8vh;
    top: 8vh;
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
    z-index: 99;
    transition-duration: 0.4s;
  }

  .btnSair:hover {
    background-color: #114b5f;
    color: white;
  }
</style>
