<script setup lang='ts'>
</script>

<template>
  <div
    h-screen w-screen font-semibold
    flex justify-center
  >
    <div
      w-120 h-80 bg-canvas
      rounded-xl shadow-xl
      mt-20 flex="~ col" items-center justify-around p5
    >
      <menu-bar />
      <div w-full>
        <upload />
      </div>
      <p>hello, this is priority</p>
    </div>
  </div>
</template>

<style scoped lang='scss'>
</style>
