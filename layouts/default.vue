<template>
  <div>
    <Nuxt />
    <div v-if="$auth.loggedIn">
      <!-- username & logout button -->
    </div>
    <div v-else>
      <!-- login button & register button -->
      <Login />
    </div>
  </div>
</template>
