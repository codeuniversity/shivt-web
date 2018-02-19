<template>
  <div>
    <HeaderC/>
    <router-view/>
  </div>
</template>

<script>
  import HeaderC from '@/components/header/index'

  export default {
    name: 'Layout',
    components: {
      HeaderC
    }
  }
</script>

<style>
  body {
    padding-top: 100px;
  }
</style>
