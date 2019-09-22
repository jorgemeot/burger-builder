import React from 'react'
import styled from 'styled-components'
import appLogo from '../../assets/images/logo.png'

const Logo = styled.div`
  height: 100%;
  padding: 8px;
  border-radius: 5px;
  box-sizing: border-box;
  background-color: #fff;
  & img {
    height: 100%;
  }
`

const logo = () => (
  <Logo>
    <img src={appLogo} alt="logo" />
  </Logo>
)

logo.displayName = 'Logo'

export default logo
