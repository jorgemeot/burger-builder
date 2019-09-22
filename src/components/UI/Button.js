import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Button = styled.button`
  margin: 10px;
  border: none;
  padding: 10px;
  color: ${(props) =>
    props.buttonSuccess
      ? '#5C9210;'
      : props.buttonDanger
        ? '#944317;'
        : '#FFF;'};
  outline: none;
  font: inherit;
  cursor: pointer;
  font-weight: bold;
  background-color: transparent;
  &:first-of-type {
    margin-left: 0;
    padding-left: 0;
  }
`

const button = (props) => (
  <Button {...props} onClick={props.clicked}>
    {props.children}
  </Button>
)

button.propTypes = {
  buttonSuccess: PropTypes.bool,
  buttonDanger: PropTypes.bool,
  clicked: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}

button.displayName = 'Button'

export default button
