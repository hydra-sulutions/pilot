import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr'

const applyThemr = themr('PLTag')

const Tag = ({
  theme,
  children,
}) => (
  <span className={theme.tag}>
    {children}
  </span>
)

Tag.propTypes = {
  theme: PropTypes.shape({
    tag: PropTypes.string,
  }).isRequired,
  children: PropTypes.string.isRequired,
}

export default applyThemr(Tag)
