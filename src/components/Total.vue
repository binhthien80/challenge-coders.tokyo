<template>
  <div class="text-xs-center total">
    <div v-for="i in getChallenge" :key="i.id" >
        <v-btn outline fab :color="renderColor(i.id)"> 
            {{i.id}}
        </v-btn>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters(['getChallenge', 'getIsLogin']),
        renderColor: function () {
            return i => {
                if ( i < this.getIsLogin.login.data.currentChallenge - 0 ) {
                    return 'teal'
                } else if ( i == this.getIsLogin.login.data.currentChallenge - 0 ) {
                    return '#68228B'
                } else {
                    return 'error'
                }
            }
        }
    },
}
</script>
<style lang="scss">
    .total {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
        width: 100%;
        margin: auto;
        flex-wrap: wrap; 
        position: fixed;
        top: 0;
        left: 0;
    }
</style>