import * as ActionTypes from './actionTypes'

export const setName = name =>  ({ type: ActionTypes.SET_NAME, name })
export const setLastName = lastName =>  ({ type: ActionTypes.SET_LAST_NAME, lastName })
export const setEmail = email =>  ({ type: ActionTypes.SET_EMAIL, email })
export const setAddress = address =>  ({ type: ActionTypes.SET_ADDRESS, address })
