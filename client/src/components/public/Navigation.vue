<template>
  <header>
    <nav>
      <img src="/logo.png" alt="Logo Gandiwa Konstruksi" class="logo" />
      <div class="page-link">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/projects">Projects</RouterLink>
        <RouterLink to="/contact">Contact Us</RouterLink>
      </div>
      <RouterLink to="/login">Login</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.page-link a {
  margin: 0 10px 0 10px;
}

.page-link a.router-link-active {
  color: aqua;
}

.logo {
  width: 100px;
}
</style>
