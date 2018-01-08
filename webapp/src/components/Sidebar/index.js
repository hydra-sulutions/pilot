/* eslint-disable */
import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr'
import shortid from 'shortid'
import MdMenu from 'react-icons/lib/md/menu'

import SegmentedSwitch from '../SegmentedSwitch'

const applyThrmr = themr('UISidebar')

class Sidebar extends React.Component {
  constructor () {
    super()

    this.id = shortid.generate()
  }

  render () {
    const {
      theme,
      logo,
      title,
      selectedEnvironment,
      onSwitchChange,
    } = this.props

    return (
      <div className={theme.sidebar}>
        <header className={theme.header}>
          <img src={logo} alt={title} width={101} />
          <button className={theme.menu}>
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

        <nav className={theme.items}>
          <ul>
            <li className={theme.item}><a className={theme.link}>Ola que tal</a></li>
            <li className={theme.item}><a className={theme.link}>Hello friend</a></li>
            <li>
              <p className={theme.text}>Hihihi</p>
              <ul className={theme.options}>
                <li className={theme.option}><a className={theme.link}>Hihihihihihihihihihiuhjiujhj</a></li>
                <li className={theme.option}><a className={theme.link}>Hi my friend</a></li>
              </ul>
            </li>
            <li className={theme.item}><a className={theme.link}>Hi</a></li>
          </ul>
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
