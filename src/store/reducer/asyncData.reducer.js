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
// import { urlGet /* limit, ts, publicKey, hash, baseURL */ } from "../../services/api-fetch"


// /**
//  * id ? `${baseURL}/${id}?limit=${limit}&ts=${ts}&apikey=${publicKey}&hash=${hash}` :, baseURL, limit, ts, hash, publicKey
//  */

// //constants
// const FETCH_HEROES_REQUEST = 'FETCH_HEROES_REQUEST'
// const FETCH_HEROES_SUCCESS = 'FETCH_HEROES_SUCCESS'
// const FETCH_HEROES_FAILURE = 'FETCH_HEROES_FAILURE'
// //const FETCH_HEROES_FILTERED_BY_ID = 'FETCH_HEROES_FILTERED_BY_ID'
// //const FETCH_HEROES_SEARCHED = 'FETCH_HEROES_SEARCHED'

//functions action creators
// const fecthHeroesRequest = () => {
//   return {
//     type: FETCH_HEROES_REQUEST
//   }
// }

// const fetchHeroesSuccess = (heroes) => {
//   return {
//     type: FETCH_HEROES_SUCCESS,
//     payload: heroes
//   }
// }

// const fetchHeroesFailure = (error) => {
//   return {
//     type: FETCH_HEROES_FAILURE,
//     payload: error
//   }
// }

///reducer


// export const fetchHeroes = () => {
//   //2:49 
//   return async function (dispatch) {
//     dispatch(fecthHeroesRequest())
//     await fetch(
//       urlGet
//       //: `${baseURL}?limit=${limit}&nameStartsWith=&${search}&ts=${ts}&apikey=${publicKey}&hash=${hash}`
//     )
//       .then(res => {
//         //take data
//         const heroes = res.data
//         //action type
//         dispatch(fetchHeroesSuccess(heroes))
//       })
//       .catch(err => {
//         dispatch(fetchHeroesFailure(err.message))
//       })



//   }
// }

export default reducer