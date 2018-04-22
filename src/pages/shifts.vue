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
                    </md-list-item>

                  </md-list>
                </md-table-cell>
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
                    </md-list-item>

                  </md-list>
                </md-table-cell>
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
                    </md-list-item>

                  </md-list>
                </md-table-cell>
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
                    </md-list-item>

                  </md-list>
                </md-table-cell>
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
                    </md-list-item>

                  </md-list>
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
        <div class="option createShift">
          <button @click="openCreatePopup">Add Shift</button>
        </div>
      </div>
    </div>
    <CreateShiftPopup v-model="popupCreateActive" :active="popupCreateActive"/>
    <UpdateShiftPopup v-model="popupUpdateActive" :active="popupUpdateActive"/>
  </div>
</template>

<script>
  import CreateShiftPopup from '@/components/shift/createshift'
  import UpdateShiftPopup from '@/components/shift/updateshift'
  export default {
    name: 'Shifts',
    components: {
      CreateShiftPopup,
      UpdateShiftPopup
    },
    data () {
      return {
        popupCreateActive: false,
        popupUpdateActive: false,
        showDate: new Date()
      }
    },
    methods: {
      openCreatePopup(){
        this.popupCreateActive = true
      },
      openUpdatePopup(){
        this.popupUpdateActive = true
      },
      setShowDate(d) {
        this.showDate = d
      }
    }
  }
</script>

<style lang="less" scoped>
.createShift{
  float: right;
  top: 16px;
  position: absolute;
  right: 27px;
}
</style>
