import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import MdVisibilityOff from 'react-icons/lib/md/visibility-off'
import MdVisibility from 'react-icons/lib/md/visibility'

import { pick } from 'ramda'

import style from './style.css'

class Input extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      displayPassword: false,
    }
  }

  renderPasswordVisibilityIcon () {
    const { value, type } = this.props

    if (value === '' || type !== 'password') {
      return null
    }

    if (this.state.displayPassword) {
      return (
        <MdVisibilityOff
          className={style.displayPasswordIcon}
          onClick={() => this.setState({ displayPassword: false })}
        />
      )
    }

    return (
      <MdVisibility
        className={style.displayPasswordIcon}
        onClick={() => this.setState({ displayPassword: true })}
      />
    )
  }

  render () {
    const {
      boxed,
      disabled,
      error,
      hint,
      icon,
      label,
      multiline,
      success,
      type,
      value,
      className,
      onChange,
      theme,
    } = this.props

    const inputContainer = classnames(style.inputContainer, {
      [theme.boxed]: boxed,
      [theme.multiline]: multiline,
      [theme.error]: error,
      [theme.success]: success,
    })

    const containerClasses = classnames(style.container, {
      [theme.active]: !disabled && value !== '',
      [theme.disabled]: !boxed && disabled,
    })

    const contentPresent = classnames({
      [theme.contentPresent]: value !== '',
    })

    const inputProps = pick(
      ['disabled', 'placeholder', 'value'],
      this.props
    )

    const inputType = type === 'text' || this.state.displayPassword
      ? 'text'
      : 'password'

    return (
      <div className={containerClasses}>
        {icon && !boxed &&
          <div className={style.icon}>{icon}</div>
        }
        <div className={style.boxContainer}>
          <div className={inputContainer}>
            {multiline
              ? (
                <textarea
                  rows="1"
                  className={className}
                  onChange={disabled ? null : onChange}
                  {...inputProps}
                />
              ) : (
                <input
                  id={name}
                  type={inputType}
                  className={className}
                  onChange={disabled ? null : onChange}
                  {...inputProps}
                />
              )
            }

            {this.renderPasswordVisibilityIcon()}

            <label
              htmlFor={name}
              className={contentPresent}
            >
              {label}
            </label>

            {multiline &&
              <div className={style.expander}>
                {value}
                <br />
              </div>
            }
          </div>
          {(hint || error || success) &&
            <p className={style.secondaryText}>
              {success || error || hint}
            </p>
          }
        </div>
      </div>
    )
  }
}

Input.propTypes = {
  theme: PropTypes.shape({
    input: PropTypes.string,
    icon: PropTypes.string,
    boxContainer: PropTypes.string,
    inputContainer: PropTypes.string,
    secondaryText: PropTypes.string,
    active: PropTypes.string,
    error: PropTypes.string,
    boxed: PropTypes.string,
    multiline: PropTypes.string,
    expander: PropTypes.string,
    contentPresent: PropTypes.string,
  }),
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  multiline: PropTypes.bool,
  type: PropTypes.oneOf(['text', 'password']),
  placeholder: PropTypes.string,
  boxed: PropTypes.bool,
  hint: PropTypes.string,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  success: PropTypes.string,
  icon: PropTypes.element,
  className: PropTypes.string,
}

Input.defaultProps = {
  type: 'text',
  boxed: false,
  placeholder: '',
  hint: '',
  disabled: false,
  error: '',
  success: '',
  multiline: false,
  icon: null,
  value: '',
  className: '',
}

export default Input
