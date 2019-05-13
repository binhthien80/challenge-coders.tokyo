<template>
  <div class="text-xs-center total">
    <div v-for="i in getChallenge" :key="i.id" >
        <v-btn outline fab :color="i.isComplete ? 'teal' : 'error'">
            {{i.id}}
        </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['getChallenge'])
    },
}
</script>
<style lang="scss">
    .total {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
        width: 90%;
        margin: auto;
        flex-wrap: wrap;
        
    }
</style>