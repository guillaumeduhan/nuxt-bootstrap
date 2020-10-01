<template>
  <div class="Login">
    <div>
      <div>
        <label for="user-mail">E-mail</label>
        <b-input id="user-mail" v-model="account.email" type="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <b-input id="password" v-model="account.password" type="password" />
      </div>
    </div>
    <b-button variant="primary" @click="submitLogin">Submit</b-button>
  </div>
</template>

<script>
import {
 LOGIN
} from '../../constants/actions-type'

export default {
  name: "Login",
  data() {
    return {
      account: {
       email: undefined,
       password: undefined,
      }
    }
  },
  methods: {
    submitLogin() {
     this.$store.dispatch(LOGIN, this.account)
    }
  },
}
</script>
