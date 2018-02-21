<template>
  <div>
    <div class="width-12">
      <div class="box" @click="test">
        <div class="box-heading">
          <div class="text">
            <h2>Employees</h2>
            <small>Manage your staff.</small>
          </div>
          <div class="options">
            <button>Add employee</button>
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
              <tr><td>Admin</td><td>Lukas</td><td>Vollmer</td><td></td></tr>
              <tr><td>Admin</td><td>Lukas</td><td>Vollmer</td><td></td></tr>
              <tr><td>Admin</td><td>Lukas</td><td>Vollmer</td><td></td></tr>
              <tr><td>Admin</td><td>Lukas</td><td>Vollmer</td><td></td></tr>
              <tr><td>Admin</td><td>Lukas</td><td>Vollmer</td><td></td></tr>
              <tr><td>Admin</td><td>Lukas</td><td>Vollmer</td><td></td></tr>
              <tr><td>Admin</td><td>Lukas</td><td>Vollmer</td><td></td></tr>
              <tr><td>Admin</td><td>Lukas</td><td>Vollmer</td><td></td></tr>
              <tr><td>Admin</td><td>Lukas</td><td>Vollmer</td><td></td></tr>
              <tr><td>Admin</td><td>Lukas</td><td>Vollmer</td><td></td></tr>
              <tr><td>Admin</td><td>Lukas</td><td>Vollmer</td><td></td></tr>
              <tr><td>Admin</td><td>Lukas</td><td>Vollmer</td><td></td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Employees',
    methods: {
      test () {
        this.$notify({
          group: 'foo',
          type: 'success',
          title: 'Important message',
          text: 'Hello user! This is a notification!',
        })
      }
    }
  }
</script>

<style scoped>

</style>
