<template>
  <div class="text-xs-center">
    <v-bottom-sheet v-model="sheet">
      <template v-slot:activator>
        <v-btn color="#FF8F00" dark>review the challenge</v-btn>
      </template>
      <v-list>
        <v-subheader class="title">Your challenge this time is:</v-subheader>
        <div class="sheets">
           <kbd class="subheading">{{ getVideoChallenge.auth }}: </kbd>
            <code>&lt; {{getVideoChallenge.challenge}} &gt;</code>
        </div>
      </v-list>
    </v-bottom-sheet>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
      ...mapGetters(["getVideoChallenge"])
  },
  data: () => ({
    sheet: false
  })
};
</script>
<style lang="scss">
    .sheets {
        padding: 10px 15px;
        code {
            margin: 15px 0 10px;
        }
    }
</style>