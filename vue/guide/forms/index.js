var vm1 = new Vue({
  el: '#app1',
  data: {
    message: '',
    checked: false
  }
})

var vm2 = new Vue({
  el: '#app2',
  data: {
    checkedNames: []
  }
})

var vm3 = new Vue({
  el: '#app3',
  data: {
    picked: ''
  }
})

var vm4 = new Vue({
  el: '#app4',
  data: {
    selected: []
  }
})

var mv5 = new Vue({
  el: '#app5',
  data: {
    selected: 'A',
    options: [
      {text: "One", value: 'A'},
      {text: "Two", value: 'B'},
      {text: "Third", value: 'C'}
    ]
  }
})

var vm6 = new Vue({
  el: '#app6',
  data: {
    toggle: "no"
  }
})

var vm7 = new Vue({
  el: '#app7',
  data: {
    selected: []
  }
})