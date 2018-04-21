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
              <md-field>
                <label for="first-name">Name</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstname" />
                <span class="md-error">The first name is required</span>
                <span class="md-error">Invalid name</span>
              </md-field>
              <md-field :class="messageClass">
                <label>Description</label>
                <md-textarea v-model="textarea" required></md-textarea>
                <span class="md-error">There is an error</span>
              </md-field>
              <md-field>
                <label for="movie">Contact-Person</label>
                <md-select v-model="movie" name="movie" id="movie">
                  <md-option value="fight-club">Fight Club</md-option>
                  <md-option value="godfather">Godfather</md-option>
                  <md-option value="godfather-ii">Godfather II</md-option>
                  <md-option value="godfather-iii">Godfather III</md-option>
                  <md-option value="godfellas">Godfellas</md-option>
                  <md-option value="pulp-fiction">Pulp Fiction</md-option>
                  <md-option value="scarface">Scarface</md-option>
                </md-select>
              </md-field>
              <md-datepicker v-model="selectedDate">
                <label>Date</label>
              </md-datepicker>
              <md-field>
                <label for="first-name">Time</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstname" />
                <span class="md-helper">Format: 00:00</span>
                <span class="md-error">The first name is required</span>
                <span class="md-error">Invalid name</span>
              </md-field>
              <md-field>
                <label for="first-name">Location</label>
                <md-input name="first-name" id="first-name" autocomplete="given-name" v-model="form.firstname" />
                <span class="md-error">The first name is required</span>
                <span class="md-error">Invalid name</span>
              </md-field>
              <md-radio v-model="form.gender" value="0">Male</md-radio>
              <md-radio v-model="form.gender" value="1">Female</md-radio>
              <md-radio v-model="form.gender" value="2">Others</md-radio>
            </md-step>

            <md-step id="second" md-label="Skills" md-description="Optional">
              <md-checkbox v-model="array" value="1">Array</md-checkbox>
              <md-checkbox v-model="array" value="2">Array</md-checkbox>
              <md-checkbox v-model="boolean">Boolean</md-checkbox>
              <md-checkbox v-model="string" value="my-checkbox">String</md-checkbox>
              <md-checkbox v-model="novalue">No Value</md-checkbox>
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
          phone: null,
          contactList: [
            'Lukas Vollmer',
            'Lukas Vollmer',
            'Lukas Vollmer',
            'Lukas Vollmer',
            'Lukas Vollmer',
            'Lukas Vollmer',
            'Lukas Vollmer',
            'Lukas Vollmer',
            'Lukas Vollmer',
            'Lukas Vollmer',
            'Lukas Vollmer'
          ]
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
      z-index: 6;
    }
    .window {
      width: 1000px;
      position: fixed;
      z-index: 7;
      left: 50%;
      margin-left: -500px;
      .options{
        float: right;
        margin-bottom: 20px;
      }
      .md-checkbox {
        display: flex;
      }
    }
  }
</style>
