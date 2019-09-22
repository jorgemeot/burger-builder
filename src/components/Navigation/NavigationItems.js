import React from 'react'
import styled from 'styled-components'
import NavigationItem from './NavigationItem'

const NavigationItems = styled.ul`
  margin: 0;
  padding: 0;
  height: 100%;
  display: flex;
  flex-flow: column;
  align-items: center;
  list-style-type: none;
  @media (min-width: 500px) {
    flex-flow: row;
  }
`

const navigationItems = () => (
  <NavigationItems>
    <NavigationItem active link="/">
      Burger builder
    </NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
  </NavigationItems>
)

navigationItems.displayName = 'NavigationItems'

export default navigationItems
