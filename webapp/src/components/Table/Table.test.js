import React from 'react'
import { shallow } from 'enzyme'

import Table from './index'

describe('Table', () => {
  it('should mount', () => {
    shallow(
      <Table />
    )
  })

  describe('Static cases', () => {
    it('should have a cursor pointer in all clickable items', () => {

    })

    describe('Columns', () => {
      it('should render columns', () => {

      })

      it('should render the a column with a correct renderer', () => {

      })

      it('should render the a column with a correct accessor', () => {

      })

      it('should render the a column with a correct title', () => {

      })

      it('should have a collumn limit', () => {

      })
    })

    describe('Rows', () => {
      it('should render rows', () => {

      })

      it('should render the a row with correct data', () => {

      })

      it('should render the a row with a component cell', () => {

      })

      it('should render zebra rows', () => {

      })

      it('should render falsy cells with a dash ', () => {

      })
    })
  })

  describe('Behaviour cases', () => {
    describe('Columns', () => {
      it('should call a sort callback when a header column is clicked', () => {

      })

      it('should call a select all callback when the header select column is checked', () => {

      })

      it('should throw the surplus columns in the expansible space', () => {

      })
    })

    describe('Rows', () => {
      it('should call a expand function when cilcked', () => {

      })

      it('should collapse an expanded line when cilcked', () => {

      })

      it('should call a callback for the button inside the expansible data', () => {

      })

      it('should call a select function callback when the select column is checked', () => {

      })

      it('should create an outline when is in focus or hover', () => {

      })
    })
  })
})
