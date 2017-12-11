import React from 'react'
import { ThemeProvider } from 'react-css-themr'

import { storiesOf } from '@storybook/react'

import Tag from '../../src/components/Tag'

import defaultTheme from '../../src/components/Tag/defaultTheme/style.css'
import highContrastTheme from '../../src/components/Tag/highContrastTheme/style.css'

import style from './style.css'

const tags = [
  'lorem',
  'ipsum',
  'dolor',
  'amet',
  'consetetur',
]

storiesOf('Tags', module)
  .add('defaultTheme', () => (
    <section>
      <p>Only style</p>
      <div className={style.tags}>
        {
          tags.map(title => (
            <ThemeProvider theme={{ PLTag: defaultTheme }}>
              <Tag key={title}>{title}</Tag>
            </ThemeProvider>
          ))
        }
      </div>
    </section>
  ))
  .add('highContrastTheme', () => (
    <section>
      <p>Only style</p>
      <div className={style.tags}>
        {
          tags.map(title => (
            <ThemeProvider theme={{ PLTag: highContrastTheme }}>
              <Tag key={title}>{ title }</Tag>
            </ThemeProvider>
          ))
        }
      </div>
    </section>
  ))
