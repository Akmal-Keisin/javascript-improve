<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <div class="app">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-view></router-view>
  </div>
</template>
<style>
  .app {
    text-align: center;
    margin: 3rem 0 3rem 0;
  }  
</style>
