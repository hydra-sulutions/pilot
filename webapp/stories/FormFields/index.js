import React from 'react'

import { storiesOf } from '@storybook/react'

import {
  CheckboxGroupExamplesWithDefaultTheme,
  CheckboxGroupExamplesWithHightContrastTheme,
} from './examples/CheckboxGroup'
import DropdownExamples from './examples/Dropdown'
import InputExamples from './examples/Input'
import RadioGroupExamples from './examples/RadioGroup'

import style from './style.css'

storiesOf('Forms', module)
  .add('Inputs', () => (
    <div className={style.container}>
      <InputExamples />
    </div>
  ))
  .add('Dropdown', () => (
    <div className={style.container}>
      <DropdownExamples />
    </div>
  ))
  .add('Checkbox Group defaultTheme', () => (
    <div className={style.container}>
      <CheckboxGroupExamplesWithDefaultTheme />
    </div>
  ))
  .add('Checkbox Group hightContrastTheme', () => (
    <div className={style.container}>
      <CheckboxGroupExamplesWithHightContrastTheme />
    </div>
  ))
  .add('Radio Group', () => (
    <div className={style.container}>
      <RadioGroupExamples />
    </div>
  ))
