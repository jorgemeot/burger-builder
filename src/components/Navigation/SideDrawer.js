import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Auxiliary from '../../hoc/Auxiliary'
import Logo from '../Logo/Logo'
import Backdrop from '../UI/Backdrop'
import NavigationItems from './NavigationItems'

const SideDrawer = styled.div`
  top: 0;
  left: 0;
  width: 280px;
  height: 100%;
  z-index: 200;
  max-width: 70%;
  position: fixed;
  padding: 32px 16px;
  box-sizing: border-box;
  background-color: #fff;
  transition: transform 0.3s ease-out;
  transform: ${(props) =>
    props.show ? 'translateX(0);' : 'translateX(-100%);'};
  @media (min-width: 500px) {
    display: none;
  }
`

const LogoWrapper = styled.div`
  height: 10%;
  margin-bottom: 32px;
`

const sideDrawer = (props) => (
  <Auxiliary>
    <Backdrop show={props.open} clicked={props.closed} />
    <SideDrawer show={props.open}>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <nav>
        <NavigationItems />
      </nav>
    </SideDrawer>
  </Auxiliary>
)

sideDrawer.propTypes = {
  open: PropTypes.bool.isRequired,
  closed: PropTypes.func.isRequired
}

sideDrawer.displayName = 'SideDrawer'

export default sideDrawer
