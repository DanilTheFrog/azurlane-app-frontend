import axios from 'axios'
const instance = axios.create({
    baseURL: "http://localhost:5555"
})

export default instance