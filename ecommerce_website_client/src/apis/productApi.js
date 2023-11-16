import axios from 'axios'
const productApi = {
    getAllProducts() {
        const url = 'http://localhost:8080/api/v1/products'
        return axios.get(url)
    },
    getProductById(id) {
        const url = `http://localhost:8080/api/v1/product/${id}`
        return axios.get(url)
    },
    getProductsByProviderId(id) {
        const url = `http://localhost:8080/api/v1/product-provider/${id}`
        return axios.get(url)
    },
    getProductsBySubCategoryId(id) {
        const url = `http://localhost:8080/api/v1/product-subcategory/${id}`
        return axios.get(url)
    },
    addProduct(product) {
        const url = 'http://localhost:8080/api/v1/add-product'
        return axios.post(url, product)
    },
    updateProduct(product) {
        const url = 'http://localhost:8080/api/v1/update-product'
        return axios.put(url, product)
    },
    deleteProduct(id) {
        const url = `http://localhost:8080/api/v1/del-product/${id}`
        return axios.delete(url)
    },
}

export default productApi