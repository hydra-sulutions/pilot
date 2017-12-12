import React from 'react'
import { ThemeProvider } from 'react-css-themr'
import { storiesOf } from '@storybook/react'

import Legend from '../../src/components/Legend'

import defaultTheme from '../../src/components/Legend/defaultTheme/style.css'
import highContrastTheme from '../../src/components/Legend/highContrastTheme/style.css'

const hidingLabel = [
  {
    color: '#4ca9d7',
    text: 'Boleto pago com valor superior',
    acronym: 'BPVS',
    hideLabel: true,
  },
  {
    color: '#f16518',
    text: 'Chargeback',
    acronym: 'CB',
    hideLabel: true,
  },
  {
    color: '#41535b',
    text: 'Aguardando pagamento',
    hideLabel: true,
  },
]

const automaticAbbr = [
  {
    color: '#53be76',
    text: 'Paga',
  },
  {
    color: '#fcb20a',
    text: 'Autorizada',
  },
  {
    color: '#5b2886',
    text: 'Estornada',
  },
  {
    color: '#9d9fa0',
    text: 'Aguardando registro',
  },
  {
    color: '#e00403',
    text: 'Recusada',
  },
  {
    color: '#8c68d4',
    text: 'Estorno pendente',
  },
]

const manualAbbr = [
  {
    color: '#951d3c',
    text: 'Processando',
    acronym: 'PR',
  },
  {
    color: '#244d85',
    text: 'Boleto pago com valor inferior',
    acronym: 'BPVI',
  },
  {
    color: '#bf5316',
    text: 'Chargeback Reapresentado',
    acronym: 'CBR',
  },
]

const createLegends = (title, status) => (
  <div>
    {title}

    {status.map(({ color, text, outline, acronym, hideLabel }) => (
      <div key={text} style={{ margin: '10px' }}>
        <ThemeProvider theme={{ PLLegend: defaultTheme }}>
          <Legend
            color={color}
            outline={outline}
            acronym={acronym}
            hideLabel={hideLabel}
          >
            {text}
          </Legend>
        </ThemeProvider>
      </div>
    ))}
  </div>
)

const createLegendsWithHightContrast = (title, status) => (
  <div>
    {title}

    {status.map(({ color, text, outline, acronym, hideLabel }) => (
      <div key={text} style={{ margin: '10px' }}>
        <ThemeProvider theme={{ PLLegend: highContrastTheme }}>
          <Legend
            color={color}
            outline={outline}
            acronym={acronym}
            hideLabel={hideLabel}
          >
            {text}
          </Legend>
        </ThemeProvider>
      </div>
    ))}
  </div>
)

storiesOf('Legend', module)
  .add('defaultTheme', () => (
    <div>
      {createLegends('Without acronym prop', automaticAbbr)}
      {createLegends('With acronym prop', manualAbbr)}
      {createLegends('With hideLabel prop', hidingLabel)}
    </div>
  ))
  .add('highContrastTheme', () => (
    <div>
      {createLegendsWithHightContrast('Without acronym prop', automaticAbbr)}
      {createLegendsWithHightContrast('With acronym prop', manualAbbr)}
      {createLegendsWithHightContrast('With hideLabel prop', hidingLabel)}
    </div>
  ))
