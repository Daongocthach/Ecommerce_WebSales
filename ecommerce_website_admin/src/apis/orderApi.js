import axios from 'axios'

const orderApi = {
  getAllOrders() {
    const url = 'http://localhost:8080/api/v1/orders'
    return axios.get(url)
  },
  getOrderById(orderId) {
    const url = `http://localhost:8080/api/v1/order/${orderId}`
    return axios.get(url)
  },
  getOrderByCustomerId(customerId) {
    const url = `http://localhost:8080/api/v1/orders-customer?customerId=${customerId}`
    return axios.get(url)
  },
  getOrderByCustomerIdPending(customerId) {
    const url = `http://localhost:8080/api/v1/orders-customer-pending?customerId=${customerId}`
    return axios.get(url)
  },
  getOrderByCustomerIdConfirmed(customerId) {
    const url = `http://localhost:8080/api/v1/orders-customer-confirmed?customerId=${customerId}`
    return axios.get(url)
  },
  getOrderByCustomerIdOnDelivery(customerId) {
    const url = `http://localhost:8080/api/v1/orders-customer-on-delivery?customerId=${customerId}`
    return axios.get(url)
  },
  getOrderByCustomerIdCancel(customerId) {
    const url = `http://localhost:8080/api/v1/orders-customer-cancel?customerId=${customerId}`
    return axios.get(url)
  },
  getOrderByCustomerIdSuccess(customerId) {
    const url = `http://localhost:8080/api/v1/orders-customer-success?customerId=${customerId}`
    return axios.get(url)
  },
  addOrder(order) {
    const url = 'http://localhost:8080/api/v1/add-order'
    return axios.post(url, order)
  },
  updateOrderStatus(id, orderStatus) {
    const url = 'http://localhost:8080/api/v1/update-order-status'
    return axios.put(url, { id, orderStatus })
  },
  deleteOrder(orderId) {
    const url = `http://localhost:8080/api/v1/delete-order/${orderId}`
    return axios.put(url)
  }
}

export default orderApi
