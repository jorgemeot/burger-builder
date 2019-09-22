import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const NavigationItem = styled.li`
  width: 100%;
  margin: 10px 0;
  display: block;
  box-sizing: border-box;
  & a {
    width: 100%;
    display: block;
    color: ${(props) => (props.active ? '#40A4C8;' : '#8F5C2C;')};
    text-decoration: none;
    box-sizing: border-box;
  }
  & a:hover,
  & a:active {
    color: #40a4c8;
  }
  @media (min-width: 500px) {
    margin: 0;
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
    & a {
      height: 100%;
      color: #fff;
      padding: 16px 10px;
      background-color: ${(props) => (props.active ? '#8F5C2C;' : null)};
      border-bottom: ${(props) =>
    props.active ? '4px solid #40A4C8;' : '4px solid transparent;'};
    }
    & a:hover,
    & a:active {
      color: #fff;
      background-color: #8f5c2c;
      border-bottom: ;
    }
  }
`

const navigationItem = (props) => (
  <NavigationItem active={props.active}>
    <a href={props.link}>{props.children}</a>
  </NavigationItem>
)

navigationItem.propTypes = {
  active: PropTypes.bool,
  link: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

navigationItem.displayName = 'NavigationItem'

export default navigationItem
