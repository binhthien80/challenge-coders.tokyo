<!-- eslint-disable -->
<template>
  <div class="challenge-ct">
    <transition
      name="custom-classes-transition"
      enter-active-class="animated bounceInLeft"
      leave-active-class="animated bounceOutRight"
      :duration="{ enter: 1000, leave: 1000 }"
    >
      <div v-if="!loading">
        <video width="100%" controls :src="getVideoChallenge.url"></video>
        <div class="answer">
          <v-text-field
            label="Your answer is..."
            v-model="aws"
            required
            v-if="getVideoChallenge.id > 2"
          ></v-text-field>
          <div class="text-xs-center" @click="test()">
            <v-btn
              :disabled="dialog"
              :loading="dialog"
              class="white--text"
              color="success darken-2"
              @click="dialog = true"
            >{{ getVideoChallenge.id < 3 ? 'Next challenge' : 'test' }}</v-btn>
            <v-dialog v-model="dialog" hide-overlay persistent width="300">
              <v-card color="success" dark>
                <v-card-text>
                  {{ getVideoChallenge.id < 3 ? 'Loading the next account' : 'Checking the results' }}
                  <v-progress-linear indeterminate color="white" class="mb-0"></v-progress-linear>
                </v-card-text>
              </v-card>
            </v-dialog>
          </div>
        </div>
        <BottomSheets />
      </div>
    </transition>
    <div class="congratulations" v-if="loading1">
      <p>{{ getVideoChallenge.message }}</p>
    </div>
  </div>
</template>
<script>
/* eslint-disable */
import BottomSheets from '@/components/BottomSheets'
import { mapGetters, mapMutations } from "vuex";
export default {
  watch: {
    loader() {
      const l = this.loader;
      this[l] = !this[l];

      setTimeout(() => (this[l] = false), 1500);

      this.loader = null;
    },
    dialog (val) {
      if (!val) return
      setTimeout(() => (this.dialog = false), 3000)
    }
  },
  components: {
    BottomSheets
  },
  computed: {
    ...mapGetters(["getChallenge", "getVideoChallenge"])
  },
  data() {
    return {
      aws: "",
      loading: false,
      loading1: false,
      dialog: false
    };
  },
  methods: {
    ...mapMutations(["checkAws"]),
    test() {
      setTimeout(() => {
        if (this.aws === this.getVideoChallenge.answer) {
          this.$toasted.show(`Correct anwser`, {
            type: "success",
            position: "bottom-left",
            duration: 2000
          });
          setTimeout(() => (this.loading = true), 300);
          setTimeout(() => (this.loading1 = true), 800);
        } else {
          return this.$toasted.show(`Wrong anwser`, {
            type: "error",
            position: "bottom-left",
            duration: 2000
          });
        }
      }, 3200);
    }
  }
};
</script>
<style lang="scss" scope>
.challenge-ct {
  height: 90vh;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.answer,
.congratulations {
  width: 90%;
  display: flex;
  justify-items: center;
  align-items: center;
  margin: auto;
  margin-top: 20px;
}

.congratulations {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-items: center;
  align-items: center;
  text-align: center;
  font-size: 18px;
  color: #009688;
  p {
    text-align: center;
    width: 100%;
  }
}
video {
  height: 450px;
  box-shadow: 0px 0px 5px 0 rgba(0, 0, 0, 0.6);
}
.custom-loader {
  animation: loader 1s infinite;
  display: flex;
}
@-moz-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-webkit-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@-o-keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes loader {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
@media only screen and (min-width: 768px) {
  video {
    width: 100%;
    max-height: 800px;
  }
}
@media only screen and (min-width: 1024px) {
  video {
    width: 100%;
    height: 1100px;
  }
}
@media only screen and (min-width: 1300px) {
  video {
    width: 100%;
    height: 520px;
  }
}
@media only screen and (min-width: 1900px) {
  video {
    width: 100%;
    height: 820px;
  }
}
</style>