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

storiesOf('Sidebar', module)
  .add('defaultTheme', () => (
    <div>
      <Sidebar
        logo="https://assets.pagar.me/site/general/logo-light-3812e7ea6b596bdcc8c041f0edc4ff15.png"
        title="Pagar.me"
        collapsed
        items={items}
        selected="transacoes.estornadas"
        onClick={() => {}}
      />
    </div>
  ))
