import { handleActions } from 'redux-actions'

const initialState = {
  language: 'en',
  location: {
    lat: null,
    lng: null
  }
}

export const settingReducer = handleActions({
  SET_LANGAGE: (state, { payload }) => ({
    ...state,
    language: payload.language
  })
}, initialState)

export default settingReducer
