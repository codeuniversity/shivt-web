<template>
  <div>
    <div class="width-12">
      <div class="box">
        <div class="box-heading">
          <div class="text">
            <h2>Skills</h2>
            <small>Manage the skills.</small>
          </div>
          <div class="options">
            <button @click="openCreatePopup">Add Skill</button>
          </div>
        </div>
        <div class="table">
          <table>
            <thead>
            <tr class="header">
              <th>
                <div class="name">Name</div>
              </th>
              <th>
                <div class="name"></div>
              </th>
            </tr>
            </thead>
            <tbody>
              <tr>
                <td>Skill 1</td>
                <td class="right">
                  <div class="option">
                    <mdi-delete-icon/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Skill 1</td>
                <td class="right">
                  <div class="option">
                    <mdi-delete-icon/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Skill 1</td>
                <td class="right">
                  <div class="option">
                    <mdi-delete-icon/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Skill 1</td>
                <td class="right">
                  <div class="option">
                    <mdi-delete-icon/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Skill 1</td>
                <td class="right">
                  <div class="option">
                    <mdi-delete-icon/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Skill 1</td>
                <td class="right">
                  <div class="option">
                    <mdi-delete-icon/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Skill 1</td>
                <td class="right">
                  <div class="option">
                    <mdi-delete-icon/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Skill 1</td>
                <td class="right">
                  <div class="option">
                    <mdi-delete-icon/>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Skill 1</td>
                <td class="right">
                  <div class="option">
                    <mdi-delete-icon/>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <CreatePopup v-model="popupCreateActive" :active="popupCreateActive"/>
  </div>
</template>

<script>
  import api from '../api'
  import CreatePopup from '@/components/skills/createskill'
  import 'mdi-vue/borderColorIcon'
  import 'mdi-vue/deleteIcon'
  import 'mdi-vue/viewModuleIcon'

  export default {
    name: 'Employees',
    components: {
      CreatePopup
    },
    data () {
      return {
        popupCreateActive: false,
        popupUpdateActive: false,
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
      openCreatePopup(){
        this.popupCreateActive = true
      },
      openUpdatePopup(){
        this.popupUpdateActive = true
      }
    }
  }
</script>

<style lang="less" scoped>
</style>
