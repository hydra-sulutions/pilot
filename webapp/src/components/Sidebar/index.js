/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr'
import shortid from 'shortid'
import MdMenu from 'react-icons/lib/md/menu'
import cx from 'classnames'
import PerfectScrollBar from 'react-perfect-scrollbar'
import MdEventNote from 'react-icons/lib/md/event-note'
import MdFreeBreakfast from 'react-icons/lib/md/free-breakfast'
import IconArrowDown from 'react-icons/lib/md/keyboard-arrow-down'
import SegmentedSwitch from '../SegmentedSwitch'

const applyThrmr = themr('UISidebar')

class Sidebar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: 'minha-conta',
      collapsed: false,
    }

    this.id = shortid.generate()

    this.renderList = this.renderList.bind(this)
    this.handleCollapsed = this.handleCollapsed.bind(this)
  }

  handleCollapsed () {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  renderList () {
    const {
      theme,
      items,
    } = this.props

    const list = items.map((item) => {
      const classes = cx(theme.item, {
        [theme.itemSelected]: item.value === this.state.selected,
      })

      if (item.options) {
        return (
          <li className={classes}>
            <p className={theme.text}>
              <item.icon size={18} /> <span>{item.title} <IconArrowDown size={18} /></span>
            </p>
            {(item.value === this.state.selected && !this.state.collapsed) &&
              <ul className={theme.options}>
                {item.options.map(opt => (
                  <li className={theme.option}><a className={theme.link}>{opt.title}</a></li>
                ))}
              </ul>
            }
          </li>
        )
      }

      return (
        <li className={classes}>
          <a className={theme.link}><item.icon size={18} /> <span>{item.title}</span></a>
        </li>
      )
    })

    return list
  }

  render () {
    const {
      items,
      theme,
      logo,
      title,
      selectedEnvironment,
      onSwitchChange,
    } = this.props

    const sidebarClasses = cx(theme.sidebar, {
      [theme.collapsed]: this.state.collapsed,
    })

    return (
      <div className={sidebarClasses}>
        <header className={theme.header}>
          <img src={logo} alt={title} width={101} />
          <button
            className={theme.menu}
            onClick={this.handleCollapsed}
          >
            <MdMenu size={25} />
          </button>
        </header>

        <div>
          <div className={theme.switchContainer}>
            <SegmentedSwitch
              items={['live', 'test']}
              selected={selectedEnvironment}
              name={`{this.id}-live-test`}
              onChange={onSwitchChange}
            />
          </div>
          <div>
          </div>
        </div>

        <nav>
          <PerfectScrollBar className={theme.items}>
            <ul>
              {this.renderList()}
            </ul>
          </PerfectScrollBar>
        </nav>
      </div>
    )
  }
}

Sidebar.propTypes = {
  theme: PropTypes.object,
  selected: PropTypes.string,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.element,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })),
  })).isRequired,
  onSwitchChange: PropTypes.func.isRequired,
  selectedEnvironment: PropTypes.string.isRequired,
}

export default applyThrmr(Sidebar)
