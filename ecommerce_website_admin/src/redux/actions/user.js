export const addUser = (User) => {
    return {
        type: 'ADD_USER',
        payload: User
    }
}
export const listUser = (User) => {
    return {
        type: 'LIST_USER',
        payload: User
    }
}

