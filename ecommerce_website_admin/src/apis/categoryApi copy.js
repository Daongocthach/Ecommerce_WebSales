import axios from 'axios'
const categoryApi = {
    getAllCategories() {
        const url = 'http://localhost:8080/api/v1/categories'
        return axios.get(url)
    },
    getCategoryById(id) {
        const url = `http://localhost:8080/api/v1/category/${id}`
        return axios.get(url)
    },
    addCategory(name) {
        const url = 'http://localhost:8080/api/v1/add-category'
        return axios.post(url, { name })
    },
    updateCategory(id, name) {
        const url = `http://localhost:8080/api/v1/update-category/${id}`
        return axios.put(url, { name })
    },
    deleteCategory(id) {
        const url = `http://localhost:8080/api/v1/delete-category/${id}`
        return axios.delete(url)
    }
}
export default categoryApi