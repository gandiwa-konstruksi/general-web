<template>
  <RouterView />
</template>

<script setup>
import { RouterView } from 'vue-router'
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

.logo {
  width: 100px;
}
</style>
