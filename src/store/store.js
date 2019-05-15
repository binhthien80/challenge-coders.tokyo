/* eslint-disable */ 
import Vue from "vue";
import Vuex from "vuex";
import _ from 'lodash';
import videoMinh from '@/../video/hpbd-ngo-minh.mp4'
import videoDung from '@/../video/mai-the-dung-da-nang.mp4'
import videoHai from '@/../video/hpny-ChauHai.mp4'
import videoSon from '@/../video/hpbd-thaison.mp4'
import videoQuynh from '@/../video/hpbd-nhu-quynh.mp4'

import api from '@/services/api'
Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    isLogin: {
      wait: false,
      login: false
    },
    answer: '',
    challenge: [
      {
        id: "1",
        url: videoQuynh,
        isComplete: false,
        auth: "NhuQuynh",
        answer: "",
        message: 'Congratulations on passing the number 1 challenge. Account number 2 will be: maidat - maidat'
      },
      {
        id: "2",
        url: videoDung,
        isComplete: false,
        auth: "MaiDat",
        answer: "",
        message: 'Congratulations on passing the number 2 challenge. Account number 3 will be: ducnguyen - ducnguyen'
      },
      {
        id: "3",
        url: videoMinh,
        isComplete: false,
        auth: "DucNguyen",
        answer: "626",
        message: 'Congratulations on passing the number 3 challenge. Account number 4 will be: minhtoan - codersx@626'
      },
      {
        id: "4",
        url: videoDung,
        isComplete: false,
        auth: "MinhToan",
        answer: "28",
        message: 'Congratulations on passing the number 4 challenge. Account number 5 will be: thedung - codersx@28'
      },
      {
        id: "5",
        url: videoMinh,
        isComplete: false,
        auth: "TheDung",
        answer: "14",
        message: 'Congratulations on passing the number 5 challenge. Account number 6 will be: thaison - codersx@14'
      },
      {
        id: "6",
        url: videoSon,
        isComplete: false,
        auth: "ThaiSon",
        answer: "20",
        message: 'Congratulations on passing the number 6 challenge. Account number 7 will be: ngominh - codersx@20'
      },
      {
        id: "7",
        url: videoMinh,
        isComplete: false,
        auth: "NgoMinh",
        answer: "22",
        message: 'Congratulations on passing the number 7 challenge. Account number 8 will be: hongquang - codersx@22'
      },
      {
        id: "8",
        url: videoDung,
        isComplete: false,
        auth: "HongQuang",
        answer: "17",
        message: 'Congratulations on passing the number 8 challenge. Account number 9 will be: thanhton - codersx@17'
      },
      {
        id: "9",
        url: videoMinh,
        isComplete: false,
        auth: "ThanhTon",
        answer: "24",
        message: 'Congratulations on passing the number 9 challenge. Account number 10 will be: longnguyet - codersx@24'
      },
      {
        id: "10",
        url: videoDung,
        isComplete: false,
        auth: "LongNguyet",
        answer: "954",
        message: 'Congratulations on passing the number 10 challenge. Account number 11 will be: chauhai - codersx@954'
      },
      {
        id: "11",
        url: videoHai,
        isComplete: false,
        auth: "ChaiHai",
        answer: "???",
        subAnswer: 1705, 
        message: 'Thank you Thinh, you have completed the challenge'
      }
    ]
  },
  getters: {
    getIsLogin: state => {
      return state.isLogin
    },
    getChallenge: state => {
        return state.challenge
    },
    getVideoChallenge: state => {
      return _.find(state.challenge, o => o.id == state.isLogin.login.data.currentChallenge)
    }
  },
  mutations: {
    checkAws: (state, c) => {
        let rs = _.find(state.challenge, o => !o.isComplete)
        if (rs.answer === c)
            setTimeout(() => rs.isComplete = true, 2000)
        return;
    },
    login: (state, rs) => {
      state.isLogin.login = rs
    },
    waitLogin: (state, w) => {
      state.isLogin.wait = w
    }
  },
  actions: {
    // eslint-disable-next-line
    async login ({ commit }, { username, password }) {
      commit('waitLogin', true)
      let rs = await api.login(username, password)
      commit('waitLogin', false)
      commit('login', rs)
    }
  }
});
