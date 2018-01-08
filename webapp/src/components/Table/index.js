import React from 'react'

import { themr } from 'react-css-themr'

const applyThemr = themr('UITable')

const Table = () => (
  <table>
    <tr />
  </table>
)

export default applyThemr(Table)
