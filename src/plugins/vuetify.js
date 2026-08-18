import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'

export default createVuetify({
  theme: {
    defaultTheme: 'hyundaiLight',
    themes: {
      hyundaiLight: {
        dark: false,
        colors: {
          background: '#FFFFFF',
          surface: '#FFFFFF',
          'surface-variant': '#F6F3F2',
          primary: '#002C5F',
          secondary: '#767676',
          accent: '#007FA8',
          'on-surface-variant': '#767676',
        },
      },
    },
  },
  defaults: {
    VBtn: { rounded: 'pill' },
  },
})
