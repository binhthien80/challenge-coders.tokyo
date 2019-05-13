/* eslint-disable */ 
import Vue from "vue";
import Vuex from "vuex";
import _ from 'lodash';
import videoMinh from '@/../video/hpbd-ngo-minh.mp4'
import videoDung from '@/../video/mai-the-dung-da-nang.mp4'
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    answer: '',
    challenge: [
      {
        id: "1",
        url: videoMinh,
        isComplete: false,
        auth: "Minh",
        answer: "15"
      },
      {
        id: "2",
        url: videoDung,
        isComplete: false,
        auth: "Dung",
        answer: "15"
      },
      {
        id: "3",
        url: videoMinh,
        isComplete: false,
        auth: "Minh",
        answer: "15"
      },
      {
        id: "4",
        url: videoDung,
        isComplete: false,
        auth: "Dung",
        answer: "15"
      },
      {
        id: "5",
        url: videoMinh,
        isComplete: false,
        auth: "Minh",
        answer: "15"
      },
      {
        id: "6",
        url: videoDung,
        isComplete: false,
        auth: "Dung",
        answer: "15"
      },
      {
        id: "7",
        url: videoMinh,
        isComplete: false,
        auth: "Minh",
        answer: "15"
      },
      {
        id: "8",
        url: videoDung,
        isComplete: false,
        auth: "Dung",
        answer: "15"
      },
      {
        id: "9",
        url: videoMinh,
        isComplete: false,
        auth: "Minh",
        answer: "15"
      },
      {
        id: "10",
        url: videoDung,
        isComplete: false,
        auth: "Dung",
        answer: "15"
      },
      {
        id: "11",
        url: videoMinh,
        isComplete: false,
        auth: "Minh",
        answer: "15"
      }
    ]
  },
  getters: {
    getCurrentChallenge: state => {
        return _.find(state.challenge, o => !o.isComplete) || 'done'
    },
    getChallenge: state => {
        return state.challenge
    }
  },
  mutations: {
    checkAws: (state, c) => {
        let rs = _.find(state.challenge, o => !o.isComplete)
        if (rs.answer === c)
            setTimeout(() => rs.isComplete = true, 2000)
        return;
    }
  },
  actions: {}
});
