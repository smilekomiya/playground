Vue.component('button-counter', {
  data: function () {
    return {
      count: 0
    }
  },
  template: '<button @click="count++">You clicked me {{ count }} times.</button>'
})

Vue.component('blog-post', {
  props: ['post'],
  template: `
    <div class="blog-post">
      <h3>{{ post.title }}</h3>
      <button @click="$emit('enlarge-text')">
        Enlarge text
      </button>
      <div v-html="post.content"></div>
    </div>
  `
})

var vm1 = new Vue({
  el: '#components-demo'
})

new Vue({
  el: '#blog-posts-events-demo',
  data: {
    posts: [
      { id: 1, title: 'My journey with Vue' },
      { id: 2, title: 'Blogging with Vue' },
      { id: 3, title: 'Why Vue is so fun' }
    ],
    postFontSize: 1
  },
  methods: {
    onEnlargeText: function (enlargeAmount) {
      this.postFontSize += enlargeAmount
    }
  }
})

Vue.component('custom-input', {
  props: ['searchText'],
  template: `<input
    v-bind:value="searchText"
    v-on:input="$emit('input', $event.target.value)"
  >`
})

var vm2 = new Vue({
  el: '#custom-input'
})

Vue.component('tab-home', {
  template: '<div>Home component</div>'
})
Vue.component('tab-posts', {
  template: '<div>Posts component</div>'
})
Vue.component('tab-archive', {
  template: '<div>Archive component</div>'
})

new Vue({
  el: '#dynamic-component-demo',
  data: {
    currentTab: 'Home',
    tabs: ['Home', 'Posts', 'Archive']
  },
  computed: {
    currentTabComponent: function () {
      return 'tab-' + this.currentTab.toLowerCase()
    }
  }
})