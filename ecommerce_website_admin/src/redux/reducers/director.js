const initialState = {
    directors: []
}
const directorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_DIRECTOR':
          return {
            ...state,
            directors: [...state.directors, action.payload]
          }
        case 'LIST_DIRECTOR':
          return {
            ...state,
            directors: action.payload
          }
        default:
          return state
      }
}
export default directorReducer