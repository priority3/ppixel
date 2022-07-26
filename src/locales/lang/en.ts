import { genMessage } from '../helper'

const modules = import.meta.glob('./en/**/*.ts', { eager: true })
export default {
  message: {
    ...genMessage(modules as Record<string, Record<string, any>>, 'en'),
  },
  momentLocaleName: 'en',
}
