import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import {
  ifElse,
  is,
  always,
  merge,
} from 'ramda'
import { themr } from 'react-css-themr'

import CardSection from './CardSection'

const applyDrRey = themr('PLCard')

export const Card = ({
  className,
  children,
  theme,
}) => {
  const cardClasses = classNames(
    theme.card,
    className
  )
  return (
    <div className={cardClasses}>
      {children}
    </div>
  )
}

export const CardTitle = ({
  title,
  icon,
  className,
  children,
  onClick,
  theme,
}) => {
  const cardTitleTheme = classNames(
    theme.title,
    className
  )
  const titleContent = (
    <div className={cardTitleTheme}>
      {icon}
      <h3>{title}</h3>
      {children}
    </div>
  )

  const cardTitleClasses = classNames(theme.titlePadding, {
    [theme.cursor]: onClick,
  })

  const defaultProps = {
    className: cardTitleClasses,
  }

  const isInteractiveProps = {
    role: 'button',
    tabIndex: '0',
    onClick,
    onKeyUp: event => event.keyCode === 32 && onClick(),
  }

  const getProps = ifElse(
    is(Function),
    () => merge(defaultProps, isInteractiveProps),
    always(defaultProps)
  )

  return (
    <div
      {...getProps(onClick)}
    >
      {titleContent}
    </div>
  )
}

export const CardContent = ({
  className,
  children,
  theme,
}) => {
  const cardContentClass = classNames(
    theme.content,
    className
  )
  return (
    <div className={cardContentClass}>
      {children}
    </div>
  )
}

export const CardGraphic = ({ className, children, theme }) => (
  <div className={classNames(className, theme.graphic)}>
    {children}
  </div>
)

export const CardActions = ({ className, children, theme }) => (
  <div className={classNames(className, theme.actions)}>
    {children}
  </div>
)

const baseProps = {
  theme: PropTypes.shape({
    base: PropTypes.string,
  }).isRequired,
  base: PropTypes.oneOf([
    'dark', 'light',
  ]),
}

const baseDafaultProps = {
  base: 'light',
}

Card.propTypes = {
  ...baseProps,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

Card.defaultProps = {
  ...baseDafaultProps,
  className: null,
}

CardTitle.propTypes = {
  ...baseProps,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
  className: PropTypes.string,
  children: PropTypes.node,
  onClick: PropTypes.func,
}

CardTitle.defaultProps = {
  ...baseDafaultProps,
  icon: null,
  className: null,
  children: null,
  onClick: null,
}

CardContent.propTypes = {
  ...baseProps,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

CardContent.defaultProps = {
  ...baseDafaultProps,
  className: null,
}

CardGraphic.propTypes = {
  ...baseProps,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

CardGraphic.defaultProps = {
  ...baseDafaultProps,
  className: null,
}

CardActions.propTypes = {
  ...baseProps,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
}

CardActions.defaultProps = {
  ...baseDafaultProps,
  className: null,
}

export default {
  Card: applyDrRey(Card),
  CardContent: applyDrRey(CardContent),
  CardGraphic: applyDrRey(CardGraphic),
  CardTitle: applyDrRey(CardTitle),
  CardActions: applyDrRey(CardActions),
  CardSection,
}
