const initialState = {
    countries: []
}
const countryReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_COUNTRY':
          return {
            ...state,
            countries: [...state.countries, action.payload]
          }
        case 'LIST_COUNTRY':
          return {
            ...state,
            countries: action.payload
          }
        default:
          return state
      }
}
export default countryReducer