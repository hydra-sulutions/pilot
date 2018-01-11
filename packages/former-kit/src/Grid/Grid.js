import React from 'react'
import classNames from 'classnames'
import ThemeConsumer from '../ThemeConsumer'
import {
  shape,
  string,
  node,
} from 'prop-types'

const consumeTheme = ThemeConsumer('UIGrid')

const classnames = ({ theme, className }) =>
  classNames(
    theme.grid,
    className
  )

const Grid = ({ theme, children, className }) => (
  <div className={classnames({ theme, className })}>
    {children}
  </div>
)

Grid.propTypes = {
  theme: shape({
    grid: string,
  }).isRequired,
  children: node,
  className: string,
}

Grid.defaultProps = {
  children: null,
  className: null,
}

export default consumeTheme(Grid)
