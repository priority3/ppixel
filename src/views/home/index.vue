<script setup lang='ts'>
// import { isShow } from '@/utils/genrate'
</script>

<template>
  <div
    h-screen w-screen font-semibold p-10 class="box" transition-all
    flex items-start flex-col justify-around
  >
    <div
      w-120 h-80 bg-canvas
      rounded-xl shadow-xl
      flex="~ col" items-center justify-around p5
    >
      <menu-bar />
      <div w-full>
        <upload />
      </div>
      <p>hello, this is priority</p>
    </div>

    <display-img />
  </div>
</template>

<style scoped>
.box {
  transition: padding 1s ease-in-out;
}
</style>
