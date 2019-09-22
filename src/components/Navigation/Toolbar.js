import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Logo from '../Logo/Logo'
import NavigationItems from './NavigationItems'
import DrawerToggle from './DrawerToggle'

const Toolbar = styled.header`
  top: 0;
  left: 0;
  width: 100%;
  z-index: 90;
  height: 56px;
  display: flex;
  padding: 0 20px;
  position: fixed;
  align-items: center;
  box-sizing: border-box;
  background-color: #703b09;
  justify-content: space-between;
  & nav {
    height: 100%;
  }
`

const LogoWrapper = styled.div`
  height: 80%;
`

const DesktopOnly = styled.nav`
  @media (max-width: 499px) {
    display: none;
  }
`

const toolbar = (props) => (
  <Toolbar>
    <DrawerToggle clicked={props.drawerToggleClicked} />
    <LogoWrapper>
      <Logo />
    </LogoWrapper>
    <DesktopOnly>
      <NavigationItems />
    </DesktopOnly>
  </Toolbar>
)

toolbar.propTypes = {
  drawerToggleClicked: PropTypes.func.isRequired
}

toolbar.displayName = 'Toolbar'

export default toolbar
