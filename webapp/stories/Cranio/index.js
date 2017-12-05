/* eslint-disable css-modules/no-undef-class */

import React from 'react'
import { storiesOf } from '@storybook/react'
import { ThemeProvider } from 'react-css-themr'

import defaultTheme from '../../src/components/Cranio/defaultTheme/index.css'
import crazyTheme from '../../src/components/Cranio/crazyTheme/index.css'

import Cranio from '../../src/components/Cranio'

storiesOf('Cranio', module)
  .add('defaultTheme', () => (
    <ThemeProvider theme={{ PLCranio: defaultTheme }}>
      <Cranio />
    </ThemeProvider>
  ))
  .add('crazyTheme', () => (
    <ThemeProvider theme={{ PLCranio: crazyTheme }}>
      <Cranio />
    </ThemeProvider>
  ))

