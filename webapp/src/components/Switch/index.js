import React from 'react'
import {
  bool,
  func,
  shape,
  string,
} from 'prop-types'

import classnames from 'classnames'
import { themr } from 'react-css-themr'

const applyThemr = themr('PLSwitch')

function Switch ({
  disabled,
  onChange,
  checked,
  theme,
}) {
  const className = classnames(
    theme.switch,
    {
      [theme.checked]: checked,
      [theme.disabled]: disabled,
    }
  )

  return (
    <div className={className}>
      <input
        checked={checked}
        type="checkbox"
        onChange={() => !disabled && onChange(!checked)}
      />
      <span>
        {checked ? 'on' : 'off' }
      </span>
    </div>
  )
}

Switch.propTypes = {
  theme: shape({
    switch: string,
    checked: string,
    disabled: string,
  }),
  disabled: bool,
  onChange: func.isRequired,
  checked: bool,
}

Switch.defaultProps = {
  theme: {},
  disabled: false,
  checked: false,
}

export default applyThemr(Switch)
