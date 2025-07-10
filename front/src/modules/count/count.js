import { createAction, handleActions } from "redux-actions"

// type 생성
const INCREASE = "count/INCREASE"
const DECREASE = "count/DECREASE"
const SET_USER_STATUS = "user/USER_STATUS"

// action 생성
export const increase = createAction(INCREASE)
export const decrease = createAction(DECREASE)
export const setUserStatus = createAction(SET_USER_STATUS, (isLogin) => isLogin);

// state 초기값
const UserInitalValue = {
    currentUser : {},
    isLogin : false,
    previousUrl : "",
};

const initialState = {
  number : 0
}
    
// reducer 생성
const count = handleActions({
  [INCREASE] : (state, action) => ({number : state.number + 1}),
  [DECREASE] : (state, action) => ({number : state.number - 1}),
  [SET_USER_STATUS] : (state = UserInitalValue, action) => ({...state, isLogin: action.payload})
}, initialState)

export default count;
