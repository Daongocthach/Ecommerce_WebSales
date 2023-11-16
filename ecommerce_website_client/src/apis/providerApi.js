import axios from 'axios'
const providerApi = {
    getAllProviders() {
        const url = 'http://localhost:8080/api/v1/providers'
        return axios.get(url)
    },
    getProviderById(id) {
        const url = `http://localhost:8080/api/v1/provider/${id}`
        return axios.get(url)
    },
    addProvider(name, phoneNo, address) {
        const url = 'http://localhost:8080/api/v1/add-provider'
        return axios.post(url, { name, phoneNo, address })
    },
    updateProvider(id, name, phoneNo, address) {
        const url = `http://localhost:8080/api/v1/update-provider/${id}`
        return axios.put(url, { name, phoneNo, address })
    },
    deleteProvider(id) {
        const url = `http://localhost:8080/api/v1/delete-provider/${id}`
        return axios.delete(url)
    },
}
export default providerApi