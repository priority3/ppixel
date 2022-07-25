<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>

<template>
  <router-view />
</template>

<style>
.dark {
  background: #222;
  color: white;
  color-scheme: dark;
}
  /* 滚动槽 */
::-webkit-scrollbar {
    background-color: transparent;
    height: 12px;
    width: 12px;
}
/* 滚动条滑块 */
::-webkit-scrollbar-thumb {
    border: 3px solid transparent;
    -webkit-background-clip: content-box;
    background-clip: content-box;
    opacity: 1;
    background-color: rgb(176, 176, 176);
    border-radius: 9999px;
}
.dark *::-webkit-scrollbar-thumb{
   background-color: rgb(104, 104, 104);
}
</style>
