<script setup lang="ts">
import { ref } from 'vue'
const canvas = ref<HTMLCanvasElement | null>(null)
</script>

<template>
  <div>
    <canvas ref="canvas" />
  </div>
</template>
