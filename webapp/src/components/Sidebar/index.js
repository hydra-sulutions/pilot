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
    return (
      <div>
        <div>
        </div>

        <div>
        </div>

        <nav>
          <ul>
            <li><a>Ola que tal</a></li>
            <li><a>Hello friend</a></li>
            <li>
              <p>Hihihi</p>
              <ul>
                <li><a>Hihihihihihihihihihiuhjiujhj</a></li>
                  <li><a>Hi my friend</a></li>
              </ul>
            </li>
            <li><a>Hi</a></li>
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
  collapsed: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

Sidebar.defaultProps = {
  collapsed: false,
}

export default applyThrmr(Sidebar)
