const initialState = {
    movies: []
}
const movieReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_MOVIE':
          return {
            ...state,
            movies: [...state.movies, action.payload]
          }
        case 'LIST_MOVIE':
          return {
            ...state,
            movies: action.payload
          }
        default:
          return state
      }
}
export default movieReducer