import type { App } from 'vue'
import { createApp } from 'vue'
import appView from './App.vue'

import 'uno.css'
import '@unocss/reset/tailwind.css'
import { setupRouter } from './router'
import { setupI18n } from './locales'
async function bootstrap(app: App): Promise<App> {
  setupRouter(app)
  await setupI18n(app)
  return app
}

const app = createApp(appView)

bootstrap(app).then(res => res.mount('#app'))
