import UnoCSS from 'unocss/vite'
import { presetAttributify, presetIcons, presetUno } from 'unocss'

export function configUnocss() {
  return UnoCSS({
    presets: [
      presetUno(),
      presetAttributify(),
      presetIcons(),
    ],
    shortcuts: {
      'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md hover:shadow-lg',
      'fc': 'flex justify-center items-center',
      'fcc': 'flex flex-col justify-center items-center',
      'bg-base': 'bg-gray-100 dark:bg-truegray-800',
      'bg-canvas': 'bg-light-400 dark:bg-truegray-700',
      'text-base': 'text-gray-900 dark:text-truegray-200',
    },
  })
}
