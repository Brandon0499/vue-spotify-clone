<template>
  <h1>This is expanded category page {{ route.params.id }}</h1>
</template>

<script setup>
import { useRoute } from "vue-router";
const route = useRoute();

console.log(route);
</script>

<style></style>
