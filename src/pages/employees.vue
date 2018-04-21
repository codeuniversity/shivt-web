<template>
  <div>
    <div class="width-12">
      <div class="box">
        <div class="box-heading">
          <div class="text">
            <h2>Employees</h2>
            <small>Manage your staff.</small>
          </div>
          <div class="options">
            <button @click="openPopup">Add employee</button>
          </div>
        </div>
        <div class="table">
          <table>
            <thead>
            <tr class="header">
              <th>
                <div class="name">Benutzertyp</div>
              </th>
              <th>
                <div class="name">Vorname</div>
              </th>
              <th>
                <div class="name">Nachname</div>
              </th>
              <th>Option</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Admin</td>
              <td>Lukas</td>
              <td>Vollmer</td>
              <td>
                <md-button class="md-icon-button md-list-action">
                  <mdi-border-color-icon/>
                </md-button>
                <md-button class="md-icon-button md-list-action">
                  <md-icon>sms</md-icon>
                </md-button>

              </td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>Lukas</td>
              <td>Vollmer</td>
              <td></td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>Lukas</td>
              <td>Vollmer</td>
              <td></td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>Lukas</td>
              <td>Vollmer</td>
              <td></td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>Lukas</td>
              <td>Vollmer</td>
              <td></td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>Lukas</td>
              <td>Vollmer</td>
              <td></td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>Lukas</td>
              <td>Vollmer</td>
              <td></td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>Lukas</td>
              <td>Vollmer</td>
              <td></td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>Lukas</td>
              <td>Vollmer</td>
              <td></td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>Lukas</td>
              <td>Vollmer</td>
              <td></td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>Lukas</td>
              <td>Vollmer</td>
              <td></td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>Lukas</td>
              <td>Vollmer</td>
              <td></td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <Popup v-model="popupActive" :active="popupActive"/>
  </div>
</template>

<script>
  import api from '../api'
  import Popup from '@/components/employee/createPopup'
  import 'mdi-vue/borderColorIcon'

  export default {
    name: 'Employees',
    components: {
      Popup
    },
    data () {
      return {
        popupActive: false,
        employees: null
      }
    },
    beforeMount(){
      api
        .request('get', '/events/'+this.$store.state.projectid+'/employees', {}, {'x-access-token': this.$store.state.token, 'Content-Type': 'application/x-www-form-urlencoded'})
        .then(response => {
          // this.toggleLoading()
          var data = response.data
          if (data.error) {
            var errorName = data.error.name
            if (errorName) {
              this.response =
                errorName === 'InvalidCredentialsError'
                  ? 'Username/Password incorrect. Please try again.'
                  : errorName
            } else {
              this.response = data.error
            }
            return
          }
          this.$Progress.finish()
        })
        .catch(error => {
          this.$Progress.finish()
          this.response = 'Server appears to be offline'
          //  this.toggleLoading()
        })
      console.log('test', this.$store.state.projectid)
    },
    methods: {
      openPopup(){
        this.popupActive = true
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
