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

<style scoped>

</style>
