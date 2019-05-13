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
            enter-active-class="animated tada"
            leave-active-class="animated bounceOutRight"
            :duration="{ enter: 1000, leave: 1000 }"
          >
          <div class="login" v-if="loading2">
            <div class="circle"><span>{</span><span>.</span><span>.</span><span>.</span><span>}</span></div>
            <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
          </div>
         </transition>
      </div>
    </template>
  </v-app>
</template>

<script>
/* eslint-disable */
import BottomNav from '@/components/BottomNav'
export default {
  name: 'App',
  components: {
    BottomNav
  },
  data () {
    return {
      loading1: true,
      loading2: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.loading2 = false
    }, 3000)
    setTimeout(() => {
      this.loading1 = false
    }, 3500)
  }
}
</script>
<style lang="scss">
  @import './style.scss';
  body {
    font-family: 'Roboto', sans-serif;
  }
</style>