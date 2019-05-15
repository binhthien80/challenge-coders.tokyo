<template>
  <v-card height="100vh" flat>
    <div class="">
        <transition
        name="custom-classes-transition"
        enter-active-class="animated bounceInLeft"
        leave-active-class="animated bounceOutRight"
        :duration="{ enter: 1000, leave: 1000 }"
      >
          <Challenge v-if="bottomNav === 'Challenge'"/>
          <Total v-if="bottomNav === 'Total'"/>
          <DoneChallenge v-if="bottomNav === 'DoneChallenge'"/>
          <Help v-if="bottomNav === 'Help'" />
        </transition>
    </div>
    <v-bottom-nav :active.sync="bottomNav" :value="true" absolute color="transparent">
      <v-btn color="teal" flat value="Total">
        <span>Total</span>
        <v-icon>history</v-icon>
      </v-btn>

      <v-btn color="teal" flat value="Challenge">
        <span>Challenge</span>
        <v-icon>bar_chart</v-icon>
      </v-btn>
      <v-btn color="teal" :disabled="getVideoChallenge.id === '11' ? false : true" flat value="DoneChallenge">
        <span>Challenge table</span>
        <v-icon>done_all</v-icon>
      </v-btn>
      <v-btn color="teal" v-if="getVideoChallenge.id === '11'" flat value="Help">
        <span>Final</span>
        <v-icon>help_outline</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-card>
</template>
<script>
/* eslint-disable */
import Challenge from "@/components/Challenge";
import Total from "@/components/Total";
import DoneChallenge from "@/components/DoneChallenge";
import Help from "@/components/Help";

import { mapGetters } from 'vuex'
export default {
  components: {
    Challenge,
    Total,
    DoneChallenge,
    Help
  },
  computed: {
    ...mapGetters(['getVideoChallenge'])
  },
  data() {
    return {
      bottomNav: "Challenge"
    };
  }
};
</script>
<style lang="">
</style>