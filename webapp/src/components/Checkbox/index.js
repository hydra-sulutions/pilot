import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { themr } from 'react-css-themr'

const applyThemr = themr('PLCheckbox')

const Checkbox = ({
  theme,
  disabled,
  error,
  success,
  name,
  value,
  onChange,
  checked,
  label,
}) => {
  const containerClass = classnames(theme.container, {
    [theme.disabled]: disabled,
  })

  const secondaryTextClass = classnames(theme.secondaryText, {
    [theme.error]: error,
    [theme.success]: success,
  })

  return (
    <div className={containerClass}>
      <input
        type="checkbox"
        name={name}
        value={value}
        id={`${name}-${value}`}
        checked={checked}
        disabled={disabled}
        onChange={e => !disabled && onChange(e.target.value)}
      />
      <label
        htmlFor={`${name}-${value}`}
      >
        <i className={theme.iconCheck} />
        {label}
      </label>

      {(success || error) &&
        <p className={secondaryTextClass}>
          {success || error}
        </p>
      }
    </div>
  )
}

Checkbox.propTypes = {
  theme: PropTypes.shape({
    base: PropTypes.string,
    container: PropTypes.string,
  }).isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.string,
}

Checkbox.defaultProps = {
  disabled: false,
  error: '',
  success: '',
}

// export default Checkbox

export default applyThemr(Checkbox)
