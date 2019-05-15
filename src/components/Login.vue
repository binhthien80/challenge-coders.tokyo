<template>
  <div class="sign-up">
    <h1 class="sign-up-title">Login Challenge</h1>
    <img src="https://scontent.fsgn8-1.fna.fbcdn.net/v/t1.0-9/47685823_2021520221276597_356887142070222848_n.png?_nc_cat=108&_nc_eui2=AeGvSGoeLOmBWvH7jxwxAxReFcfnp1bIylm4cZUT0fEveZ98RhKmRCs9B65tCwDwqkWBTA7sbKyQj49YTxq90XGlky7zdvCjqAZ7PshnUt_slA&_nc_oc=AQmWSVbL_GqqEAE2M9nmGYYnzmszpxYj2Z-a9zUWVKAO_4k0qOxD0ZnA2lU7l9gIggQ&_nc_ht=scontent.fsgn8-1.fna&oh=c8d7f9442d9b5a1bfc506442255e58db&oe=5D5D5BBA" alt="">
    <h2>Coders.Tokyo</h2>
    <input type="text" v-model="username" class="sign-up-input" placeholder="What's your username?" autofocus>
    <input type="password" v-model="password" class="sign-up-input" placeholder="Choose a password">
    <input type="submit" value="Login!" :disabled="getIsLogin.wait" :style="{display: getIsLogin.wait ? 'none' : 'block'}" @click="$store.dispatch('login', { username, password })" class="sign-up-button">
    <div class="progress">
    <v-progress-circular
      :size="70"
      :width="7"
      color="red"
      indeterminate
      v-if="getIsLogin.wait"
    ></v-progress-circular>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import { mapActions, mapGetters } from 'vuex'
export default {
    watch: {
        'getIsLogin.login' : function (oldVal, newVal) {
            if(oldVal != newVal && oldVal) {
                return this.$toasted.show(`Login success...!`, { type: 'success', position: 'bottom-left', duration: 2000 })
            } else {
                return this.$toasted.show(`Login fail...!`, { type: 'error', position: 'bottom-left', duration: 2000 })
            }
        }
    },
    data () {
        return {
            username: undefined,
            password: undefined
        }
    },
    computed: {
        ...mapGetters(['getIsLogin'])
    },
    methods: {
        ...mapActions(['login'])
    }
}
</script>
<style lang="scss" scope>
.progress {
    display: flex;
    justify-content: center;
}
.sign-up {
  position: relative;
  margin: 50px auto;
  width: 280px;
  padding: 33px 25px 29px;
  background: white;
  border-bottom: 1px solid #c4c4c4;
  border-radius: 5px;
  -webkit-box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.25);
}
.sign-up:before, .sign-up:after {
  content: '';
  position: absolute;
  bottom: 1px;
  left: 0;
  right: 0;
  height: 10px;
  background: inherit;
  border-bottom: 1px solid #d2d2d2;
  border-radius: 4px;
}
.sign-up:after {
  bottom: 3px;
  border-color: #dcdcdc;
}

img, h2 {
    display: none;
}

.sign-up-title {
  margin: -25px -25px 25px;
  padding: 6px 25px;
  line-height: 35px;
  font-size: 20px;
  font-weight: 300;
  color: #aaa;
  text-align: center;
  text-shadow: 0 1px rgba(255, 255, 255, 0.75);
  background: #f7f7f7;
}
.sign-up-title:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  background: #c4e17f;
  border-radius: 5px 5px 0 0;
  background-image: -webkit-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
  background-image: -moz-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
  background-image: -o-linear-gradient(left, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
  background-image: linear-gradient(to right, #c4e17f, #c4e17f 12.5%, #f7fdca 12.5%, #f7fdca 25%, #fecf71 25%, #fecf71 37.5%, #f0776c 37.5%, #f0776c 50%, #db9dbe 50%, #db9dbe 62.5%, #c49cde 62.5%, #c49cde 75%, #669ae1 75%, #669ae1 87.5%, #62c2e4 87.5%, #62c2e4);
}

input {
  font-family: inherit;
  color: inherit;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.sign-up-input {
  width: 100%;
  height: 50px;
  margin-bottom: 25px;
  padding: 0 15px 2px;
  font-size: 17px;
  background: white;
  border: 2px solid #ebebeb;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 -2px #ebebeb;
  box-shadow: inset 0 -2px #ebebeb;
}
.sign-up-input:focus {
  border-color: #62c2e4;
  outline: none;
  -webkit-box-shadow: inset 0 -2px #62c2e4;
  box-shadow: inset 0 -2px #62c2e4;
}
.lt-ie9 .sign-up-input {
  line-height: 48px;
}

.sign-up-button {
  position: relative;
  vertical-align: top;
  width: 100%;
  height: 54px;
  padding: 0;
  font-size: 22px;
  color: white;
  text-align: center;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.25);
  background: #f0776c;
  border: 0;
  border-bottom: 2px solid #d76b60;
  border-radius: 5px;
  cursor: pointer;
  -webkit-box-shadow: inset 0 -2px #d76b60;
  box-shadow: inset 0 -2px #d76b60;
}
.sign-up-button:active {
  top: 1px;
  outline: none;
  -webkit-box-shadow: none;
  box-shadow: none;
}

:-moz-placeholder {
  color: #ccc;
  font-weight: 300;
}

::-moz-placeholder {
  color: #ccc;
  opacity: 1;
  font-weight: 300;
}

::-webkit-input-placeholder {
  color: #ccc;
  font-weight: 300;
}

:-ms-input-placeholder {
  color: #ccc;
  font-weight: 300;
}

::-moz-focus-inner {
  border: 0;
  padding: 0;
}

@media only screen and (max-width: 768px) {
    .sign-up {
        width: 100%;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        margin: 0;
    }
    img {
        display: block;
        width: 120px;
        border-radius: 50%;
        margin: 20px auto 20px;
        border: 10px solid #FF0033;
    } 
    h2 {
        text-align: center;
        display: block;
        font-size: 40px;
        color: rgba($color: #000000, $alpha: .5);
        margin-bottom: 20px;
    }
}
</style>
