<template>
  <div id="app">
    <vue-progress-bar></vue-progress-bar>
    <router-view></router-view>
    <notifications class="notify" group="foo" position="bottom right"/>
  </div>
</template>

<script>
  export default {
    name: 'App',
    mounted () {
      this.$Progress.finish()
    },
    created () {
      this.$Progress.start()
      this.$router.beforeEach((to, from, next) => {
        this.$Progress.start()
        next()
      })
      this.$router.afterEach((to, from) => {
        this.$Progress.finish()
      })
    }
  }
</script>
<style lang="less">
  * {
    box-sizing: border-box;
    font-family: 'Raleway', sans-serif;
  }

  .notify {
    right: 10px !important;
    bottom: 10px !important;
    .vue-notification {
      border-radius: 2px;
      padding: 15px;
      &.success {
        border: none;
        background-color: #6befaa;
      }
    }
  }
</style>
