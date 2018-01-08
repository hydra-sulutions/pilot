import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr'
import shortid from 'shortid'

const applyThrmr = themr('UISidebar')

class Sidebar extends React.Component {
  constructor () {
    super()

    this.id = shortid()
  }

  render () {
    return (

    )
  }
}

Sidebar.propTypes = {
  theme: PropTypes.object,
  selected: PropTypes.string,
  title: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  items: PropTypes.array.isRequired,
  collapsed: PropTypes.bool,
  onClick: PropTypes.func.isRequired
}

export default applyThrmr(Sidebar)
