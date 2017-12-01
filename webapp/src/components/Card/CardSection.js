import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import IconArrowDown from 'react-icons/lib/md/keyboard-arrow-down'
import { themr } from 'react-css-themr'

const applyTheme = themr('PLCardSection')

class CardSection extends Component {
  constructor (props) {
    super(props)

    this.cardTitle = this.cardTitle.bind(this)
    this.arrowUpDown = this.arrowUpDown.bind(this)
    this.renderHeader = this.renderHeader.bind(this)
  }

  cardTitle () {
    const { collapsedTitle, title, collapsed } = this.props
    return collapsed ? collapsedTitle : title
  }

  arrowUpDown () {
    const { collapsed, onTitleClick, theme } = this.props

    if (!onTitleClick) {
      return null
    }

    const arrowClasses = classNames(theme.arrow, {
      [theme.rotateArrowUp]: !collapsed,
    })

    return <IconArrowDown className={arrowClasses} />
  }

  renderHeader () {
    const { theme } = this.props
    return (
      <div className={theme.header}>
        <h2 className={theme.cardTitle}>
          {this.cardTitle()}
          {this.arrowUpDown()}
        </h2>

        {this.props.subTitle &&
          <p className={theme.cardSubTitle}>{this.props.subTitle}</p>
        }
      </div>
    )
  }

  render () {
    const {
      onTitleClick,
      collapsed,
      children,
      theme,
    } = this.props
    return (
      <div className={theme.container}>
        {onTitleClick
          ? (
            <a
              onClick={() => onTitleClick(collapsed)}
              role="button"
              tabIndex="0"
              className={theme.collapseButton}
            >
              {this.renderHeader()}
            </a>
          ) : (
            this.renderHeader()
          )
        }
        {!collapsed &&
          <div className={theme.sectionContent}>
            {children}
          </div>
        }
      </div>
    )
  }
}

CardSection.propTypes = {
  title: PropTypes.string.isRequired,
  collapsedTitle: PropTypes.string,
  collapsed: PropTypes.bool,
  children: PropTypes.node.isRequired,
  onTitleClick: PropTypes.func,
  subTitle: PropTypes.string,
  theme: PropTypes.shape({
    base: PropTypes.string,
  }).isRequired,
}

CardSection.defaultProps = {
  collapsedTitle: '',
  collapsed: false,
  onTitleClick: null,
  subTitle: '',
  base: 'light',
}

export default applyTheme(CardSection)
