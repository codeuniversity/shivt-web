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
  import Popup from '@/components/employee/createPopup'

  export default {
    name: 'Employees',
    components: {
      Popup
    },
    data () {
      return {
        popupActive: false
      }
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
