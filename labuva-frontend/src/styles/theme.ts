import { DefaultTheme } from 'styled-components'

export const lightTheme: DefaultTheme = {
  background: 'offwhite',
  titles: '#212121',
  text: '#2D3035',

  card: {
    background: '#fff',
  },

  button: {
    primary: {
      background: '#0066FF',
      color: '#fff',
      hover: '#5E9BFF',
      active: '#2C7AFF',
      disabled: '#4D8FFF',
    },

    secondary: {
      background: '#E6F0FF',
      color: '#0066FF',
      hover: '#6B6F75',
      active: '#45464F',
      disabled: '#34353C',
    },
  },
}

export const darkTheme: DefaultTheme = {
  background: '#22252A',
  titles: '#fff',
  text: '#FAFAFA',

  card: {
    background: '#2D3035',
  },

  button: {
    primary: {
      background: '#2288FF',
      color: '#fff',
      hover: '#5E9BFF',
      active: '#2C7AFF',
      disabled: '#4D8FFF',
    },

    secondary: {
      background: '#3D3F44',
      color: '#fff',
      hover: '#6B6F75',
      active: '#45464F',
      disabled: '#34353C',
    },
  },
}
