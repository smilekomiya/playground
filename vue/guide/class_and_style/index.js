var vm = new Vue({
    el: "#app",
    data: {
      isActive: false,
      hasError: false,
    },
    computed: {
      classObject: function () {
        return {
          active: this.isActive && !this.error,
          'text-danger': this.error && this.error.type === 'fatal'
        }
      }
    }
  })