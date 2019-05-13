<template>
    <div class="challenge-ct" v-if="getCurrentChallenge.url">
        <transition
            name="custom-classes-transition"
            enter-active-class="animated bounceInLeft"
            leave-active-class="animated bounceOutRight"
            :duration="{ enter: 1000, leave: 1000 }"
          >
        <div v-if="!loading">
            <video width="100%" controls :src="getCurrentChallenge.url"></video>
            <div class="answer">
                <v-text-field
                label="Your answer is..."
                v-model="aws"
                required
                ></v-text-field>
                <v-btn color="success" @click="test()">Success</v-btn>
            </div>
        </div>
        </transition>
    </div>
    <div class="congratulations" v-else>
        Congratulations on completing the challenge
    </div>
</template>
<script>
/* eslint-disable */ 
import { mapGetters, mapMutations } from 'vuex'
export default {
    watch: {
        'getCurrentChallenge': function (oldVal, newVal) {
            if (newVal === 'done') {
                return this.$toasted.show(`Congratulations on completing the challenge`, { type: 'success', position: 'bottom-left', duration: 2000 })
            }
            if (oldVal.id !== newVal.id)  {
                this.aws = ''
                return this.$toasted.show(`Overcome question ${oldVal.id}`, { type: 'success', position: 'bottom-left', duration: 2000 })
            } 
        }
    },
    computed: {
        ...mapGetters(['getCurrentChallenge', 'getChallenge']),
    },
    data () {
        return {
            aws: '',
            loading: false
        }
    },
    methods: {
        ...mapMutations(['checkAws']),
        test () {
            if(this.aws === this.getCurrentChallenge.answer) {
                setTimeout(() => this.loading = true, 1000)
                setTimeout(() => this.loading = false, 2000)
            }
            this.checkAws(this.aws)
        }
    }
}
</script>
<style lang="scss" scope>
    @import './Challenge.scss';
    
    @media only screen and (min-width: 768px) {
        video {
            width: 100%;
            height: 800px;
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