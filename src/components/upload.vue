<script setup lang="ts">
import { ref } from 'vue'
import { useGetImg } from '@/utils/genrate'
const input = ref<HTMLElement | null>(null)
const accept = '.png,.jpg,.jpeg,.gif'
function handleToUploadImg() {
  input.value && input.value.click()
}
const file = ref()
function handleUploadImg(ev) {
  file.value = ev.target.files[0]
  if (!file.value) return
  file.value.url = URL.createObjectURL(file.value)
}
</script>

<template>
  <div w-full flex="~ col" items-center gap-2>
    <div
      v-if="!file" i-uil-plus text-dark hover:bg-truegray-600
      cursor-pointer w-25 h-25 title="upload img"
      border="1px solid gray-500" @click="handleToUploadImg"
    >
      <input
        ref="input" display-none type="file"
        :accept="accept" @change="handleUploadImg"
      >
    </div>

    <div h-10 fcc>
      <div
        i-uil-play
        text-3xl
        hover:text-4xl title="generate img"
        transition="all .3s ease-linear" cursor-pointer
      />
    </div>
    <p text-1 font="1 200">
      {{ $t('home.genration') }}
    </p>

    <Teleport to="body">
      <div
        v-if="file" w-100 h-100 fc
        absolute right="30%" top-10
      >
        <img :src="file.url" alt="this is img">
      </div>
    </Teleport>
  </div>
</template>
