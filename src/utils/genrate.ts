import { readFileSync } from 'fs'
import { ref } from 'vue'
export const isShow = ref(false)

setTimeout(() => {
  isShow.value = true
}, 1000)

export function useGetImg() {
  const reader = new FileReader()
}
