<template>
  <button class="btnSair" type="button">Sair</button>
</template>

<style>
  .btnSair {
    position: absolute;
    right: 8vh;
    top: 8vh;
    background-color: white;
    color: black;
    border: 2px solid #114b5f;
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
