import React from 'react'
import {
  shape,
  string,
} from 'prop-types'
import { themr } from 'react-css-themr'

import Checkbox from '../Checkbox'
import Legend from '../Legend'

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

const Table = ({
  theme,
}) => (
  <table className={theme.table}>
    <thead className={theme.tableHead}>
      <tr>
        <th className={theme.check}>
          <Checkbox
            name="all"
            id="all"
            value="all"
            label=""
            onChange={() => null}
          />
        </th>
        <th>
          Status
        </th>
        <th>
          ID da transação
        </th>
        <th>
          Data da transação
        </th>
        <th>
          CPF / CNPJ
        </th>
        <th>
          Forma de pagamento
        </th>
        <th>
          Valor capturado
        </th>
        <th>
          Custo
        </th>
        <th className={theme.open} />
      </tr>
    </thead>
    <tbody className={theme.tableBody}>
      <tr>
        <td className={theme.check}>
          <Checkbox
            name="1"
            id="1"
            value="1"
            label=""
            onChange={() => null}
          />
        </td>
        <td>
          <Legend
            color="#244d85"
            acronym="BPVI"
            hideLabel={hideLabel}
          >
            Boleto pago com valor inferior
          </Legend>
        </td>
        <td>
          2229597000
        </td>
        <td>
          23/09/2017 - 14:15h
        </td>
        <td>
          67.484.928/0001-60
        </td>
        <td>
          Cartão de crédito Estrangeiro
        </td>
        <td>
          R$ 999.999.999,00
        </td>
        <td>
          R$ 999.999.999,00
        </td>
        <td className={theme.open}>
          <i />
        </td>
      </tr>
      <tr>
        <td colSpan="9">
          <div className={theme.merged}>
            <div>
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
              </ul>
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
)

Table.propTypes = {
  theme: shape({
    table: string,
  }).isRequired,
}

export default applyThemr(Table)
