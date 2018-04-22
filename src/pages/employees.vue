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
            <button @click="openCreatePopup">Add employee</button>
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
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Admin</td>
              <td>Sharonda</td>
              <td>Pietrzak</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Admin</td>
              <td>Iola</td>
              <td>Brow</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Teamlead</td>
              <td>Kyla</td>
              <td>Zona</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Teamlead</td>
              <td>Sylvia</td>
              <td>Brouse</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>Hoa</td>
              <td>Steinfeldt</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>Camilla</td>
              <td>Buskirk</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>Jamar</td>
              <td>Turco</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>Bennie</td>
              <td>Riser</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>Stevie</td>
              <td>Sanzone</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>Monty</td>
              <td>Fretwell</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>Lucius</td>
              <td>Colegrove</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>Santo</td>
              <td>Suarez</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>Andre</td>
              <td>Kühme</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>Lisa</td>
              <td>Komal</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>Marie</td>
              <td>Enskart</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>Luise</td>
              <td>Anukl</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>Felix</td>
              <td>Kleinstein</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>Paul</td>
              <td>Matter</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>Alex</td>
              <td>Müller</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>
            <tr>
              <td>Employee</td>
              <td>Samual</td>
              <td>Zwick</td>
              <td class="right">
                <div class="option">
                  <mdi-delete-icon/>
                </div>
                <div class="option" @click="openUpdatePopup">
                  <mdi-border-color-icon class="edit"/>
                </div>
              </td>
            </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
    <CreatePopup v-model="popupCreateActive" :active="popupCreateActive"/>
    <UpdatePopup v-model="popupUpdateActive" :active="popupUpdateActive"/>
  </div>
</template>

<script>
  import api from '../api'
  import CreatePopup from '@/components/employee/createPopup'
  import UpdatePopup from '@/components/employee/updatePopup'
  import 'mdi-vue/borderColorIcon'
  import 'mdi-vue/deleteIcon'
  import 'mdi-vue/viewModuleIcon'

  export default {
    name: 'Employees',
    components: {
      CreatePopup,
      UpdatePopup
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
