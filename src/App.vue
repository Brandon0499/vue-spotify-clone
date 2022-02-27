<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue";
import Header from "./components/Header.vue";
// import SpotifyIcon from "./components/icons/SpotifyLogo.vue";
// import HomeIcon from "./components/icons/HomeIcon.vue";
</script>

<template>
  <!-- <header>
    <nav>
      <RouterLink to="/" class="text-indigo-600">Home </RouterLink>
      <RouterLink to="/search" class="text-indigo-600">Search</RouterLink>
    </nav>
  </header> -->
  <div class="flex h-[130vh]">
    <Navbar></Navbar>

    <!-- main right side -->
    <main class="w-screen h-screen">
      <Header></Header>
      <div class="border border-red-500 p-5 mt-0">Hello</div>
    </main>
  </div>

  <RouterView />
</template>

<style>
@import "@/assets/base.css";
</style>
