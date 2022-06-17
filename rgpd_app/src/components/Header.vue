<template>
  <button class="btnSair" type="button">Sair</button>
</template>

<style>
  .btnSair {
    position: absolute;
    right: 8vh;
    top: 8vh;
    border: none;
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
    z-index: 99;
  }

  .btnSair:hover {
    background-color: #555555;
    color: white;
  }
</style>
