import type { Ref } from 'vue'
import { ref, watch } from 'vue'
export const file = ref<Blob | MediaSource>()

watch(file, (newVal) => {
  if (newVal)
    useGenrateImg(newVal)
})

export function useGenrateImg(file: Blob | MediaSource) {
  // const context = canvas.value.getContext('2d')
  if (!file) return
  console.log(file)

  return file
}
