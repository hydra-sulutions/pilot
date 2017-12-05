import React from 'react'
import { themr } from 'react-css-themr'
import PropTypes from 'prop-types'

const applyTheme = themr('PLCranio')

const Cranio = ({ theme }) => (
  <div>
    <h1 className={theme.context}>Hello from Cranio</h1>
  </div>
)

Cranio.propTypes = {
  theme: PropTypes.shape({
    context: PropTypes.string,
  }).isRequired,
}

export default applyTheme(Cranio)

