var vm = new Vue({
  el: "#app",
  data: {
    message: "yes!",
    seen: true
  },
  methods: {
    toggleSeen: function() {
      this.seen = !this.seen
    }
  }
})