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
            <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstname" />
            <span class="md-error">The first name is required</span>
            <span class="md-error">Invalid first name</span>
          </md-field>
          <md-field>
            <label for="last-name">Last Name</label>
            <md-input name="first-name" id="last-name" autocomplete="given-name" v-model="form.lastname" />
            <span class="md-error">The first name is required</span>
            <span class="md-error">Invalid first name</span>
          </md-field>
          <md-radio v-model="form.gender" value="0">Male</md-radio>
          <md-radio v-model="form.gender" value="1">Female</md-radio>
          <md-radio v-model="form.gender" value="2">Others</md-radio>
          <md-field>
            <label for="email">Email</label>
            <md-input name="email" id="emial" autocomplete="given-name" type="mail" v-model="form.mail" />
            <span class="md-error">The first name is required</span>
            <span class="md-error">Invalid first name</span>
          </md-field>
          <md-field>
            <label for="email">Phone</label>
            <md-input name="phone" id="phone" autocomplete="given-name" v-model="form.phone" />
            <span class="md-error">The first name is required</span>
            <span class="md-error">Invalid first name</span>
          </md-field>
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
      width: 450px;
      position: fixed;
      z-index: 23;
      left: 50%;
      margin-left: -225px;
      .options{
        float: right;
        margin-bottom: 20px;
      }
    }
  }
</style>
