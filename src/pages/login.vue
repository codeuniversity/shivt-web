<template>
  <div class="loginPage">
    <div class="window">
      <div class="logo"></div>
      <div class="intro">Welcome back!</div>
      <div class="introSub">Please login to your account.</div>
      <div class="inputs">
        <div class="input" :class="{active: active}" @click="setFocus('mail')">
          <div class="text">Email Address</div>
          <input type="email" ref="email" placeholder="demo@shivt.io" autofocus/>
        </div>
        <div class="input" :class="{active: !active}" @click="setFocus">
          <div class="text">Password</div>
          <input ref="password" type="password" placeholder="***********"/>
        </div>
      </div>
      <div class="buttons">
        <div class="button login">Login</div>
        <div class="button">Sign up</div>
      </div>
      <div class="privacy">
        By signing up, you agree to Shivt's<br/>
        <span>Terms and Conditions</span> & <span>Privacy Policy</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      active: true
    }
  },
  methods: {
    setFocus (type) {
      if (type === 'mail') {
        this.active = true
        this.$refs.email.focus()
      } else {
        this.active = false
        this.$refs.password.focus()
      }
    }
  }
}
</script>

<style lang="less">
  body {
    background-color: #f7f7f7;
    margin: 0px;
    .loginPage {
      float: left;
      width: 100%;
      height: 100%;
      .window {
        width: 400px;
        height: 500px;
        background-color: #fff;
        box-shadow: 0px 0px 65px #f5f5f5;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-left: -200px;
        margin-top: -250px;
        padding: 20px;
        .logo {
          background-image: url(../assets/logo.png);
          width: 200px;
          height: 63px;
          background-size: 100%;
          background-repeat: no-repeat;
          margin-top: 20px;
        }
        .intro {
          margin-top: 30px;
          font-size: 30px;
          color: #333b47;
        }
        .introSub {
          margin-top: 5px;
          font-size: 18px;
          font-weight: 200;
          color: #a5a5a5;
        }
        .inputs {
          margin-top: 30px;
          float: left;
          width: 100%;
          box-shadow: 0px 0px 65px #f5f5f5;
          border: 1px solid #e9e9e9;
          .input {
            float: left;
            width: 100%;
            border-left: 2px solid transparent;
            &.active {
              border-left: 2px solid #00ffa8;
            }
            &:first-child {
              border-bottom: 1px solid #e9e9e9;
            }
            .text {
              margin-top: 8px;
              margin-left: 20px;
              font-size: 14px;
              color: #bcbcbc;
              font-weight: 200;
            }
            input {
              padding-top: 10px;
              padding-bottom: 10px;
              font-size: 14px;
              margin-left: 20px;
              border: 0px;
              font-weight: bold;
              outline: none;
            }
          }
        }
        .buttons {
          margin-top: 20px;
          float: left;
          width: 100%;
          .button {
            float: left;
            border-radius: 4px;
            padding: 10px 40px 10px 40px;
            border: 1px solid #b4b4b4;
            cursor: pointer;
            color: #747474;
            cursor: pointer;
            &.login {
              margin-right: 20px;
              background-color: #00ffa8;
              border-color: #00ffa8;
              color: #fff;
            }
          }
        }
        .privacy {
          font-size: 14px;
          float: left;
          width: 100%;
          margin-top: 20px;
          color: #747474;
          font-height: 1.2;
          span {
            color: #000;
            font-weight: bold;
          }
        }
      }
    }
  }
</style>
