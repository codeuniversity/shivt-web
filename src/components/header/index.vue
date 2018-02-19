<template>
  <div>
    <header>
      <div class="center">
        <div class="logo"></div>
        <div class="menu">
          <a class="link active">Dashboard</a>
          <a class="link">Event</a>
          <a class="link">Employees</a>
          <a class="link">Shifts</a>
          <a class="link">Settings</a>
          <a class="link" @click="logout">Logout</a>
        </div>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        section: 'Head'
      }
    },
    methods: {
      logout () {
        this.$store.commit('SET_TOKEN', null)
        if (window.localStorage) {
          window.localStorage.setItem('token', null)
        }
        this.$router.push('/login')
      }
    }
  }
</script>

<style lang="less" scoped>
header{
  height: 64px;
  width: 100%;
  background-color: #fff;
  float: left;
  position: fixed;
  top: 0px;
  left: 0px;
  box-shadow: 0 2px 5px 0 rgba(0,0,0,0.26);
  .center{
    width: 1200px;
    position: relative;
    left: 50%;
    margin-left: -600px;
    float: left;
    .logo{
      background-image: url(../../assets/logo.png);
      width: 200px;
      height: 58px;
      background-size: 100%;
      background-repeat: no-repeat;
      margin-top: 7px;
      float: left;
    }
    .menu{
      float: right;
      .link{
        color: #3e446f;
        font-size: 13px;
        text-transform: uppercase;
        font-weight: 700;
        padding: 23px 10px 0pc 12px;
        margin: 0 30px 0 0;
        position: relative;
        float: left;
        cursor: pointer;
        &:after{
          width: 0px;
          transition: width 0.15s linear 0s;
          content: " ";
          position: absolute;
          height: 3px;
          background-color: #00ffa8;
          left: 12px;
          bottom: -9px;
        }
        &:hover:after, &.active:after{
          width: 40px;
        }
      }
    }
  }
}
</style>
