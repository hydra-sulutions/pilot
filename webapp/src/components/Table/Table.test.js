import React from 'react'
import { shallow } from 'enzyme'

import Table from './index'

describe('Table', () => {
  it('should mount', () => {
    shallow(
      <Table />
    )
  })
})
