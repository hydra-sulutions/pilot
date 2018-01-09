import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr'
import shortid from 'shortid'
import MdMenu from 'react-icons/lib/md/menu'
import cx from 'classnames'
import PerfectScrollBar from 'react-perfect-scrollbar'
import IconArrowUp from 'react-icons/lib/md/keyboard-arrow-up'
import IconArrowDown from 'react-icons/lib/md/keyboard-arrow-down'
import SegmentedSwitch from '../SegmentedSwitch'
import Tag from '../Tag'
import Button from '../Button'

const applyThrmr = themr('UISidebar')

class Sidebar extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      selected: '',
      collapsed: false,
      showInfos: false,
    }

    this.id = shortid.generate()

    this.renderList = this.renderList.bind(this)
    this.handleCollapsed = this.handleCollapsed.bind(this)
    this.handleSelection = this.handleSelection.bind(this)
    this.handleInfosClick = this.handleInfosClick.bind(this)
    this.renderInfos = this.renderInfos.bind(this)
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

  handleInfosClick () {
    this.setState({
      showInfos: !this.state.showInfos,
    })
  }

  renderInfos () {
    const {
      infos,
      theme,
    } = this.props

    return (
      <div className={theme.info}>
        <p className={theme.title}>{infos.title}</p>
        <div
          className={theme.toggle}
          onClick={this.handleInfosClick}
          role="button"
          tabIndex="0"
        >
          {
            this.state.showInfos
              ? <p>{ infos.hideMsg } <IconArrowUp /></p>
              : <p>{ infos.showMsg } <IconArrowDown /></p>
          }
        </div>

        {this.state.showInfos &&
          <div>
            <ul>
              {infos.data.map(info => (
                <li>
                  <p>{info.title}</p>
                  <p>{info.value}</p>
                  <Button
                    onClick={info.action}
                  >
                    {info.actionTitle}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
        }
      </div>
    )
  }

  renderList () {
    const {
      theme,
      items,
    } = this.props

    return items.map((item) => {
      const classes = cx(theme.item, {
        [theme.itemSelected]: item.value === this.state.selected,
      })

      if (item.options) {
        return (
          <li
            key={`${this.id}-${item.value}`}
            className={classes}
          >
            <div
              className={theme.text}
              role="button"
              onClick={() => this.handleSelection(item.value)}
              tabIndex="0"
            >
              <item.icon size={this.state.collapsed ? 25 : 18} />

              <span>
                {item.title}
                {
                  this.state.selected === item.value
                    ? <IconArrowUp size={18} />
                    : <IconArrowDown size={18} />
                }

              </span>
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
        <li key={`${this.id}-${item.value}`}>
          <div
            className={classes}
            role="button"
            onClick={() => this.handleSelection(item.value)}
            tabIndex="0"
          >
            <a className={theme.link}>
              <item.icon size={this.state.collapsed ? 25 : 18} />
              <span>{item.title}</span>
            </a>
          </div>
        </li>
      )
    })
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
            {this.renderInfos()}
          </div>
        }

        {this.state.collapsed &&
          <div className={theme.selectedEnvironment}>
            <Tag key={selectedEnvironment}>{selectedEnvironment}</Tag>
          </div>
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
    items: PropTypes.string,
    item: PropTypes.string,
    itemSelected: PropTypes.string,
    text: PropTypes.string,
    option: PropTypes.string,
    options: PropTypes.string,
    link: PropTypes.string,
    sidebar: PropTypes.string,
    collapsed: PropTypes.string,
    header: PropTypes.string,
    menu: PropTypes.string,
    switchContainer: PropTypes.string,
    selectedEnvironment: PropTypes.string,
  }),
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    icon: PropTypes.func,
    options: PropTypes.arrayOf(PropTypes.shape({
      value: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })),
  })).isRequired,
  onSwitchChange: PropTypes.func.isRequired,
  selectedEnvironment: PropTypes.string.isRequired,
  infos: PropTypes.shape({
    title: PropTypes.string,
    showMsg: PropTypes.string,
    hideMsg: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string,
      value: PropTypes.string,
      actionTitle: PropTypes.string,
      action: PropTypes.func,
    })),
  }),
}

Sidebar.defaultProps = {
  theme: {},
  infos: {},
}

export default applyThrmr(Sidebar)
