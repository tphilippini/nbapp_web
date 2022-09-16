<template>
  <NavBar class="navbar" />
  <router-view />
</template>

<script setup>
import NavBar from '@/components/NavBar.vue';
</script>

<style lang="scss">
.navbar {
  margin-bottom: 2rem;
}
</style>
