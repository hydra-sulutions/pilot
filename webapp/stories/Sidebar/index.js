import React from 'react'
import { storiesOf } from '@storybook/react'

import Sidebar from '../../src/components/Sidebar'

const items = [
  {
    value: 'minha-conta',
    title: 'Minha conta',
    icon: 'account',
  },
  {
    value: 'transacoes',
    title: 'Transações',
    icon: 'trade',
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
