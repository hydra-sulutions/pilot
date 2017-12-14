import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { themr } from 'react-css-themr'

const applyThemr = themr('UIGrid')

const colClassNames = ({ theme, className, desk, tv, tablet, palm, alignEnd }) =>
  classNames(
    className,
    theme.col,
    theme[`col-desk-${desk}`],
    theme[`col-tv-${tv}`],
    theme[`col-tablet-${tablet}`],
    theme[`col-palm-${palm}`],
    {
      [theme.alignEnd]: alignEnd,
    }
  )

const rowClassNames = ({ theme, flex, stretch, className }) =>
  classNames(
    className,
    theme.row,
    {
      [theme.flex]: flex,
      [theme.stretch]: stretch,
    }
  )

const gridClassNames = ({ theme, className }) =>
  classNames(
    theme.grid,
    className
  )

const Grid = ({ theme, children, className }) => (
  <div className={gridClassNames({ theme, className })}>
    {children}
  </div>
)

const Row = ({ theme, children, flex, stretch, className }) => (
  <div className={rowClassNames({ theme, flex, stretch, className })}>
    {children}
  </div>
)

const Col = ({ theme, children, desk, tv, tablet, palm, alignEnd, className }) => (
  <div className={colClassNames({ theme, desk, tv, tablet, palm, alignEnd, className })}>
    {children}
  </div>
)

Grid.propTypes = {
  theme: PropTypes.shape({
    grid: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  className: PropTypes.string,
}

Grid.defaultProps = {
  children: null,
  className: null,
}

Row.propTypes = {
  theme: PropTypes.shape({
    row: PropTypes.string,
    flex: PropTypes.string,
    stretch: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  flex: PropTypes.bool,
  stretch: PropTypes.bool,
  className: PropTypes.string,
}

Row.defaultProps = {
  children: null,
  flex: false,
  stretch: false,
  className: null,
}

Col.propTypes = {
  theme: PropTypes.shape({
    col: PropTypes.string,
    desk: PropTypes.string,
    tv: PropTypes.string,
    tablet: PropTypes.string,
    palm: PropTypes.string,
    alignEnd: PropTypes.string,
  }).isRequired,
  children: PropTypes.node,
  desk: PropTypes.number,
  tv: PropTypes.number,
  tablet: PropTypes.number,
  palm: PropTypes.number,
  alignEnd: PropTypes.bool,
  className: PropTypes.string,
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

export default {
  Grid: applyThemr(Grid),
  Row: applyThemr(Row),
  Col: applyThemr(Col),
}
