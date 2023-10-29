export const addCountry = (country) => {
    return {
        type: 'ADD_COUNTRY',
        payload: country
    }
}
export const listCountry = (country) => {
    return {
        type: 'LIST_COUNTRY',
        payload: country
    }
}

