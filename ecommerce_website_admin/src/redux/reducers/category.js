const initialState = {
  categories: []
}
const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_CATEGORY':
      return {
        ...state,
        categories: [...state.categories, action.payload]
      }
    case 'UPDATE_CATEGORY': {
      const updateIndex = state.categories.findIndex(category => category.id === action.payload.id)
      return {
        ...state,
        categories: [
          ...state.categories.slice(0, updateIndex),
          action.payload,
          ...state.categories.slice(updateIndex + 1)
        ]
      }
    }
    case 'DELETE_CATEGORY': {
      const newCategories = state.categories.filter(category => category.id !== action.payload.id)
      return {
        ...state,
        categories: newCategories
      }
    }
    case 'LIST_CATEGORY':
      return {
        ...state,
        categories: action.payload
      }
    default:
      return state
  }
}
export default categoryReducer