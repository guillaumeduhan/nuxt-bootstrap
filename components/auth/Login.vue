<template>
  <div class="Login">
    <div>
      <div>
        <label for="user-mail">E-mail</label>
        <b-input id="user-mail" v-model="email" :state="mailValidator" />
      </div>
      <div>
        <label for="password">Password</label>
        <b-input id="password" v-model="password" />
      </div>
    </div>
    <b-button variant="primary" @click="submitLogin">Submit</b-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      email: undefined,
      password: undefined,
    }
  },
  computed: {
    mailValidator() {
      /* eslint-disable */
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(this.email).toLowerCase())
    },
  },
  methods: {
    submitLogin() {
      console.log("hey")
    },
  },
}
</script>
