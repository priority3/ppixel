<script setup lang="ts">
</script>

<template>
  <div w-full flex="~ col" items-center gap-2>
    <div
      i-uil-plus text-dark hover:bg-truegray-600 cursor-pointer
      w-25 h-25 title="upload img" border="1px solid gray-500"
    />

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
  </div>
</template>
