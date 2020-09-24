<template>
  <div>
    <Nuxt />
    <div v-if="$auth.loggedIn">
      <!-- username & logout button -->
      {{ $auth.user.email }}
    </div>
    <div v-else class="container">
      <!-- login button & register button -->
      <Login />
    </div>
  </div>
</template>
