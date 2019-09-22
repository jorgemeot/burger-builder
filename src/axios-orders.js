import axios from 'axios'

const instance = axios.create({
  baseURL: 'https://burger-a6d6e.firebaseio.com/'
})

export default instance
