import React from 'react'
import PropTypes from 'prop-types'
import Auxiliary from '../../hoc/Auxiliary'
import Button from '../UI/Button'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map(
    (ingredientKey) => (
      <li key={ingredientKey}>
        <span style={{ textTransform: 'capitalize' }}>{ingredientKey}</span>:{' '}
        {props.ingredients[ingredientKey]}
      </li>
    )
  )
  return (
    <Auxiliary>
      <h3>Your order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>
        <strong>Total price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button buttonDanger clicked={props.purchaseCancel}>
        CANCEL
      </Button>
      <Button buttonSuccess clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Auxiliary>
  )
}

orderSummary.propTypes = {
  ingredients: PropTypes.shape({
    bacon: PropTypes.number.isRequired,
    cheese: PropTypes.number.isRequired,
    meat: PropTypes.number.isRequired,
    salad: PropTypes.number.isRequired
  }).isRequired,
  price: PropTypes.number.isRequired,
  purchaseCancel: PropTypes.func.isRequired,
  purchaseContinue: PropTypes.func.isRequired
}

orderSummary.displayName = 'OrderSummary'

export default orderSummary
