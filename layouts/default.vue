<template>
  <div>
    <div v-if="$auth.loggedIn">
      <!-- username & logout button -->
      {{ $auth.user.email }}
      <b-button variant="primary" @click="$auth.logout()">Logout</b-button>
      <Nuxt />
    </div>
    <div v-else class="container">
      <!-- login button & register button -->
      <Login />
    </div>
  </div>
</template>

<script>
export default {
  name: "Default",
}
</script>