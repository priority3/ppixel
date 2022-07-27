import type { App } from 'vue'
import type { I18n, I18nOptions } from 'vue-i18n'
import { createI18n } from 'vue-i18n/dist/vue-i18n.esm-bundler.js'
// eslint-disable-next-line import/no-mutable-exports
export let i18n: ReturnType<typeof createI18n>
async function getMessage(prefix = 'zh-CN') {
  const locale = await import(`./lang/${prefix}.ts`)
  return locale.default?.message ?? {}
}
async function configI18nOptions(): Promise<I18nOptions> {
  return {
    locale: 'zh-CN',
    fallbackLocale: 'zh_CN',
    messages: {
      'zh-CN': await getMessage('zh-CN'),
      'en': await getMessage('en'),
    },
    globalInjection: true,
  }
}
export async function setupI18n(app: App) {
  const options = await configI18nOptions()
  i18n = createI18n(options) as I18n
  app.use(i18n)
}
