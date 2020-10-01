<template>
  <div class="Header d-flex align-items-center justify-content-between bg-dark text-white px-4 py-2">
    <div>Dashboard</div>
    <div>
      <b-button variant="danger" @click="logout">Logout</b-button>
    </div> 
  </div>
</template>

<script>
export default {
 name: "Header",
 methods: {
  logout() {
   this.$store.dispatch('LOGOUT')
  }
 }
}
</script>