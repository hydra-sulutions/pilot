import React, { Component } from 'react'
import {
  node,
  bool,
  func,
} from 'prop-types'

import {
  ap,
  assoc,
  // assocPath,
  defaultTo,
  is,
  isNil,
  lensPath,
  map,
  mergeAll,
  partial,
  partialRight,
  pipe,
  reduce,
  reject,
  set,
  view,
  when,
} from 'ramda'


const mergeRecursive = pairs => pipe(
  mergeAll,
  map(when(is(Array), mergeRecursive))
)(pairs)

const defaultToEmptyString = defaultTo('')

export class Form extends Component {
  constructor (props) {
    super(props)

    this.state = {
      errors: {},
      values: {},
    }

    this.cloneTree = this.cloneTree.bind(this)
    this.validateTree = this.validateTree.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (path, validate, event) {
    const lens = lensPath(path)

    const values = set(lens, event.target.value, this.state.values)

    if (!validate) {
      this.setState({ values })
      return
    }

    if (validate.constructor === Array) {
      const validationErrors = reject(isNil, ap(validate, [view(lens, values)]))

      if (validationErrors.length > 0) {
        const validation = validationErrors[0]
        const errors = set(lens, validation, this.state.errors)

        this.setState({ errors, values })
        return
      }

      const errors = set(lens, null, this.state.errors)

      this.setState({ values, errors })
      return
    }

    const validation = validate(
      defaultToEmptyString(view(lens, values))
    )

    const errors = set(lens, validation, this.state.errors)

    this.setState({ errors, values })
  }

  cloneTree (element, index, parentPath = []) {
    if (typeof element === 'string') {
      return element
    }

    if (element.props && element.props.children) {
      const path = element.props.path
        ? [element.props.path]
        : []

      return React.cloneElement(element, {
        fieldset: true,
        children: React.Children.map(
          element.props.children,
          partialRight(this.cloneTree, [[...parentPath, ...path]])
        ),
      })
    }

    if (element.props.path) {
      const path = [...parentPath, element.props.path]
      const lens = lensPath(path)

      return React.cloneElement(element, {
        error: view(lens, this.state.errors),
        value: view(lens, this.state.values),
        onChange: partial(
          this.handleChange,
          [path, element.props.validate]
        ),
      })
    }

    return element
  }

  validateTree (errors, element, parentPath = []) {
    if (typeof element === 'string') {
      return errors
    }

    if (!element.props) {
      return errors
    }

    if (is(Array, element.props.children)) {
      const { children } = element.props
      const path = element.props.path
        ? [...parentPath, element.props.path]
        : parentPath

      const validated = reduce(
        partialRight(this.validateTree, [path]),
        {},
        children
      )

      if (path.length > 0) {
        return assoc(
          element.props.path,
          validated,
          errors
        )
      }

      return validated
    }

    if (element.props.path && element.props.validate) {
      const { validate } = element.props
      const path = [...parentPath, element.props.path]
      const lens = lensPath(path)
      const value = defaultTo('', view(lens, this.state.values))

      if (validate.constructor === Array) {
        const validationErrors = reject(isNil, ap(validate, [value]))

        if (validationErrors.length > 0) {
          const error = validationErrors[0]

          return assoc(
            element.props.path,
            error,
            errors
          )
        }

        return errors
      }

      const validationError = validate(value)

      if (!validationError) {
        return errors
      }

      return assoc(
        element.props.path,
        validationError,
        errors
      )
    }

    return errors
  }

  handleSubmit (event) {
    event.preventDefault()
    event.stopPropagation()

    const errors = this.validateTree(
      this.state.errors,
      this
    )

    this.setState({ errors })

    this.props.onSubmit(this.state.values)
  }

  render () {
    if (this.props.fieldset) {
      return (
        <fieldset style={{ border: 0, paddingRight: 0 }}>
          {this.props.children}
        </fieldset>
      )
    }

    return (
      <form onSubmit={this.handleSubmit}>
        {React.Children.map(
          this.props.children,
          this.cloneTree
        )}
      </form>
    )
  }
}

export const Fieldset = ({ children }) => (
  <fieldset>
    {children}
  </fieldset>
)

Fieldset.propTypes = {
  children: node,
}

Fieldset.defaultProps = {
  children: null,
}

Form.propTypes = {
  children: node,
  fieldset: bool,
  onSubmit: func,
}

Form.defaultProps = {
  children: null,
  fieldset: false,
  onSubmit: () => undefined,
}
