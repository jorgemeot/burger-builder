import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BuildControl = styled.div`
  display: flex;
  margin: 5px 0;
  align-items: center;
  justify-content: space-between;
  & button {
    width: 80px;
    padding: 5px;
    font: inherit;
    margin: 0 5px;
    outline: none;
    display: block;
    cursor: pointer;
    border: 1px solid #aa6817;
  }
  & button:disabled {
    color: #ccc;
    cursor: default;
    border: 1px solid #7e7365;
    background-color: #ac9980;
  }
  & button:hover:disabled {
    color: #ccc;
    cursor: not-allowed;
    background-color: #ac9980;
  }
`

const Label = styled.div`
  width: 80px;
  padding: 10px;
  font-weight: bold;
`

const Less = styled.button`
  color: #fff;
  background-color: #d39952;
  &:hover,
  &:active {
    color: #fff;
    background-color: #daa972;
  }
`

const More = styled.button`
  color: #fff;
  background-color: #8f5e1e;
  &:hover,
  &:active {
    color: #fff;
    background-color: #99703f;
  }
`

const buildControl = (props) => (
  <BuildControl>
    <Label>{props.label}</Label>
    <Less onClick={props.deducted} disabled={props.disabled}>
      Less
    </Less>
    <More onClick={props.added}>More</More>
  </BuildControl>
)

buildControl.propTypes = {
  label: PropTypes.string.isRequired,
  added: PropTypes.func.isRequired,
  deducted: PropTypes.func.isRequired,
  disabled: PropTypes.bool.isRequired
}

buildControl.displayName = 'BuildControl'

export default buildControl
