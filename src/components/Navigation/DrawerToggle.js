import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const DrawerToggle = styled.div`
  width: 40px;
  height: 100%;
  display: flex;
  padding: 10px 0;
  flex-flow: column;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-around;
  & div {
    width: 90%;
    height: 3px;
    background-color: #fff;
  }
  @media (min-width: 500px) {
    display: none;
  }
`

const drawerToggle = (props) => (
  <DrawerToggle onClick={props.clicked}>
    <div />
    <div />
    <div />
  </DrawerToggle>
)

drawerToggle.propTypes = {
  clicked: PropTypes.func.isRequired
}

drawerToggle.displayName = 'DrawerToggle'

export default drawerToggle
