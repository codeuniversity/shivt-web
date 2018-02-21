<template>
  <div>
    <HeaderC/>
    <div class="page">
      <router-view/>
    </div>
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

<style lang="less">
  body {
    padding-top: 100px;
    .page {
      position: relative;
      width: 1220px;
      left: 50%;
      margin-left: -610px;
      float: left;
      .box {
        min-height: 300px;
        margin-left: 10px;
        margin-right: 10px;
        position: relative;
        margin-bottom: 24px;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
        .box-heading {
          position: relative;
          padding: 20px 24px;
          h2{
            margin: 0;
            font-size: 18px;
          }
          small{
            display: block;
            margin-top: 8px;
            opacity: .5;
          }
        }
      }
    }
    .width-12 {
      width: 100%;
      float: left;
    }
    .width-6 {
      width: 50%;
      float: left;
    }
    .width-4 {
      width: 33.33%;
      float: left;
    }
  }
</style>
