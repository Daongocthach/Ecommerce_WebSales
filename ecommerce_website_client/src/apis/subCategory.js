import axios from 'axios'
const subCategoryApi = {
    getAllSubCategories() {
        const url = 'http://localhost:8080/api/v1/sub-categories'
        return axios.get(url)
    },
    getSubCategoryById(id) {
        const url = `http://localhost:8080/api/v1/sub-category/${id}`
        return axios.get(url)
    },
    getSubCategoriesByCateId(id) {
        const url = `http://localhost:8080/api/v1/sub-categories/${id}`
        return axios.get(url)
    },
    addSubCategory(name, cateId) {
        const url = 'http://localhost:8080/api/v1/add-sub-category'
        return axios.post(url, { name, cateId })
    },
    updateSubCategory(id, name, cateId) {
        const url = `http://localhost:8080/api/v1/update-sub-category/${id}`
        return axios.put(url, { name, cateId })
    },
    deleteSubCategory(id) {
        const url = `http://localhost:8080/api/v1/del-sub-category/${id}`
        return axios.delete(url)
    },
}

export default subCategoryApi