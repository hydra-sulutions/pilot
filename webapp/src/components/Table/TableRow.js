import React, { Component } from 'react'
import {
  shape,
  string,
  oneOf,
  arrayOf,
  oneOfType,
  func,
} from 'prop-types'
import {
  path,
  has,
} from 'ramda'
import classNames from 'classnames'
import { themr } from 'react-css-themr'
import shortid from 'shortid'

import IconArrowDown from 'react-icons/lib/md/keyboard-arrow-down'

import Checkbox from '../Checkbox'

const applyThemr = themr('UITable')

const hasRenderer = has('renderer')

const accessColumnData = acessor => path(acessor)

const getColData = (column, data) => {
  const key = shortid()
  if (hasRenderer(column)) {
    return <td key={key}> {column.renderer(data)} </td>
  }
  const getColumnData = accessColumnData(column.acessor)
  const columnData = getColumnData(data)
  if (columnData) {
    return <td key={key}> {columnData} </td>
  }
  return <td key={key}> special </td>
}

const renderCells = (columns, data) =>
  columns.map(col => getColData(col, data))


class TableRow extends Component {
  constructor (props) {
    super(props)

    this.handleSelect = this.handleSelect.bind(this)
    this.handleExpand = this.handleExpand.bind(this)
  }

  handleExpand () {
    const { data, onExpand } = this.props
    onExpand(data)
  }

  handleSelect () {
    const { data, onSelect } = this.props
    onSelect(data)
  }

  render () {
    const {
      className,
      columns,
      data,
      striped,
      theme,
    } = this.props

    const tableRow = classNames(
      theme[striped],
      className
    )
    const checked = false
    return (
      <tr className={tableRow}>
        <td>
          <Checkbox
            name="1"
            id="1"
            value="1"
            label=""
            onChange={this.handleSelect}
            checked={checked}
          />
        </td>
        {
          renderCells(columns, data)
        }
        <td className={theme.open}>
          <div
            className={theme.arrow}
            onChange={this.handleExpand}
          >
            <IconArrowDown />
          </div>
        </td>
      </tr>
    )
  }
}

TableRow.propTypes = {
  theme: shape({
    even: string,
    odd: string,
    check: string,
    status: string,
    open: string,
  }),
  striped: oneOf(['even', 'odd']),
  className: string,
  columns: arrayOf(shape({
    title: string.isRequired,
    acessor: oneOfType([
      string,
      arrayOf(string),
    ]),
    renderer: func,
  })).isRequired,
  data: shape({}).isRequired,
  onSelect: func,
  onExpand: func,
}

TableRow.defaultProps = {
  theme: {},
  striped: 'even',
  className: '',
  onSelect: () => null,
  onExpand: () => null,
}

export default applyThemr(TableRow)
