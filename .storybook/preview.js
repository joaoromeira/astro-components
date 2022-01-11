
import { ThemeProvider } from 'styled-components'
import { light, dark } from '../src/themes/index'

export const parameters = {
  actions: { argTypesRegex: '^on.*' },
}

export const globalTypes = {
  theme: {
    name: 'Theme',
    description: 'Global theme',
    defaultValue: 'light',
    toolbar: {
      icon: 'lightning',
      items: ['dark', 'light'],
      showName: true,
    },
  }
}

export const decorators = [
  (Story, context) =>  {
    const theme = context.globals.theme === 'light' ? light : dark;

    return (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    )
  }
]