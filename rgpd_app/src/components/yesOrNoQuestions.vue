<script>
export default {
  
  props: {
    question: String
  }
}
</script>

<template>
  <p>
    {{ this.question }}
  </p>
  <br>
  <form>
    <div class="form-container">
      <input type="radio" id="yes" name="yesOrNo" value="Yes">
      <label for="yes">  Sim</label>
    </div>
    <br>
    <div class="form-container">
      <input type="radio" id="no" name="yesOrNo" value="No">
      <label for="no">  Não</label>
    </div>
    <br>
    <div class="form-container">
      <button >Submit</button>
    </div>
  </form>

</template>

<style scoped>
  form {
    width: 100%;
  }

  .form-container {
    width: 100%;
  }

  .form-container button {
    background-color: white;
    color: black;
    border: 2px solid #114c5f57;
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
  
<script>

</script>