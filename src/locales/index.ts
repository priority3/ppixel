import type { App } from 'vue'
import { ref, watch } from 'vue'
import type { I18n, I18nOptions } from 'vue-i18n'
import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-bundler.js'
import { LOCALE } from '@/constants/locale'
export const locale = ref(LOCALE.ZH_CN)
// eslint-disable-next-line import/no-mutable-exports
export let i18n: ReturnType<typeof createI18n>
async function configI18nOptions(): Promise<I18nOptions> {
  const defaultLocal = await import(`./lang/${locale.value}.ts`)
  const message = defaultLocal.default?.message ?? {}
  return {
    locale: locale.value,
    fallbackLocale: 'zh_CN',
    messages: {
      [locale.value]: message,
    },
    globalInjection: true,
  }
}
watch(locale, configI18nOptions)
export async function setupI18n(app: App) {
  const options = await configI18nOptions()
  i18n = createI18n(options) as I18n
  app.use(i18n)
}
