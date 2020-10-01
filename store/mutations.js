import {
  SET_USER
} from "../constants/mutations-type.js"

export default {
  [SET_USER]: (state, user) => {
    if (user) {
      const { uid, email, emailVerified } = user
      state.user = { uid, email, emailVerified }
    } else {
      state.user = undefined
    }
  }
}