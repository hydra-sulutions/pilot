import React from 'react'
import {
  arrayOf,
  string,
  func,
  shape,
} from 'prop-types'

const ContextSwitch = ({
  items,
  selected,
  onChange,
  name,
  theme,
}) => (
  <div className={theme.contextSwitch}>
    {items.map((item, index) => (
      <label
        key={`context-switch-${name}-label-${item}`}
        className={theme.item}
        htmlFor={`context-switch-${name}-input-${item}`}
      >
        <input
          id={`context-switch-${name}-input-${item}`}
          name={`context-switch-${name}-input`}
          value={item}
          type="radio"
          checked={selected === item}
          onChange={() => onChange(item, index)}
        />

        <span className={theme.label}>{item}</span>
      </label>
    ))}
  </div>
)

ContextSwitch.propTypes = {
  theme: shape({
    contextSwitch: string,
    item: string,
    label: string,
  }),
  items: arrayOf(string).isRequired,
  selected: string.isRequired,
  onChange: func.isRequired,
  name: string.isRequired,
}

ContextSwitch.defaultProps = {
  selected: '',
}

export default ContextSwitch
