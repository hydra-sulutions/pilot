import React, { Component } from 'react'
import {
  arrayOf,
  bool,
  func,
  number,
  oneOfType,
  shape,
  string,
} from 'prop-types'
import {
  append,
  contains,
  ifElse,
  without,
} from 'ramda'
import { themr } from 'react-css-themr'
import shortid from 'shortid'

import Legend from '../Legend'
import TableHead from './TableHead'
import TableRow from './TableRow'
import TableExpandedRow from './TableExpandedRow'

const applyThemr = themr('UITable')

/**
 * Table notes
 * simple, light weight table with:
 * customizable columns which accept icons/components in the cells
 * expansible lines
 * coloumn ordenation in the header cells
 * lines with breakable lines
 * selector for all lines and a genereal selector in the header
 * reorganizable columns
 * zebra lines
 * default visualization mode for falsy values
 *
 * @param {Object} theme - the object like css classes names for css modules
 * @param {Array} columns - columns structure and data accessor for each column
 * each column must have a identifier, an header/title and a renderer or and accessor
 * @param {Array} data - data which will be used to create the lines
 * @param {Array} selectItems - a list of selected items identifiers
 *
 * @param {Boolean} sorable
 * @param {Boolean} loading
 * @param {Boolean} selectalbe
 * @param {Boolean} expandable
 * @param {Number} columnsLimit - limit of showable columns except by the utility
 * columns like select and expand
 */

const hideLabel = true

const mock = {
  columns: [
    {
      title: 'Status',
      renderer: item => (
        <Legend
          color={item.status_color}
          acronym={item.status_acronym}
          hideLabel={hideLabel}
        >
          {item.status}
        </Legend>
      ),
    },
    { title: 'Id da transacao', acessor: ['id'] },
    { title: 'Data da transacao', acessor: ['date_created'] },
    { title: 'Cpf/Cnpj', acessor: ['document_number'] },
    { title: 'Forma de pagamento', acessor: ['payment_method'] },
    { title: 'Valor capturado', acessor: ['paid_amount'] },
    { title: 'Custo', acessor: ['cost'] },
  ],
  data: [
    {
      status: 'Boleto pago com valor inferior',
      status_acronym: 'BPVI',
      status_color: '#244d85',
      id: '2229597000',
      date_created: '23/09/2017 - 14:15h',
      document_number: '67.484.928/0001-60',
      payment_method: 'boleto',
      paid_amount: 'R$ 999.999.999,00',
      cost: 'R$ 100.000,00',
    },
    {
      status: 'Pago',
      status_acronym: 'P',
      status_color: '#57be76',
      id: '2229597000',
      date_created: '23/09/2017 - 14:15h',
      document_number: '67.484.928/0001-60',
      payment_method: 'boleto',
      paid_amount: 'R$ 999.999.999,00',
      cost: 'R$ 100.000,00',
    },
  ],
}

const toggleItem = item => ifElse(
  contains(item),
  without([item]),
  append(item)
)

const toggleRow = (rowId, rows) => {
  const toggle = toggleItem(rowId)
  return toggle(rows)
}


class Table extends Component {
  constructor (props) {
    super(props)
    const { expandedRows, selectedRows } = props
    this.state = {
      expandedRows,
      selectedRows,
    }

    this.renderRow = this.renderRow.bind(this)
    this.handleRowSelect = this.handleRowSelect.bind(this)
    this.handleRowExpand = this.handleRowExpand.bind(this)
  }

  handleRowSelect (rowId) {
    const rows = toggleRow(rowId, this.state.selectedRows)
    this.setState({
      selectedRows: rows,
    })
  }

  handleRowExpand (rowId) {
    const rows = toggleRow(rowId, this.state.expandedRows)
    this.setState({
      expandedRows: rows,
    })
  }

  renderRow (row, index) {
    const { expandedRows, selectedRows } = this.state
    const { selectable, expandable, columns } = this.props
    const isExpanded = contains(index, expandedRows)
    const isSelected = contains(index, selectedRows)
    const stripedClass = index % 2 === 0 ? 'even' : 'odd'

    const rowProps = {
      key: shortid(),
      data: row,
      columns,
      striped: stripedClass,
      selectable,
      expandable,
      expanded: isExpanded,
      selected: isSelected,
    }
    const newRow = <TableRow {...rowProps} />

    if (isExpanded) {
      const expanded = <TableExpandedRow striped={stripedClass} data={row} />

      return [
        newRow,
        expanded,
      ]
    }

    return newRow
  }

  render () {
    const {
      theme,
      rows,
      columns,
    } = this.props
    return (
      <table className={theme.table}>
        <TableHead columns={columns} />
        <tbody className={theme.tableBody}>
          {
            rows.map(this.renderRow)
          }
        </tbody>
      </table>
    )
  }
}

Table.propTypes = {
  theme: shape({
    table: string,
  }),
  columns: arrayOf(shape({
    title: string.isRequired,
    acessor: oneOfType([
      string,
      arrayOf(string),
    ]),
    renderer: func,
  })).isRequired,
  expandable: bool,
  rows: arrayOf(shape({})).isRequired,
  selectable: bool,
  selectedRows: arrayOf(number),
  expandedRows: arrayOf(number),
}

Table.defaultProps = {
  theme: {},
  columns: mock.columns,
  rows: mock.data,
  selectable: true,
  expandable: true,
  selectedRows: [0],
  expandedRows: [1],
}

export default applyThemr(Table)
