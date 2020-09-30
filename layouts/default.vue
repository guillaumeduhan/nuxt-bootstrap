<template>
  <div>
    <div v-if="$auth.loggedIn">
      <!-- username & logout button -->
      <Header />
      <Nuxt />
    </div>
    <div v-else class="container">
      <!-- login button & register button -->
      <Register v-if="!login" />
      <Login v-else />
      <p @click="login = !login">{{ login ? 'Create an account' : 'Login' }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Default",
  data() {
    return {
      login: true
    }
  }
}
</script>