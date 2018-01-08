import React from 'react'

import { storiesOf } from '@storybook/react'

import Table from '../../src/components/Table'

storiesOf('Table', module)
  .add('defaultTheme', () => (
    <div>
      <Table />
    </div>
  ))

