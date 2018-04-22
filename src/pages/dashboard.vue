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
            <label>Initial Value</label>
            <md-input v-model="initial"></md-input>
          </md-field>

          <md-field>
            <label>Initial Value (Read Only)</label>
            <md-input v-model="initial" readonly></md-input>
          </md-field>

          <md-field>
            <label>Type here!</label>
            <md-input v-model="type"></md-input>
            <span class="md-helper-text">Helper text</span>
          </md-field>

          <md-field>
            <label>With label</label>
            <md-input v-model="withLabel" placeholder="A nice placeholder"></md-input>
          </md-field>

          <md-field md-inline>
            <label>Inline</label>
            <md-input v-model="inline"></md-input>
          </md-field>

          <md-field>
            <label>Number</label>
            <md-input v-model="number" type="number"></md-input>
          </md-field>

          <md-field>
            <label>Textarea</label>
            <md-textarea v-model="textarea"></md-textarea>
          </md-field>

          <md-field>
            <label>Textarea with Autogrow</label>
            <md-textarea v-model="autogrow" md-autogrow></md-textarea>
          </md-field>

          <md-field>
            <label>Disabled</label>
            <md-input v-model="disabled" disabled></md-input>
          </md-field>
          <md-datepicker v-model="selectedDate" />
          <md-checkbox v-model="array" value="1">Array</md-checkbox>
          <md-checkbox v-model="array" value="2">Array</md-checkbox>
          <md-checkbox v-model="boolean">Boolean</md-checkbox>
          <br/><br/>
          <md-radio v-model="radio" value="accent">Accent <small>(Default)</small></md-radio>
          <md-radio v-model="radio" value="Primary" class="md-primary">Primary</md-radio>
          <md-field>
            <label for="movie">Movie</label>
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
          <div class="options right">
            <button @click="openCreatePopup">Save Configuration</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
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
</style>
