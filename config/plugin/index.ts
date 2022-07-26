import type { PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueSetupExtend from 'vite-plugin-vue-setup-extend'
import vueI18n from '@intlify/vite-plugin-vue-i18n'
import { configUnocss } from './unocss'
import { configVuecomponents } from './vue-auto-com'

export function configVitePlugin() {
  const vitePlugins: (PluginOption | PluginOption[])[] = [
    vue({
      reactivityTransform: true,
    }),
    vueJsx(),
    vueSetupExtend(),
    vueI18n(),
  ]
  // unocss
  vitePlugins.push(configUnocss())
  // vue auto components
  vitePlugins.push(configVuecomponents())
  return vitePlugins
}
