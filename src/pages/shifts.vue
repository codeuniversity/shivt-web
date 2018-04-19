<template>
  <div>
    <div class="width-12">
      <div class="box">
        <div class="box-heading">
          <div class="text">
            <h2>Shifts</h2>
            <small>Manage your shifts.</small>
          </div>
        </div>
      </div>
    </div>
    <div class="width-12">
      <div class="box">
        <md-tabs>
          <md-tab id="tab-home" md-label="27.05.2018">
            <md-table class="nohover">
              <md-table-row>
                <md-table-head width="120px">Time</md-table-head>
                <md-table-head>Shifts</md-table-head>
              </md-table-row>
              <md-table-row>
                <md-table-cell>5.00 am</md-table-cell>
                <md-table-cell>
                  <md-list class="md-triple-line">
                    <md-list-item>
                      <div class="md-list-item-text">
                        <b>Shift-Name</b>
                        <span>Location X</span>
                        <p>I'll be in your neighborhood doing errands this week. Do you want to meet?</p>
                      </div>
                      <md-avatar>
                        <img src="https://placeimg.com/40/40/people/1" alt="People">
                      </md-avatar>
                      <md-avatar>
                        <img src="https://placeimg.com/40/40/people/2" alt="People">
                      </md-avatar>
                      <md-avatar>
                        <img src="https://placeimg.com/40/40/people/3" alt="People">
                      </md-avatar>
                      <md-avatar>
                        <img src="https://placeimg.com/40/40/people/4" alt="People">
                      </md-avatar>
                    </md-list-item>
                    <md-divider></md-divider>
                    <md-list-item>
                      <div class="md-list-item-text">
                        <b>Shift-Name</b>
                        <span>Location X</span>
                        <p>I'll be in your neighborhood doing errands this week. Do you want to meet?</p>
                      </div>
                      <md-avatar>
                        <img src="https://placeimg.com/40/40/people/9" alt="People">
                      </md-avatar>
                      <md-avatar>
                        <img src="https://placeimg.com/40/40/people/10" alt="People">
                      </md-avatar>
                    </md-list-item>
                    <md-divider></md-divider>
                    <md-list-item>
                      <div class="md-list-item-text">
                        <b>Shift-Name</b>
                        <span>Location X</span>
                        <p>I'll be in your neighborhood doing errands this week. Do you want to meet?</p>
                      </div>
                      <md-avatar>
                        <img src="https://placeimg.com/40/40/people/6" alt="People">
                      </md-avatar>
                      <md-avatar>
                        <img src="https://placeimg.com/40/40/people/7" alt="People">
                      </md-avatar>
                      <md-avatar>
                        <img src="https://placeimg.com/40/40/people/8" alt="People">
                      </md-avatar>
                    </md-list-item>
                    <md-divider></md-divider>
                    <div class="option">
                      <button @click="openPopup">Add Shift</button>
                    </div>
                  </md-list>
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>5.00 am</md-table-cell>
                <md-table-cell>
                  <div class="option">
                    <button @click="openPopup">Add Shift</button>
                  </div>
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>5.00 am</md-table-cell>
                <md-table-cell>
                  <div class="option">
                    <button @click="openPopup">Add Shift</button>
                  </div>
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>5.00 am</md-table-cell>
                <md-table-cell>
                  <div class="option">
                    <button @click="openPopup">Add Shift</button>
                  </div>
                </md-table-cell>
              </md-table-row>
              <md-table-row>
                <md-table-cell>5.00 am</md-table-cell>
                <md-table-cell>
                  <div class="option">
                    <button @click="openPopup">Add Shift</button>
                  </div>
                </md-table-cell>
              </md-table-row>
            </md-table>
          </md-tab>

          <md-tab id="tab-pages" md-label="28.05.2018">
            Pages tab
            <p>Unde provident nemo reiciendis officia, possimus repellendus. Facere dignissimos dicta quis rem. Aliquam aspernatur dolor atque nisi id deserunt laudantium quam repellat.</p>
          </md-tab>

          <md-tab id="tab-posts" md-label="29.05.2018">
            Posts tab
            <p>Qui, voluptas repellat impedit ducimus earum at ad architecto consectetur perferendis aspernatur iste amet ex tempora animi, illum tenetur quae assumenda iusto.</p>
          </md-tab>

          <md-tab id="tab-favorites" md-label="30.05.2018">
            Favorites tab
            <p>Maiores, dolorum. Beatae, optio tempore fuga odit aperiam velit, consequuntur magni inventore sapiente alias sequi odio qui harum dolorem sunt quasi corporis.</p>
          </md-tab>
        </md-tabs>
      </div>
    </div>
    <Popup v-model="popupActive" :active="popupActive"/>
  </div>
</template>

<script>
  import Popup from '@/components/shift/createshift'
  export default {
    name: 'Shifts',
    components: {
      Popup
    },
    data () {
      return {
        popupActive: false,
        showDate: new Date()
      }
    },
    methods: {
      openPopup(){
        this.popupActive = true
      },
      setShowDate(d) {
        this.showDate = d
      }
    }
  }
</script>

<style lang="less" scoped>

</style>
