import axios from 'axios'
const addressApi = {
    getProvices() {
        const url = 'https://provinces.open-api.vn/api/?depth=1'
        return axios.get(url)
    },
    getProvice(code) {
        const url = `https://provinces.open-api.vn/api/p/${code}`
        return axios.get(url)
    },
    getDistricts(code) {
        const url = `https://provinces.open-api.vn/api/p/${code}?depth=2`
        return axios.get(url)
    },
    getWards(code) {
        const url = `https://provinces.open-api.vn/api/d/${code}?depth=2`
        return axios.get(url)
    }
}

export default addressApi