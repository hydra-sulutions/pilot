import React from 'react'
import {
  shape,
  string,
} from 'prop-types'
import { themr } from 'react-css-themr'
import classNames from 'classnames'

import Button from '../Button'

const applyThemr = themr('UITable')

const TableExpandedRow = ({
  theme,
  striped,
}) => (
  <tr className={classNames(theme.tableRow, theme[striped])}>
    <td colSpan="9">
      <div className={theme.merged}>
        <ul>
          <li>
            <span>Endereço</span>
            Rua Gomes de Carvalho, 1609 | São Paulo | São Paulo/SP
          </li>
          <li>
            <span>Bandeira</span>
            Mastercard
          </li>
          <li>
            <span>VALOR LÍQUIDO</span>
            R$ 999.999.989,00
          </li>
          <li>
            <span>Bandeira</span>
            Mastercard
          </li>
          <li>
            <span>VALOR LÍQUIDO</span>
            R$ 999.999.989,00
          </li>
          <li>
            <span>Bandeira</span>
            Mastercard
          </li>
          <li>
            <span>Bandeira</span>
            Mastercard
          </li>
          <li>
            <span>Bandeira</span>
            Mastercard
          </li>
        </ul>
        <Button
          fill="outline"
          relevance="normal"
        >
          VER DETALHES
        </Button>
      </div>
    </td>
  </tr>
)

TableExpandedRow.propTypes = {
  theme: shape({
    tableRow: string,
    merged: string,
    even: string,
    odd: string,
  }),
  striped: string,
}

TableExpandedRow.defaultProps = {
  theme: {},
  striped: '',
}

export default applyThemr(TableExpandedRow)
