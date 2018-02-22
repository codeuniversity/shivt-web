<template>
  <div class="popup" :class="{active:active}">
    <div class="overlay" @click="closePopup"></div>
    <div class="window">
      <div class="box">
        <div class="box-heading">
          <div class="text">
            <h2>Create employee</h2>
            <small>Manage your staff.</small>
          </div>
          <div class="options" @click="closePopup">
            <mdi-close-icon/>
          </div>
        </div>
        <div class="box-body">
          <md-field>
            <label for="first-name">First Name</label>
            <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstName" />
            <span class="md-error">The first name is required</span>
            <span class="md-error">Invalid first name</span>
          </md-field>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import 'mdi-vue/closeIcon'
  export default {
    name: 'EmployeeCreatePopup',
    props: {
      active: {
        type: Boolean,
        required: true
      }
    },
    data(){
      return {
        form: {
          firstName: null
        }
      }
    },
    methods: {
      closePopup () {
        this.$emit('input', false)
      }
    }
  }
</script>
<style lang="less" scoped>
  .popup {
    display: none;
    &.active{
      display: block;
    }
    .overlay {
      position: fixed;
      top: 0px;
      left: 0px;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.42);
      z-index: 2;
    }
    .window {
      width: 450px;
      position: fixed;
      z-index: 3;
      left: 50%;
      margin-left: -225px;
    }
  }
</style>
