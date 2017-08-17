<template>
  <div class="mainpage">
    <div class='ui centered grid container'>
      <div class='twelve wide column'>
        <div>
          <h1 class='ui centered header'>
            <b>Currency Converter</b>
          </h1>
        </div>
        <div class='ui divider'></div>
  
        <div class='ui form'>
          <div class='six wide field'>
            <label>
              <b>Amount</b>
            </label>
            <input type='text' placeholder="Enter positive currency amount">
          </div>
  
          <div class='six wide field'>
            <label>
              <b>From Currency</b>
            </label>
            <div class='ui selection dropdown'>
              <input type='hidden' name='country'>
              <i class='dropdown icon'></i>
              <div class='default text'>Select a currency</div>
              <div class='menu'>
                <div class='item' data-value='0'>Fake</div>
              </div>
            </div>
          </div>
  
          <div class='six wide field'>
            <label>
              <b>To Currency</b>
            </label>
            <div class='ui selection dropdown'>
              <input type='hidden' name='country'>
              <i class='dropdown icon'></i>
              <div class='default text'>Select a currency</div>
              <div class='menu'>
                <div class='item' data-value='0'>Fake</div>
              </div>
            </div>
          </div>
  
          <div class='six wide field'>
            <div class='ui basic button'>Convert</div>
          </div>
        </div>
  
        <div class='ui divider'></div>
        <div class='ui vertical center aligned segment'>
          <label>2017 Created by <a v-bind:href='githubURL'>Jin-Seong, Yu</a></label>
          <br>
          <label>Exchage rates provided by <a v-bind:href='apiURL'>Yahoo Open API</a></label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mainpage',
  data() {
    return {
      githubURL: 'https://github.com/U1031',
      apiURL: 'https://developer.yahoo.com/yql/console/'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mainpage {
  position: relative;
  width: 100%;
  height: 100%;
  border: 0.5px solid red;
}

.ui.form {
  border: 0.5px solid green;
}
</style>
