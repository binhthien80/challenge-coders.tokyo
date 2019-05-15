<template>
  <div class="help">
      <transition
        name="custom-classes-transition"
        enter-active-class="animated bounceInUp"
        leave-active-class="animated bounceOutUp"
        :duration="{ enter: 1000, leave: 1000 }"
        >
        <div id="flip-list-demo" class="demo" v-if="scCL">
        <transition-group name="flip-list">
            <p v-for="item in items" :style="{ opacity: item.st ? .3 : 1 }" v-bind:key="item.num">{{ item.num }}</p>
        </transition-group>
        </div>
      </transition>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInRight"
      leave-active-class="animated bounceOutRight"
      :duration="{ enter: 1000, leave: 1000 }"
    >
      <div class="result-challenge-11" v-if="ldRs">
        <p>
            <transition
            name="custom-classes-transition"
            enter-active-class="animated fadeIn"
            leave-active-class="animated fadeOut"
            :duration="{ enter: 1000, leave: 1000 }"
            >
                <span v-if="plus" class="plus">+</span>
            </transition>
             {{ resultCL }}</p>
      </div>
    </transition>
    <v-btn
      absolute
      dark
      fab
      bottom
      right
      color="teal"
      @click="handleChallenge11()"
      class="button-help"
    >
      <v-icon>vpn_key</v-icon>
    </v-btn>
  </div>
</template>
<script>
import _ from "lodash";
import { setTimeout } from 'timers';
export default {
  data() {
    return {
      interval: undefined,
      items: [
        {
          st: false,
          num: 28
        },
        {
          st: false,
          num: 17
        },
        {
          st: false,
          num: 954
        },
        {
          st: false,
          num: 626
        },
        {
          st: false,
          num: 24
        },
        {
          st: false,
          num: 14
        },
        {
          st: false,
          num: 20
        },
        {
          st: false,
          num: 22
        }
      ],
      ldRs: false,
      scCL: true,
      resultCL: 0,
      plus: false
    };
  },
  watch : {
    'resultCL': function (oldVal, newVal) {
        if(oldVal === 1705) {
            setTimeout(() => {
                this.scCL = false
            }, 1000)
        }
    }
  },
  methods: {
    handleChallenge11() {
      clearInterval(this.interval);
      this.scCL = true
      this.resultCL = 0
      this.plus = true
      this.items = _.map(this.items, o => o.st = true && o)

      this.items.forEach((i, index) => {
        setTimeout(() => {
            i.st = false
            for( let j = 0; j < i.num; j++ ) {
                setTimeout(() => this.resultCL += 1, 2000 / i.num * j)
            }
            if(index === 7) {
                setTimeout(() => this.plus = false, 1500)
            }
        }, 2500 * (index + 1))
      })
      this.ldRs = true;
    }
  },
  mounted() {
    this.interval = setInterval(
      () => (this.items = _.shuffle(this.items)),
      2000
    );
  }
};
</script>
<style lang="scss">
.help {
  width: 100%;
  height: 90vh;
  position: fixed;
  top: 0;
  left: 0;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;

  p {
    font-size: 22px;
    font-weight: 300;
    padding: 5px;
  }
}
.flip-list-move {
  transition: transform 1s;
}

.result-challenge-11 {
  padding-top: 10px;
  p {
    font-size: 32px;
    font-weight: bold;
  }
}

.button-help {
  transform: translateY(-50px) !important;
}

.opacity {
    opacity: .5;
}
.plus {
    position: absolute;
    margin-left: -30px;
}
</style>