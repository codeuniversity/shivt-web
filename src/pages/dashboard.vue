<template>
  <div>
    <div class="width-12">
      <div class="box">
        <div class="box-heading">
          <div class="text">
            <h2>Configuration</h2>
            <small>Configure your event.</small>
          </div>
        </div>
        <div class="box-body">
          <md-field>
            <label>Name</label>
            <md-input v-model="form.name">UNICON 2019</md-input>
          </md-field>
          <md-field>
            <label>Description</label>
            <md-textarea v-model="form.description"></md-textarea>
          </md-field>
          <md-datepicker v-model="form.startDate">
            <label>Start date</label>
          </md-datepicker>
          <md-datepicker v-model="form.endDate">
            <label>End date</label>
          </md-datepicker>
          <md-field>
            <label>Location</label>
            <md-input v-model="form.location"></md-input>
          </md-field>
          <div class="options right">
            <button>Save Configuration</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
  data () {
    return {
      form: {
        name: 'UNICON 2019',
        description: 'Connecting 99 students from top-tier universities and diverse backgrounds through tech.',
        location: 'CODE UNIVERSITY',
        startDate: new Date('2019/03/26'),
        endDate: new Date('2019/03/29'),
      }
    }
  },
  methods: {
    test() {
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

<style lang="less" scoped>
.right{
  float: right;
  margin-top: 15px;
  margin-bottom: 40px;
}
  i{
    display: none;
  }
</style>
