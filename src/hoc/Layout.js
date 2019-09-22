import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Toolbar from '../components/Navigation/Toolbar'
import SideDrawer from '../components/Navigation/SideDrawer'
import Auxiliary from './Auxiliary'

const Content = styled.main`
  margin-top: 72px;
`

class Layout extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      showSideDrawer: false
    }
    this.sideDrawerClosedHandler = this.sideDrawerClosedHandler.bind(this)
    this.sideDrawerToggleHandler = this.sideDrawerToggleHandler.bind(this)
  }

  sideDrawerClosedHandler () {
    this.setState({ showSideDrawer: false })
  }

  sideDrawerToggleHandler () {
    this.setState((prevState) => ({
      showSideDrawer: !prevState.showSideDrawer
    }))
  }

  render () {
    return (
      <Auxiliary>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <Content>{this.props.children}</Content>
      </Auxiliary>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

Layout.displayName = 'Layout'

export default Layout
