<template>
  <div class="mainpage">
    <div class='ui centered grid container'>
      <div class='ui five wide center aligned column'>

        <!--header-->
        <div class='row'>
          <div class='ui basic segment'>
            <h1 class='ui centered header'>
              <b>Currency Converter</b>
            </h1>
          </div>
        </div>

        <div class='ui divider'></div>

        <!--body-->
        <div class='row'>
          <div class='ui basic left aligned segment'>
            <div class='ui form'>
              <div class='full wide field'>
                <label>
                  <b>Amount</b>
                </label>
                <input v-model="amount" type='text' placeholder="Enter positive currency amount">
              </div>

              <div class='full wide field'>
                <label>
                  <b>From Currency</b>
                </label>
                <div class='ui from selection dropdown'>
                  <input type='hidden' name='country'>
                  <i class='dropdown icon'></i>
                  <div class='default text' v-on:click='from_dropdown_function'>Select a currency</div>
                  <div class='menu'>
                    <div class='item' v-for="code in money_code" v-on:click='from_code_name(code.code)'>{{code.code}}</div>
                  </div>
                </div>
              </div>

              <div class='full wide field'>
                <label>
                  <b>To Currency</b>
                </label>
                <div class='ui to selection dropdown'>
                  <input type='hidden' name='country'>
                  <i class='dropdown icon'></i>
                  <div class='default text' v-on:click='to_dropdown_function'>Select a currency</div>
                  <div class='menu'>
                    <div class='item' v-for="code in money_code" v-on:click='to_code_name(code.code)'>{{code.code}}</div>
                  </div>
                </div>
              </div>

              <div class='full wide field'>
                <label>
                  <b>Result</b>
                </label>
                <div class='ui tertiary inverted segment'>
                </div>
              </div>

            </div>
          </div>
          <div class='ui basic sement'>
            <div class='ui basic button' v-on:click='test'>Convert</div>
          </div>
        </div>

        <div class='ui divider'></div>

        <!--footer-->
        <div class='row'>
          <div class='ui basic segment'>
            <label>2017 Created by
              <a v-bind:href='githubURL'>Jin-Seong, Yu</a>
            </label>
            <br>
            <label>Exchage rates provided by
              <a v-bind:href='apiURL'>Yahoo Open API</a>
            </label>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
// const currency = require('./currency.json')


export default {
  name: 'mainpage',
  data() {
    return {
      githubURL: 'https://github.com/U1031',
      apiURL: 'https://developer.yahoo.com/yql/console/',
      money_code: [],
      to_code: '',
      from_code: '',
      amount: ''
    }
  },
  methods: {
    test: function() {
      // for (var i = 0; i < Object.keys(this.money_code).length; i++) {
      //   console.log(Object.keys(this.money_code)[i]);
      // }
      // console.log(this.to_code + ' and '+ this.from_code)
      console.log(this.amount)
      // const baseURI = 'https://query.yahooapis.com/v1/public/yql?q=show%20tables&format=json&diagnostics=true&callback='
      // this.$http.get(`${baseURI}`)
      //   .then((result) => {
      //     console.log(result)
      //   })
      //   .catch(function(error) {
      //     console.log(error)
      //     window.alert(error)
      //   })

    },
    from_dropdown_function: function() {
      $('.ui.from.selection.dropdown').dropdown()
    },
    to_dropdown_function: function() {
      $('.ui.to.selection.dropdown').dropdown()
    },
    from_code_name: function(name) {
      console.log(name)
      this.from_code = name
    },
    to_code_name: function(name) {
      console.log(name)
      this.to_code = name
    }
  },
  created() {
    this.money_code = require('../currency.json')
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.mainpage {
  position: relative;
  width: 100%;
  height: 100%;
  /*border: 0.5px solid red;*/
}

.ui.form {
  /*border: 0.5px solid green;*/
}
</style>
