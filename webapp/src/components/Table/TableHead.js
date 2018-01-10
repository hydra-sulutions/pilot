import React, { Component } from 'react'
import {
  shape,
  string,
} from 'prop-types'
import { themr } from 'react-css-themr'
import IconLongArrowUp from 'react-icons/lib/fa/long-arrow-up'

import Checkbox from '../Checkbox'

const applyThemr = themr('UITable')

let checked = false

class TableHead extends Component {
  constructor (props) {
    super(props)

    checked = false
  }

  render () {
    const { theme } = this.props

    return (
      <thead className={theme.tableHead}>
        <tr>
          <th className={theme.check}>
            <Checkbox
              name="all"
              id="all"
              value="all"
              label=""
              onChange={() => null}
              checked={checked}
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
    )
  }
}

TableHead.propTypes = {
  theme: shape({
    tableHead: string,
  }),
}

TableHead.defaultProps = {
  theme: {},
}

export default applyThemr(TableHead)
