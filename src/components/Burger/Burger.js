import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import BurgerIngredient from './BurgerIngredient'

const Burger = styled.div`
  width: 100%;
  margin: auto;
  height: 250px;
  overflow: auto;
  font-weight: bold;
  font-size: 1.2rem;
  text-align: center;
  @media (min-width: 500px) and (min-height: 400px) {
    width: 350px;
    height: 300px;
  }
  @media (min-width: 500px) and (min-height: 401px) {
    width: 450px;
    height: 400px;
  }
  @media (min-width: 1000px) and (min-height: 700px) {
    width: 700px;
    height: 600px;
  }
`

const burger = (props) => {
  let transformedIgredients = Object.keys(props.ingredients)
    .map((ingredientKey) =>
      [...Array(props.ingredients[ingredientKey])].map((_, index) => (
        <BurgerIngredient key={ingredientKey + index} type={ingredientKey} />
      ))
    )
    .reduce((arr, el) => arr.concat(el), [])
  if (transformedIgredients.length === 0) {
    transformedIgredients = <p>Please start adding ingredients.</p>
  }
  return (
    <Burger>
      <BurgerIngredient type="bread-top" />
      {transformedIgredients}
      <BurgerIngredient type="bread-bottom" />
    </Burger>
  )
}

burger.propTypes = {
  ingredients: PropTypes.shape({
    bacon: PropTypes.number.isRequired,
    cheese: PropTypes.number.isRequired,
    meat: PropTypes.number.isRequired,
    salad: PropTypes.number.isRequired
  }).isRequired
}

burger.displayName = 'Burger'

export default burger
