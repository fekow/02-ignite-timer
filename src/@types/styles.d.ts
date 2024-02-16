import 'styled-components'
import { defaultTheme } from '../styles/themes/Default'

type Theme = typeof defaultTheme
// faz com que os imports peguem essa tipagem que atualizei aqui
declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
