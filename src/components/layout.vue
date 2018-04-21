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
            .mdi-icon{
              cursor: pointer;
              &:hover{
                fill: #484848;
              }
            }
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
            td{
              .option{
                float: right;
                padding: 5px 5px 0px 5px;
                border-radius: 3px;
                margin-top: -6px;
                margin-bottom: -10px;
                margin-left: 10px;
                cursor: pointer;
                &:hover {
                  background-color: #eee;
                }
                svg{
                  fill: rgba(0,0,0,.54);
                  &.edit{
                    margin-top: 4px;
                    margin-bottom: -4px;
                  }
                }
              }
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
    .md-field.md-has-textarea{
      border-color: #6befaa !important;
    }
    .md-field.md-theme-default:before{
      background-color: #6befaa !important;
      border-color: #6befaa !important;
    }
    .md-field.md-theme-default.md-focused label{
      color: #6befaa !important;
    }
    .md-field.md-theme-default:after {
      background-color: rgba(0, 0, 0, 0.18);
    }
    .md-radio.md-theme-default.md-checked .md-radio-container {
      border-color: #6befaa !important;
    }
    .md-radio.md-theme-default.md-checked .md-radio-container:after {
      background-color: #6befaa !important;
    }
    .md-radio.md-theme-default .md-radio-container {
      border-color: rgba(0,0,0,0.18) !important;
    }
    .md-button:hover{
      background-color: #ffffff;
    }
    .md-tabs.md-theme-default .md-tabs-navigation .md-button.md-active{
      color: #6befaa !important;
    }
    .md-tabs.md-theme-default .md-tabs-indicator{
      background-color: #6befaa !important;
    }
    .md-steppers.md-theme-default .md-stepper-header.md-active .md-stepper-number, .md-steppers.md-theme-default .md-stepper-header.md-done .md-stepper-number{
      background-color: #6befaa !important;
    }
    .md-checkbox.md-theme-default.md-checked.md-primary .md-checkbox-container {
      background-color: #6befaa !important;
      border-color: #6befaa !important;
    }
    .md-ripple-wave {
      background-color: #6befaa !important;
    }
    .md-list.md-theme-default .md-selected .md-list-item-content, .md-list.md-theme-default .router-link-exact-active .md-list-item-content{
      color: #6befaa !important;
    }
    .nohover{
      .md-table-row:hover:not(.md-header-row) .md-table-cell{
        background-color: transparent !important;
      }
      .md-list-item:hover{
        background-color: rgba(0,0,0,0.08);
        cursor: pointer;
      }
      .option{
        float: right;
        margin-top: 15px;
        margin-bottom: 15px;
        width: 100%;
        button{
          float: right;
          padding-left: 30px;
          padding-right: 30px;
        }
      }
    }
    .md-steppers-wrapper{
      float: left;
    }
    .md-steppers-wrapper{
      max-height: 623px;
      overflow: auto;
    }
  }
</style>
