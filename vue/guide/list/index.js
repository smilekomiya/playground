var vm1 = new Vue({
  el: '#app',
  data: {
    parentMessage: 'Parent',
    items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ]
  }
})

var vm2 = new Vue({
  el: '#v-for-object',
  data: {
    object: {
      title: 'How to do lists in Vue',
      author: 'Jane Doe',
      publishedAt: '2016-04-10'
    }
  }
})

var vm3 = new Vue({
  el: '#app2',
  data: {
    numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  methods: {
    even: function (numbers) {
      return numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  },
  computed: {
    evenNumbers: function () {
      return this.numbers.filter(function (number) {
        return number % 2 === 0
      })
    }
  }
})