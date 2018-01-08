import React from 'react'

import { storiesOf } from '@storybook/react'

import Table from '../../src/components/Table'

import style from './style.css'

storiesOf('Table', module)
  .add('defaultTheme', () => (
    <div className={style.container}>
      <Table />
    </div>
  ))

