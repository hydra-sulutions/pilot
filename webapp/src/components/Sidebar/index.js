import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr'
import shortid from 'shortid'
import MdMenu from 'react-icons/lib/md/menu'
import cx from 'classnames'
import PerfectScrollBar from 'react-perfect-scrollbar'
import IconArrowDown from 'react-icons/lib/md/keyboard-arrow-down'
import SegmentedSwitch from '../SegmentedSwitch'

const applyThrmr = themr('UISidebar')

class Sidebar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: '',
      collapsed: false,
    }

    this.id = shortid.generate()

    this.renderList = this.renderList.bind(this)
    this.handleCollapsed = this.handleCollapsed.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
  }

  handleCollapsed () {
    this.setState({
      collapsed: !this.state.collapsed,
    })
  }

  handleSelection (value) {
    this.setState({
      selected: value,
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
            <div
              className={theme.text}
              role="button"
              onClick={() => this.handleSelection(item.value)}
              tabIndex="0"
            >
              <item.icon size={18} /> <span>{item.title} <IconArrowDown size={18} /></span>
            </div>
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
        <li>
          <div
            className={classes}
            role="button"
            onClick={() => this.handleSelection(item.value)}
            tabIndex="0"
          >
            <a className={theme.link}><item.icon size={18} /> <span>{item.title}</span></a>
          </div>
        </li>
      )
    })

    return list
  }

  render () {
    const {
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

        {!this.state.collapsed &&
          <div>
            <div className={theme.switchContainer}>
              <SegmentedSwitch
                items={['live', 'test']}
                selected={selectedEnvironment}
                name={`${this.id}-live-test`}
                onChange={onSwitchChange}
              />
            </div>
          </div>
        }

        {this.state.collapsed &&
          <div><p>{selectedEnvironment}</p></div>
        }

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
  theme: PropTypes.shape({
    a: PropTypes.string,
  }),
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

Sidebar.defaultProps = {
  theme: {},
}

export default applyThrmr(Sidebar)
