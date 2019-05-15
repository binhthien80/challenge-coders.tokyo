<template>
  <v-app>
    <template>
      <div class="main">
         <transition
            name="custom-classes-transition"
            enter-active-class="animated bounceInLeft"
            leave-active-class="animated bounceOutRight"
            :duration="{ enter: 1000, leave: 1000 }"
          >
          <div class="challenge" v-if="!loading1">
            <BottomNav />
          </div>
          </transition>
          <transition
            name="custom-classes-transition"
            enter-active-class="animated bounceInLeft"
            leave-active-class="animated bounceOutRight"
            :duration="{ enter: 1000, leave: 1000 }"
          >
          <div class="login" v-if="loading2">
            <div class="circle"><span>{</span><span>}</span></div>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
          <Login class="login-account" v-if="!loading3" />
         </transition>
      </div>
    </template>
  </v-app>
</template>

<script>
/* eslint-disable */
import BottomNav from '@/components/BottomNav'
import Login from '@/components/Login'
import { mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    BottomNav,
    Login
  },
  watch: {
      'getIsLogin.login' : function (oldVal, newVal) {
          if(oldVal != newVal && oldVal) {
            setTimeout(() => {
              this.loading3 = true
            }, 300)
            setTimeout(() => {
              this.loading1 = false
            }, 300)
          }
      }
  },
  computed: {
    ...mapGetters(['getIsLogin'])
  },
  data () {
    return {
      loading1: true,
      loading2: true,
      loading3: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading2 = false
    }, 3000)
    setTimeout(() => {
      this.loading3 = false
    }, 3000)
  }
}
</script>
<style lang="scss">
  @import './style.scss';
  body {
    font-family: 'Roboto', sans-serif;
  }
</style>