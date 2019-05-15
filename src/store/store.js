/* eslint-disable */ 
import Vue from "vue";
import Vuex from "vuex";
import _ from 'lodash';
import videoMinh from '@/../video/hpbd-ngo-minh.mp4'
import videoDung from '@/../video/Hpbd-TheDung.mp4'
import videoHai from '@/../video/hpny-ChauHai.mp4'
import videoSon from '@/../video/hpbd-thaison.mp4'
import videoQuynh from '@/../video/hpbd-nhu-quynh.mp4'
import videoQuang from '@/../video/hpbd-hong-quang.mp4'

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
        auth: "Nhu Quynh",
        answer: "",
        message: 'Congratulations on passing the number 1 challenge. Account number 2 will be: maidat - maidat'
      },
      {
        id: "2",
        url: videoDung,
        isComplete: false,
        auth: "Mai Dat",
        answer: "",
        message: 'Congratulations on passing the number 2 challenge. Account number 3 will be: ducnguyen - ducnguyen'
      },
      {
        id: "3",
        url: videoMinh,
        isComplete: false,
        auth: "Duc Nguyen",
        answer: "626",
        message: 'Congratulations on passing the number 3 challenge. Account number 4 will be: minhtoan - codersx@626',
        challenge: 'Tính tổng mã Unicode của các ký tự trong “coders.tokyo"'
      },
      {
        id: "4",
        url: videoDung,
        isComplete: false,
        auth: "Minh Toan",
        answer: "28",
        message: 'Congratulations on passing the number 4 challenge. Account number 5 will be: thedung - codersx@28',
        challenge: 'Ngày sinh của Thành Tôn là ngày mấy?'
      },
      {
        id: "5",
        url: videoDung,
        isComplete: false,
        auth: "The Dung",
        answer: "14",
        message: 'Congratulations on passing the number 5 challenge. Account number 6 will be: thaison - codersx@14',
        challenge: 'Trong ID của Fanpage, ghép phần tử có index 10 và 11 thành một số 2 chữ số.'
      },
      {
        id: "6",
        url: videoSon,
        isComplete: false,
        auth: "Thai Son",
        answer: "20",
        message: 'Congratulations on passing the number 6 challenge. Account number 7 will be: ngominh - codersx@20',
        challenge: 'Tổng tháng sinh của 2 leaders 19 tuổi trong team Cần Thơ'
      },
      {
        id: "7",
        url: videoMinh,
        isComplete: false,
        auth: "Ngo Minh",
        answer: "22",
        message: 'Congratulations on passing the number 7 challenge. Account number 8 will be: hongquang - codersx@22',
        challenge: '2 chữ số cuối trong số điện thoại của Mai Đạt, cộng thêm 1 rồi chia cho 2'
      },
      {
        id: "8",
        url: videoQuang,
        isComplete: false,
        auth: "Hong Quang",
        answer: "17",
        message: 'Congratulations on passing the number 8 challenge. Account number 9 will be: thanhton - codersx@17',
        challenge: 'Tổng số danh sách phát của kênh Youtube tính đến đầu tháng 5?'
      },
      {
        id: "9",
        url: videoMinh,
        isComplete: false,
        auth: "Thanh Ton",
        answer: "24",
        message: 'Congratulations on passing the number 9 challenge. Account number 10 will be: longnguyet - codersx@24',
        challenge: 'Tổng số ký tự từ tên đầy đủ của Ngô Minh và Danh lợi (no space) cộng với true?'
      },
      {
        id: "10",
        url: videoDung,
        isComplete: false,
        auth: "Long Nguyet",
        answer: "954",
        message: 'Congratulations on passing the number 10 challenge. Account number 11 will be: chauhai - codersx@954',
        challenge: 'Lấy zipcode của team có Hồng Quang trừ lại cho 99046'
      },
      {
        id: "11",
        url: videoHai,
        isComplete: false,
        auth: "Chau Hai",
        answer: "1705",
        subAnswer: 1705, 
        message: 'Congratulations! Thinh, you have completed the challenge',
        challenge: 'Số đặc biệt tính ra từ tất cả kết quả trong những câu hỏi trước'
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
