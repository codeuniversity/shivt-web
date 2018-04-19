<template>
  <div class="popup" :class="{active:active}">
    <div class="overlay" @click="closePopup"></div>
    <div class="window">
      <div class="box">
        <div class="box-heading">
          <div class="text">
            <h2>Create shivt</h2>
            <small>Manage your shifts.</small>
          </div>
          <div class="options" @click="closePopup">
            <mdi-close-icon/>
          </div>
        </div>
        <div>
          <md-steppers md-vertical>
            <md-step id="first" md-label="Generel">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
            </md-step>

            <md-step id="second" md-label="Skills" md-description="Optional">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
            </md-step>

            <md-step id="third" md-label="Employee" md-description="Optional">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias doloribus eveniet quaerat modi cumque quos sed, temporibus nemo eius amet aliquid, illo minus blanditiis tempore, dolores voluptas dolore placeat nulla.</p>
            </md-step>
          </md-steppers>
        </div>
        <div class="box-body">
          <div class="options">
            <button @click="submit">Create Employee</button>
          </div>
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
          firstName: null,
          lastname: null,
          gender:  null,
          mail: null,
          phone: null
        }
      }
    },
    methods: {
      closePopup () {
        this.$emit('input', false)
      },
      submit(){
        console.log('send')
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
      z-index: 20;
    }
    .window {
      width: 1000px;
      position: fixed;
      z-index: 23;
      left: 50%;
      margin-left: -500px;
      .options{
        float: right;
        margin-bottom: 20px;
      }
    }
  }
</style>
