<template>
  <p>
    A batata é o melhor ingrediente do mundo?
  </p>
  <form>
    <input type="radio" id="yes" name="yesOrNo" value="Yes">
    <label for="yes">Sim</label>
    <br>
    <input type="radio" id="no" name="yesOrNo" value="No">
    <label for="no">Não</label>
    <input type="submit" value="Submit">
  </form>

</template>

<style>

input[type=submit] {
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

</style>
  
<script>

</script>