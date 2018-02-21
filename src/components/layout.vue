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
        float: left;
        width: calc(100% - 20px);
        margin-right: 10px;
        position: relative;
        margin-bottom: 24px;
        background-color: #fff;
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(.25, .8, .25, 1);
        .box-heading {
          position: relative;
          padding: 20px 24px;
          float: left;
          width: 100%;
          .text{
            float: left;
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
          .options{
            float: right;
          }
        }
        .box-body{
          padding: 20px 24px;
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
    .table{
      float: left;
      width: 100%;
      table{
        width: 100%;
        float: left;
        border-spacing: 0;
        border-collapse: collapse;
        td, th{
          text-align: left;
          padding: 13px;
          padding-left: 24px;
          padding-right: 24px;
          vertical-align: top;
          border-top: 0;
          transition: all 0.3s ease;
        }
        thead{
          width: 100%;
          tr{
            border-bottom: 1px solid #e6e6e6;
            th{
              font-weight: 400;
              color: #757575;
              font-size: 14px;
            }
          }
        }
        tbody{
          width: 100%;
          tr{
            border-bottom: 1px solid #e6e6e6;
            color: #000;
            transition: background-color 0.2s;
            &:hover {
              background-color: #eee;
            }
          }
        }
      }
    }
    button{
      border: none;
      color: #fff;
      font-size: 11px;
      text-transform: uppercase;
      border-radius: 4px;
      background-color: #6befaa;
      padding: 10px 20px 10px 20px;
      font-weight: bold;
      cursor: pointer;
      transition: background-color 0.2s;
      outline: none;
      &:hover{
        background-color: #67e0a1;
      }
    }
  }
</style>
