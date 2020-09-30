<template>
  <div class="Register">
    <div>
      <div>
        <label for="user-mail">E-mail</label>
        <b-input id="user-mail" v-model="email" type="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <b-input id="password" v-model="password" type="password" />
      </div>
      <div>
        <label for="confirm_password">Confirm password</label>
        <b-input id="confirm_password" v-model="confirm_password" type="password" />
      </div>
    </div>
    <b-button variant="primary" @click="register">Register</b-button>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      email: undefined,
      password: undefined,
      confirm_password: undefined
    }
  },
  methods: {
    mailValidator() {
      /* eslint-disable */
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(this.email).toLowerCase());
    },
    async register() {

    },
  },
}
</script>
