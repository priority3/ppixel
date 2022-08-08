<script setup lang="ts">
import { ref } from 'vue'
import { file } from '@/utils/genrate'
const input = ref<HTMLInputElement | null>(null)
const accept = '.png,.jpg,.jpeg,.gif'
function handleToUploadImg() {
  input.value && input.value.click()
}
function handleUploadImg(e) {
  file.value = e.target.files[0]
  if (file && file.value)
    (file.value as any).url = URL.createObjectURL(file.value)
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
    <p text-1 font="1 550 mono">
      {{ $t('home.genration') }}
    </p>

    <Teleport to="body">
      <div v-if="file" absolute right="10%" top-20 fcc>
        <h1
          text-base font-mono
        >
          {{ $t('home.welcome') }}
        </h1>
        <div
          w-100 h-80 fc of-hidden
        >
          <img :src="(file as any).url" alt="this is img">
        </div>
      </div>
    </Teleport>
  </div>
</template>
