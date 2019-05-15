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
          <v-btn color="success" @click="test()">Test</v-btn>
        </div>
      </div>
    </transition>
    <div class="congratulations" v-if="loading1">
      <p>{{ getVideoChallenge.message }}</p>
    </div>
  </div>
</template>
<script>
/* eslint-disable */

import { mapGetters, mapMutations } from "vuex";
export default {
  watch: {
    getCurrentChallenge: function(oldVal, newVal) {
      if (newVal === "done") {
        return this.$toasted.show(
          `Congratulations on completing the challenge`,
          { type: "success", position: "bottom-left", duration: 2000 }
        );
      }
      if (oldVal.id !== newVal.id) {
        this.aws = "";
        return this.$toasted.show(`Overcome question ${oldVal.id}`, {
          type: "success",
          position: "bottom-left",
          duration: 2000
        });
      }
    }
  },
  computed: {
    ...mapGetters(["getCurrentChallenge", "getChallenge", "getVideoChallenge"])
  },
  data() {
    return {
      aws: "",
      loading: false,
      loading1: false
    };
  },
  methods: {
    ...mapMutations(["checkAws"]),
    test() {
      if (this.aws === this.getVideoChallenge.answer) {
        setTimeout(() => (this.loading = true), 1000);
        setTimeout(() => (this.loading1 = true), 1500);
      }
    }
  }
};
</script>
<style lang="scss" scope>
.challenge-ct {
  max-height: 90vh;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
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
  max-height: 520px;
  box-shadow: 0px 0px 5px 0 rgba(0, 0, 0, 0.6);
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