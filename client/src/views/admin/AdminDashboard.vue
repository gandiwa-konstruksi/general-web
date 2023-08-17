<template>
  <div>
    <h1>Ini Halaman Admin / Dashboard</h1>
    <div class="nav">
      <RouterLink to="/admin/dashboard">Dashboard</RouterLink>
      <RouterLink to="/admin/portfolios">Portofolio</RouterLink>
      <RouterLink to="/admin/blogs">Blog</RouterLink>
      <RouterLink to="/admin/testimonials">Testimoni Klien</RouterLink>
      <RouterLink to="/admin/gallery">Galeri Foto</RouterLink>
      <RouterLink to="/admin/users">User</RouterLink>
    </div>
      <RouterView />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<style scoped>
.nav {
  display: flex;
  gap: 10px;
  border: 1px solid #000;
}
.nav a.router-link-active{
  color: aqua;
}
RouterView{
  border: 1px solid #000;
}
</style>
