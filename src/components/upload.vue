<script setup lang="ts">
import type { UploadFileInfo } from 'naive-ui'
import { $ref } from 'vue/macros'
const getAcceptImgType = () => {
  return '.webp,.svg,.png,.gif,.jpg,.jpeg,.jfif,.bmp,.dpg,.ico'
}
const fileList = $ref<UploadFileInfo[]>([])
</script>

<template>
  <div w-full flex="~ col" items-center gap-2>
    <n-upload
      list-type="image-card"
      :default-file-list="fileList"
      :accept="getAcceptImgType()"
      :default-upload="false"
      :max="1"
      :file-list-style="{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }"
    >
      <div
        i-uil-plus text-dark hover:bg-truegray-600
        w-full h-full title="upload img"
      />
    </n-upload>

    <div h-10 fcc>
      <div
        i-carbon-play-filled text-3xl
        hover:text-4xl title="generate img"
        transition="all .3s ease-linear" cursor-pointer
      />
    </div>
    <p text-1 font="1 200">
      {{ $t('home.genration') }}
    </p>
  </div>
</template>
