import axios from 'axios'
const userApi = {
    updateProfile(fullName, phoneNo, address, avatar) {
        const url = 'http://localhost:8080/api/v1/update-profile'
        return axios.put(url, {
            fullName, phoneNo, address, avatar
        })
    }
}

export default userApi