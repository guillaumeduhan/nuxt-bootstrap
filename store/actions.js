import firebase from 'firebase/app'
import 'firebase/auth'

import {
  CREATE_USER,
  SET_CURRENT_USER,
  LOGIN,
  LOGOUT
} from "../constants/actions-type.js"
import {
  SET_USER
} from "../constants/mutations-type.js"

export default {
  [CREATE_USER]: ({ commit }, user) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(user.email, user.password)
      .then(() => commit(SET_USER, user))
      .catch((err) => console.log(err))
  },
  [LOGIN]: ({ commit }, user) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(user.email, user.password)
      .then(() => commit(SET_USER, user.email))
      .catch((err) => console.log(err))
  },
  [LOGOUT]: ({ commit }) => {
    firebase
      .auth()
      .signOut()
      .then(() => 
        commit(SET_USER)
      )
  },
  [SET_CURRENT_USER]: ({ commit }) => {
    let user = firebase.auth().currentUser ? firebase.auth().currentUser : undefined
    commit(SET_USER, user)
  }
}