/* eslint-disable */
import axios from 'axios'

export default ({
  async login (username, password) {
    try {
      let rs = await axios.post('https://api-authen.herokuapp.com/login', {
      "username": username,
      "password": password
      })
      if(rs.status === 200) {
        localStorage.setItem('__token', rs.data.__token)
      }
      return rs
    } catch (err) {
      return false
    }
  }
})