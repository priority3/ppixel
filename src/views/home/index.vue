<script setup lang='ts'>
import { useDark, useToggle } from '@vueuse/core'
const dark = useDark()
const toggleDark = useToggle(dark)
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
      <div flex justify-around w-30 items-center>
        <a href="https://github.com/priority3/vue-starter">
          <div
            i-carbon-logo-github
            text-3xl cursor-pointer hover:text-truegray-500
          />
        </a>
        <div
          i-carbon-sun dark:i-carbon-moon
          hover:text-truegray-500 text-3xl cursor-pointer
          @click="toggleDark()"
        />
      </div>
      <div w-full>
        <upload />
      </div>
      <p>hello, this is priority</p>
    </div>
  </div>
</template>

<style scoped lang='scss'>
</style>
