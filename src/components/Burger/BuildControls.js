import React from 'react'
import PropTypes from 'prop-types'
import styled, { keyframes, css } from 'styled-components'
import BuildControl from './BuildControl'

const BuildControls = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  padding: 10px 0;
  flex-flow: column;
  align-items: center;
  background-color: #cf8f2e;
  box-shadow: 0 2px 1px #ccc;
`

const enable = keyframes`
  0% {
    transform: scale(1);
  }
  60% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
`

const animation = css`
  ${enable} 0.3s linear;
`

const OrderButton = styled.button`
  outline: none;
  cursor: pointer;
  color: #966909;
  font-size: 1.2em;
  padding: 15px 30px;
  font-family: inherit;
  border: 1px solid #966909;
  background-color: #dad735;
  box-shadow: 2px 2px 2px #966909;
  &:hover,
  &:active {
    color: #966909;
    border: 1px solid #966909;
    background-color: #a0db41;
  }
  &:disabled {
    color: #888;
    cursor: not-allowed;
    border: 1px solid #ccc;
    background-color: #c7c6c6;
  }
  &:not(:disabled) {
    animation: ${animation};
  }
`

const controls = [
  { label: 'Bacon', type: 'bacon' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Salad', type: 'salad' }
]

const buildControls = (props) => (
  <BuildControls>
    <p>
      Current price: <strong>{props.price.toFixed(2)}</strong>
    </p>
    {controls.map((control) => (
      <BuildControl
        key={control.label}
        label={control.label}
        added={() => props.ingredientAdded(control.type)}
        deducted={() => props.ingredientDeducted(control.type)}
        disabled={props.disabled[control.type]}
      />
    ))}
    <OrderButton disabled={!props.purchasable} onClick={props.ordered}>
      ORDER NOW
    </OrderButton>
  </BuildControls>
)

buildControls.propTypes = {
  ingredientAdded: PropTypes.func.isRequired,
  ingredientDeducted: PropTypes.func.isRequired,
  disabled: PropTypes.shape({
    bacon: PropTypes.bool.isRequired,
    cheese: PropTypes.bool.isRequired,
    meat: PropTypes.bool.isRequired,
    salad: PropTypes.bool.isRequired
  }).isRequired,
  purchasable: PropTypes.bool.isRequired,
  ordered: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired
}

buildControls.displayName = 'BuildControls'

export default buildControls
