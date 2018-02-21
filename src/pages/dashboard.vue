<template>
  <div>
    <div class="width-12 noM">
      <div class="width-6">
        <div class="box" @click="test">
          <div class="box-heading">
            <h2>Dashboard</h2>
            <small>To basic to read.</small>
          </div>
        </div>
      </div>
      <div class="width-6">
        <div class="box">Test</div>
      </div>
    </div>
    <div class="width-12">
      <div class="width-4">
        <div class="box">Test</div>
      </div>
      <div class="width-4">
        <div class="box">Test</div>
      </div>
      <div class="width-4">
        <div class="box">Test</div>
      </div>
    </div>
    <div class="width-12">
      <div class="box">Test</div>
    </div>
    <div class="width-12">
      <div class="box">Test</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  methods: {
    test() {
      this.$notify({
        group: 'foo',
        type: 'success',
        title: 'Important message',
        text: 'Hello user! This is a notification!',
      })
    }
  }
}
</script>

<style scoped>

</style>
