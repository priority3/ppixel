import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

export function configVuecomponents() {
  return Components({
    resolvers: [
      NaiveUiResolver(),
    ],
  })
}
