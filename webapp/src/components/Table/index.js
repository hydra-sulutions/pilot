import React from 'react'
import {
  shape,
  string,
} from 'prop-types'
import { themr } from 'react-css-themr'

import IconArrowDown from 'react-icons/lib/md/keyboard-arrow-down'
import IconLongArrowUp from 'react-icons/lib/fa/long-arrow-up'
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
        <th className={theme.status}>
          <span>
            Status
          </span>
          <span>
            <IconLongArrowUp />
          </span>
        </th>
        <th>
          <div className={theme.title}>
            <span>
              ID da transação
            </span>
            <span>
              <IconLongArrowUp />
            </span>
          </div>
        </th>
        <th>
          <div className={theme.title}>
            <span>
            Data da transação
            </span>
            <span>
              <IconLongArrowUp />
            </span>
          </div>
        </th>
        <th>
          <div className={theme.title}>
            <span>
            CPF / CNPJ
            </span>
            <span>
              <IconLongArrowUp />
            </span>
          </div>
        </th>
        <th>
          <div className={theme.title}>
            <span>
            Forma de pagamento
            </span>
            <span>
              <IconLongArrowUp />
            </span>
          </div>
        </th>
        <th>
          <div className={theme.title}>
            <span>
            Valor capturado
            </span>
            <span>
              <IconLongArrowUp />
            </span>
          </div>
        </th>
        <th className={theme.active}>
          <div className={theme.title}>
            <span>
            Custo
            </span>
            <span>
              <IconLongArrowUp />
            </span>
          </div>
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
        <td className={theme.status}>
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
          R$ 100.000,00
        </td>
        <td className={theme.open}>
          <div className={theme.arrow}>
            <IconArrowDown />
          </div>
        </td>
      </tr>
      <tr>
        <td className={theme.check}>
          <Checkbox
            name="2"
            id="2"
            value="2"
            label=""
            onChange={() => null}
          />
        </td>
        <td className={theme.status}>
          <Legend
            color="#57be76"
            acronym="P"
            hideLabel={hideLabel}
          >
            Pago
          </Legend>
        </td>
        <td>
          3229597000
        </td>
        <td>
          24/09/2017 - 14:15h
        </td>
        <td>
          354.946.68-52
        </td>
        <td>
          Cartão de crédito Estrangeiro
        </td>
        <td>
          R$ 899.999.999,00
        </td>
        <td>
          R$ 12.000,00
        </td>
        <td className={theme.open}>
          <div className={theme.arrow}>
            <IconArrowDown />
          </div>
        </td>
      </tr>
      <tr>
        <td className={theme.check}>
          <Checkbox
            name="3"
            id="3"
            value="3"
            label=""
            onChange={() => null}
          />
        </td>
        <td className={theme.status}>
          <Legend
            color="#f4b23e"
            acronym="A"
            hideLabel={hideLabel}
          >
            Autorizada
          </Legend>
        </td>
        <td>
          4330072092
        </td>
        <td>
          25/09/2017 - 14:15h
        </td>
        <td>
          67.484.928/0001-60
        </td>
        <td>
          Cartão de crédito Estrangeiro
        </td>
        <td>
          R$ 799.999.999,00
        </td>
        <td>
          R$ 13.000,00
        </td>
        <td className={theme.open}>
          <div className={theme.arrow}>
            <IconArrowDown />
          </div>
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
      <tr>
        <td className={theme.check}>
          <Checkbox
            name="4"
            id="4"
            value="4"
            label=""
            onChange={() => null}
          />
        </td>
        <td className={theme.status}>
          <Legend
            color="#951e3c"
            acronym="P"
            hideLabel={hideLabel}
          >
            Processando
          </Legend>
        </td>
        <td>
          7820847072
        </td>
        <td className={theme.empty} />
        <td className={theme.empty} />
        <td className={theme.empty} />
        <td className={theme.empty} />
        <td>
          R$ 16.000,00
        </td>
        <td className={theme.open}>
          <div className={theme.arrow}>
            <IconArrowDown />
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
