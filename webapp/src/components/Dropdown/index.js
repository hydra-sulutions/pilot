import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down'

import { themr } from 'react-css-themr'

import {
  propEq,
  pipe,
  find,
  prop,
  defaultTo,
} from 'ramda'

const applyThemr = themr('UIDropdown')

class Dropdown extends React.Component {
  constructor (props) {
    super(props)

    this.handleChange = this.handleChange.bind(this)
    this.selectedName = this.selectedName.bind(this)
  }

  handleChange (event) {
    const { disabled, onChange } = this.props

    if (!disabled) {
      onChange(event.target.value)
    }
  }

  selectedName () {
    const {
      options,
      value,
    } = this.props

    const selected = pipe(
      find(propEq('value', value)),
      defaultTo({}),
      prop('name'),
      defaultTo(this.props.title || 'Selecione')
    )

    return selected(options)
  }

  renderOptions () {
    return this.props.options.map(({ value, name }) => {
      const optionClasses = classNames(style.option, {
        [style.active]: this.props.value === value,
      })

      return (
        <option
          key={value}
          className={optionClasses}
          value={value}
        >
          {name}
        </option>
      )
    })
  }

  render () {
    const {
      disabled,
      error,
      label,
      name,
      success,
      title,
    }

    const rootClasses = classNames(
      style.dropdown,
      {
        [style.disabled]: disabled,
        [style.error]: error,
        [style.success]: success,
      }
    )

    return (
      <div className={rootClasses}>
        <div className={style.buttonGroup}>
          <label
            htmlFor={name}
            className={style.label}
          >
            {label}
          </label>

          <MdArrowDropDown
            className={style.arrow}
            color={disabled ? '#d4d4d4' : '#000'}
          />

          <div className={style.input}>
            {this.selectedName() || title}

            <select
              onChange={this.handleChange}
              disabled={disabled}
            >
              {title &&
                <option
                  disabled
                  className={classNames(style.option, style.title)}
                >
                  {title}
                </option>
              }
              {this.renderOptions()}
            </select>
          </div>

          {(success || error) &&
            <p className={style.secondaryText}>
              {success || error}
            </p>
          }
        </div>
      </div>
    )
  }
}

Dropdown.propTypes = {
  theme: PropTypes.shape({
    arrow: PropTypes.string,
    buttonGroup: PropTypes.string,
    disabled: PropTypes.string,
    dropdown: PropTypes.string,
    error: PropTypes.string,
    input: PropTypes.string,
    label: PropTypes.string,
    secondaryText: PropTypes.string,
    success: PropTypes.string,
    title: PropTypes.string,
  }),
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string,
      name: PropTypes.string,
    })
  ).isRequired,
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  title: PropTypes.string,
  error: PropTypes.string,
  success: PropTypes.string,
}

Dropdown.defaultProps = {
  theme: {},
  value: '',
  disabled: false,
  title: '',
  error: '',
  success: '',
}

export default applyThemr(Dropdown)
