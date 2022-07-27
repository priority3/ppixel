import { genMessage } from '../helper'

const modules = import.meta.glob('./zh-CN/**/*.ts', { eager: true })
export default {
  message: {
    ...genMessage(modules as Record<string, Record<string, any>>, 'zh-CN'),
  },
  momentLocaleName: 'zh-CN',
}
