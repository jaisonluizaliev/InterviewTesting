import ACTION_TYPES from "../constants/constants"

const initialState = {
  loading: false,
  heroes: [],
  error: ''
}

const reducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case ACTION_TYPES.FETCH_HEROES_REQUEST:
      return {
        ...state,
        loading: true
      }
    case ACTION_TYPES.FETCH_HEROES_SUCCESS:
      return {
        loading: false,
        heroes: action.payload,
        error: ''
      }
    case ACTION_TYPES.FETCH_HEROES_FAILURE:
      return {
        loading: false,
        heroes: [],
        error: action.payload
      }
    default:
      return state
  }
}


export default reducer