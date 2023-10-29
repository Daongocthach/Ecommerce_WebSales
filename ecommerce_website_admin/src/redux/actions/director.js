export const addDirector = (director) => {
    return {
        type: 'ADD_DIRECTOR',
        payload: director
    }
}
export const listDirector = (director) => {
    return {
        type: 'LIST_DIRECTOR',
        payload: director
    }
}

