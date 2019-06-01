<template>
  <v-app>
    <app-navbar></app-navbar>
    <main>
      <router-view></router-view>
    </main>
  </v-app>
</template>

<script>

import Navbar from '@/components/Navbar.vue'
export default {
  name: 'app',
  components: {
    AppNavbar: Navbar,
  }
}
</script>

<style>
</style>
