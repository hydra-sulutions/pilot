import React from 'react'
import { themr } from 'react-css-themr'
import PropTypes from 'prop-types'
import {
  Motion,
  spring,
} from 'react-motion'
import classnames from 'classnames'

const applyThemr = themr('PLLinearProgress')

const Linear = ({
  theme,
  percent,
  disabled,
}) => {
  const classNameFill = classnames(
    theme.fill,
    {
      [theme.fillEnabled]: !disabled,
      [theme.fillDisabled]: disabled,
    }
  )

  const classNameBack = classnames(
    theme.back,
    {
      [theme.backEnabled]: !disabled,
      [theme.backDisabled]: disabled,
    }
  )

  const classNameNumber = classnames(
    theme.number,
    {
      [theme.numberEnabled]: !disabled,
      [theme.numberDisabled]: disabled,
    }
  )

  return (
    <div className={theme.linear}>
      <Motion
        defaultStyle={{
          x: 0,
        }}
        style={{
          x: spring(percent),
        }}
      >
        {({ x }) => {
          const percentage = `${Math.round(x)}%`

          return (
            <div>
              <div className={classNameBack}>
                <div
                  className={classNameFill}
                  style={{
                    width: percentage,
                  }}
                />
              </div>
              <div
                className={classNameNumber}
                style={{
                  width: (x > 94) ? '100%' : `${x}%`,
                }}
              >
                <div
                  style={{
                    marginRight: (x > 94) ? '0' : '-1em',
                  }}
                  className={theme.innerNumber}
                >
                  {percentage}
                </div>
              </div>
            </div>
          )
        }}
      </Motion>
    </div>
  )
}

Linear.propTypes = {
  theme: PropTypes.shape({
    fill: PropTypes.string,
    fillEnabled: PropTypes.bool,
    fillDisabled: PropTypes.bool,
    back: PropTypes.string,
    backEnabled: PropTypes.bool,
    backDisabled: PropTypes.bool,
    number: PropTypes.string,
    numberEnabled: PropTypes.bool,
    numberDisabled: PropTypes.bool,
    linear: PropTypes.string,
    innerNumber: PropTypes.string,
  }).isRequired,
  percent: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
}

Linear.defaultProps = {
  disabled: false,
}

export default applyThemr(Linear)
