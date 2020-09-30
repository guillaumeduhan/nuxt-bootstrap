<template>
  <div class="Header d-flex align-items-center justify-content-between bg-dark text-white px-4 py-2">
    <div>Dashboard</div>
    <div>
      {{ $auth.user.email }}
      <b-button variant="danger" @click="$auth.logout()">Logout</b-button>
    </div> 
  </div>
</template>