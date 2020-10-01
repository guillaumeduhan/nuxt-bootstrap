<template>
  <div>
    <div v-if="getUser">
      <Header />
      <Nuxt />
    </div>
    <div v-else class="container">
      <Login v-if="login" />
      <Register v-else />
      <p @click="login = !login">{{ login ? 'Create an account' : 'Login' }}</p>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { SET_CURRENT_USER } from '../constants/actions-type'

export default {
  name: "Default",
  data() {
   return {
    login: true
   }
  },
  computed: {
   ...mapGetters(["getUser"])
  },
  mounted() {
   let store = this.$store
   this.$fireAuth.onAuthStateChanged(function() {
    store.dispatch(SET_CURRENT_USER)
   })
  }
}
</script>