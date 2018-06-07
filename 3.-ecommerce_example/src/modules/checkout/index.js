import * as ActionTypes from './actionTypes'
export * from './actions'
export * from './selectors'

const initialState = {
  name: '',
  lastName: '',
  email: '',
  address: ''
}

export const checkoutReducer = (state = initialState, action) => {
  console.log(action)
  switch(action.type){
    case ActionTypes.SET_NAME:
      return {
        ...state,
        name: action.name,
      }
    case ActionTypes.SET_LAST_NAME:
      return {
        ...state,
        lastName: action.lastName,
      }
    case ActionTypes.SET_EMAIL:
      return {
        ...state,
        email: action.email,
      }

    case ActionTypes.SET_ADDRESS:
      return {
        ...state,
        address: action.address
      }
    default: return state
  }
}