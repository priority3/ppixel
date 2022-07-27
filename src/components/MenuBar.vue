<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { useI18n } from 'vue-i18n'
const dark = useDark()
const i18n = useI18n()
const toggleDark = useToggle(dark)
function toggleLocale() {
  i18n.locale.value = i18n.locale.value === 'en' ? 'zh-CN' : 'en'
}
// switch
</script>

<template>
  <div>
    <div flex justify-around w-30 items-center>
      <a href="https://github.com/priority3/ppixel">
        <div
          i-uil-github
          text-3xl cursor-pointer hover:text-truegray-500
        />
      </a>
      <div
        i-uil-sun dark:i-uil-moon
        hover:text-truegray-500 text-3xl cursor-pointer
        @click="toggleDark()"
      />
      <div
        cursor-pointer hover:text-truegray-500 i-uil-english-to-chinese text-3xl
        @click="toggleLocale()"
      />
    </div>
  </div>
</template>
