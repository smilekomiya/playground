var vm1 = new Vue({
  el: '#app',
  data: {
    counter: 0
  }
})

var vm2 = new Vue({
  el: '#app2',
  data: {
    name: 'Vue.js'
  },
  methods: {
    greet: function (event) {
      // メソッド内の `this` は、 Vue インスタンスを参照します
      alert('Hello ' + this.name + '!')
      // `event` は、ネイティブ DOM イベントです
      if (event) {
        alert(event.target.tagName)
      }
    }
  }
})

var vm3 = new Vue({
  el: '#app3',
  methods: {
    say: function (message) {
      alert(message)
    }
  }
})

var vm4 = new Vue({
  el: '#app4',
  methods: {
    warn: function (message, event) {
      if (event) {
        event.preventDefault()
      }
      alert(message)
    }
  }
})