import axios from 'axios'
export function loadProducts() {
    return axios.get("http://192.168.11.132:1314/api/detail")
}