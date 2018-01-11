import React from 'react'
import classNames from 'classnames'
import ThemeConsumer from '../ThemeConsumer'
import {
  shape,
  string,
  node,
  number,
  bool,
} from 'prop-types'

const consumeTheme = ThemeConsumer('UIGrid')

const classnames = ({ theme, className, desk, tv, tablet, palm, alignEnd }) =>
  classNames(
    className,
    theme.col,
    theme[`desk${desk}`],
    theme[`tv${tv}`],
    theme[`tablet${tablet}`],
    theme[`palm${palm}`],
    {
      [theme.alignEnd]: alignEnd,
    }
  )

const Col = ({
  theme,
  children,
  desk,
  tv,
  tablet,
  palm,
  alignEnd,
  className,
}) => (
  <div className={classnames({
    theme,
    desk,
    tv,
    tablet,
    palm,
    alignEnd,
    className,
  })}
  >
    {children}
  </div>
)

Col.propTypes = {
  theme: shape({
    col: string,
    desk: string,
    tv: string,
    tablet: string,
    palm: string,
    alignEnd: string,
  }).isRequired,
  children: node,
  desk: number,
  tv: number,
  tablet: number,
  palm: number,
  alignEnd: bool,
  className: string,
}

Col.defaultProps = {
  children: null,
  desk: null,
  tv: null,
  tablet: null,
  palm: null,
  alignEnd: false,
  className: null,
}

export default consumeTheme(Col)
