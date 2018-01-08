import React from 'react'
import {
  shape,
  string,
} from 'prop-types'
import { themr } from 'react-css-themr'

const applyThemr = themr('UITable')

const Table = ({
  theme,
}) => (
  <table className={theme.table}>
    <tr />
  </table>
)

Table.propTypes = {
  theme: shape({
    table: string,
  }).isRequired,
}

export default applyThemr(Table)
