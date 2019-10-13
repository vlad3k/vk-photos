import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
} from '../actions/UserActions'

const initialState = {
  name: '',
  error: '',
  isFetching: false,
}

export function userReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, isFetcing: true, error: '' }

    case LOGIN_SUCCESS:
      return { ...state, isFetcing: false, name: action.payload }

    case LOGIN_FAIL:
      return { ...state, isFetcing: false, error: action.payload.message }

    default:
      return state
  }
}
