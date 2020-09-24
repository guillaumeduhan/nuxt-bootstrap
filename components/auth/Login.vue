<template>
  <div class="Login">
    <div>
      <div>
        <label for="user-mail">E-mail</label>
        <b-input id="user-mail" v-model="email" type="email" />
      </div>
      <div>
        <label for="password">Password</label>
        <b-input id="password" v-model="password" type="password" />
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
      email: "guillaume@gmail.com",
      password: "86327417",
    }
  },
  methods: {
    mailValidator() {
      /* eslint-disable */
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return re.test(String(this.email).toLowerCase());
    },
    async submitLogin() {
      try {
        let response = await this.$auth.loginWith('local', {
          data: {
            identifier: this.email, // identifier for strapi
            password: this.password
          }
        })
        .then(() => {
          console.log("cool")
        })
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
