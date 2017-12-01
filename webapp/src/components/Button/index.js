import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { themr } from 'react-css-themr'

import defaultTheme from './defaultTheme/index.css'

console.log(defaultTheme)

const applyThemr = themr('PLButton', defaultTheme)

function Button ({
  base,
  children,
  relevance,
  disabled,
  onClick,
  size,
  theme,
  type,
  fill,
}) {
  console.log(theme)
  const buttonClasses = classNames(
    theme.button,
    theme[fill],
    theme[`${base}-${fill}`],
    theme[`${base}-${relevance}`],
    theme[size]
  )

  return (
    <button
      disabled={disabled}
      className={buttonClasses}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  )
}

Button.propTypes = {
  theme: PropTypes.shape({
    base: PropTypes.string,
    button: PropTypes.string,
    relevance: PropTypes.string,
    disabled: PropTypes.string,
    size: PropTypes.string,
    fill: PropTypes.string,
  }),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
  fill: PropTypes.oneOf([
    'flat', 'gradient', 'outline', 'clean',
  ]),
  base: PropTypes.oneOf([
    'dark', 'light',
  ]),
  relevance: PropTypes.oneOf([
    'high', 'normal', 'low',
  ]),
  size: PropTypes.oneOf([
    'extra-small', 'small', 'default', 'large',
  ]),
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  disabled: PropTypes.bool,
}

Button.defaultProps = {
  theme: defaultTheme,
  fill: 'flat',
  base: 'light',
  relevance: 'normal',
  size: 'default',
  type: 'button',
  disabled: false,
  onClick: null,
}

export default applyThemr(Button)
