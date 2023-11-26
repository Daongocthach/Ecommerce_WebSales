import axios from 'axios'
const authenApi = {
    signin(username, password) {
        const url = 'http://localhost:8080/api/v1/signin'
        return axios.get(url, { params: { username, password } })
    },
    signup(username, password, email, fullName, phoneNo) {
        const url = 'http://localhost:8080/api/v1/signup'
        return axios.post(url, {
            username,
            password,
            email,
            fullName,
            phoneNo

        })
    },
    updateProfile(id, fullName, phoneNo, address, avatar) {
        const url = 'http://localhost:8080/api/v1/update-profile'
        return axios.put(url, {
           id, fullName, phoneNo, address, avatar
        })
    }
}

export default authenApi