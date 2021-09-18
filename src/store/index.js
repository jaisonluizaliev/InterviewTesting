import { createStore, combineReducers, applyMiddleware } from "redux";
//import dadoReducer from "./reducer/name.reducer";
import thunk from "redux-thunk";
import reducer from "./reducer/asyncData.reducer";


const store = createStore(combineReducers({
  //dado: dadoReducer,
  heroesReducer: reducer
}), applyMiddleware(thunk))

export default store