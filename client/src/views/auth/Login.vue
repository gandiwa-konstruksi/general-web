<template>
  <div>
    <h1>Ini Halaman Login</h1>
    <button @click="login">Klik untuk login</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const isLogin = ref(false)
const router = useRouter()

function login() {
  if (!isLogin.value) {
    isLogin.value = true
    console.log(isLogin.value)

    router.push('/admin/dashboard')
  }
}
</script>

<style scoped></style>
