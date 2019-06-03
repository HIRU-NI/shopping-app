<template>
  <v-app>
    <app-navbar></app-navbar>
    <v-content class="mt-5">
      <router-view></router-view>
    </v-content>
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
