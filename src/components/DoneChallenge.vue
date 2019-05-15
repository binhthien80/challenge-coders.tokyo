<template>
  <v-layout row>
    <v-flex xs12 class="done-challenge">
      <v-card>
        <v-toolbar color="indigo" dark>
          <v-toolbar-side-icon></v-toolbar-side-icon>

          <v-toolbar-title>Inbox</v-toolbar-title>

          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>search</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>more_vert</v-icon>
          </v-btn>
        </v-toolbar>
        <v-list>
          <v-list-tile
            v-for="item in getChallenge"
            :key="item.id"
          >
            <v-list-tile-action>
              <v-icon v-if="true" color="#ff3300">star</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-text="'Question ' + item.id + ': '"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-content>
              <v-list-tile-title v-text="item.answer"></v-list-tile-title>
            </v-list-tile-content>
            <v-list-tile-avatar style="color: #009688">
               <v-icon v-if="true" color="#009688">check_circle</v-icon>
            </v-list-tile-avatar>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['getChallenge'])
    }
}
</script>
<style lang="scss">
    .done-challenge {
        max-height: 90vh;
        overflow: auto;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }
</style>