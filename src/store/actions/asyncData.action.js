import ACTION_TYPES from "../constants/constants"
import { urlGet, ts, baseURL, publicKey, hash } from "../../services/api-fetch"

const fetchHeroesRequest = () => {
  return {
    type: ACTION_TYPES.FETCH_HEROES_REQUEST
  }
}

const fetchHeroesSuccess = (heroes) => {
  return {
    type: ACTION_TYPES.FETCH_HEROES_SUCCESS,
    payload: heroes
  }
}

const fetchHeroesFailure = (error) => {
  return {
    type: ACTION_TYPES.FETCH_HEROES_FAILURE,
    payload: error
  }
}

export const fetchHeroes = (search) => {

  return async function (dispatch) {
    dispatch(fetchHeroesRequest())
    console.log(search)
    try {
      const res = !search
        ? await fetch(urlGet)
        : await fetch(`${baseURL}?nameStartsWith=${search}&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
      const { data } = await res.json();
      const heroes = data
      dispatch(fetchHeroesSuccess(heroes))
    } catch (error) {
      dispatch(fetchHeroesFailure(error))
    }
  }
}

export const fetchHeroesById = (id) => {

  return async function (dispatch) {
    dispatch(fetchHeroesRequest())
    try {
      const res = await fetch(`${baseURL}/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
      const { data } = await res.json();
      const heroes = data
      dispatch(fetchHeroesSuccess(heroes))
    } catch (error) {
      dispatch(fetchHeroesFailure(error))
    }
  }
}


