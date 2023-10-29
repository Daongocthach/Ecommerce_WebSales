export const addMovie = (movie) => {
    return {
        type: 'ADD_MOVIE',
        payload: movie
    }
}
export const listMovie = (movies) => {
    return {
        type: 'LIST_MOVIE',
        payload: movies
    }
}

