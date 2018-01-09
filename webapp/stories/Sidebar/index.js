import React from 'react'
import { storiesOf } from '@storybook/react'
import MdEventNote from 'react-icons/lib/md/event-note'
import MdFreeBreakfast from 'react-icons/lib/md/free-breakfast'

import Sidebar from '../../src/components/Sidebar'

const items = [
  {
    value: 'minha-conta',
    title: 'Minha conta',
    icon: MdEventNote,
  },
  {
    value: 'transacoes',
    title: 'Transações',
    icon: MdFreeBreakfast,
    options: [
      {
        value: 'estornadas',
        title: 'Estornadas',
      },
      {
        value: 'pagas',
        title: 'Pagas',
      }
    ]
  },
]

const infos = {
  title: 'Nome da empresa',
  showMsg: 'Mostrar saldo',
  hideMsg: 'Ocultar saldo',
  data: [
    {
      title: 'Disponível',
      value: 'R$ 150000',
      actionTitle: 'Sacar',
      action: (a) => console.log(a),
    },
    {
      title: 'A receber',
      value: 'R$ 70000',
      actionTitle: 'Antecipar',
      action: (a) => console.log(a),
    }
  ]
}

class SidebarState extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selectedEnvironment: 'live',
    }

    this.handleEnvironment = this.handleEnvironment.bind(this)
  }

  handleEnvironment (env) {
    this.setState({
      selectedEnvironment: env,
    })
  }

  render () {
    return (
      <Sidebar
        logo="https://assets.pagar.me/site/general/logo-light-3812e7ea6b596bdcc8c041f0edc4ff15.png"
        title="Pagar.me"
        items={items}
        selected="transacoes.estornadas"
        onSwitchChange={this.handleEnvironment}
        selectedEnvironment={this.state.selectedEnvironment}
        infos={infos}
      />
    )
  }
}

storiesOf('Sidebar', module)
  .add('defaultTheme', () => (
    <div>
      <SidebarState />
    </div>
  ))
