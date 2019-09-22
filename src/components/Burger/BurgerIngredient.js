import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const BreadBottom = styled.div`
  width: 80%;
  height: 13%;
  margin: 2% auto;
  border-radius: 0 0 30px 30px;
  box-shadow: inset -15px 0 #c15711;
  background: linear-gradient(#f08e4a, #e27b36);
`

const BreadTop = styled.div`
  width: 80%;
  height: 20%;
  margin: 2% auto;
  position: relative;
  border-radius: 50% 50% 0 0;
  box-shadow: inset -15px 0 #c15711;
  background: linear-gradient(#bc581e, #e27b36);
`

const SeedsOne = styled.div`
  top: 50%;
  left: 30%;
  width: 10%;
  height: 15%;
  position: absolute;
  border-radius: 40%;
  background-color: #fff;
  transform: rotate(-20deg);
  box-shadow: inset -2px -3px #c9c9c9;
  &:before {
    top: -50%;
    left: 180%;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 40%;
    background-color: #fff;
    transform: rotate(60deg);
    box-shadow: inset -1px -3px #c9c9c9;
  }
  &:after {
    top: -260%;
    left: -170%;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 40%;
    background-color: #fff;
    transform: rotate(60deg);
    box-shadow: inset -1px 2px #c9c9c9;
  }
`

const SeedsTwo = styled.div`
  top: 50%;
  left: 64%;
  width: 10%;
  height: 15%;
  position: absolute;
  border-radius: 40%;
  background-color: #fff;
  transform: rotate(10deg);
  box-shadow: inset -3px 0 #c9c9c9;
  &:before {
    top: -130%;
    left: 150%;
    content: '';
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 40%;
    background-color: #fff;
    transform: rotate(90deg);
    box-shadow: inset 1px 3px #c9c9c9;
  }
`
const Bacon = styled.div`
  width: 80%;
  height: 3%;
  margin: 2% auto;
  background: linear-gradient(#bf3813, #c45e38);
`

const Cheese = styled.div`
  width: 90%;
  height: 4.5%;
  margin: 2% auto;
  border-radius: 20px;
  background: linear-gradient(#f4d004, #d6bb22);
`

const Meat = styled.div`
  width: 80%;
  height: 8%;
  margin: 2% auto;
  border-radius: 15px;
  background: linear-gradient(#7f3608, #702e05);
`

const Salad = styled.div`
  width: 85%;
  height: 7%;
  margin: 2% auto;
  position: relative;
  border-radius: 20px;
  background: linear-gradient(#228c1d, #91ce50);
  &:before {
    left: 0;
    right: 0;
    bottom: 0;
    content: '';
    height: 20%;
    position: absolute;
    background-size: 20px 20px;
    background-image: radial-gradient(
      circle at 10px -5px,
      transparent 10px,
      #fff 10px
    );
  }
`

const burgerIngredient = (props) => {
  let ingredient = null
  switch (props.type) {
    case 'bread-bottom':
      ingredient = <BreadBottom />
      break
    case 'bread-top':
      ingredient = (
        <BreadTop>
          <SeedsOne />
          <SeedsTwo />
        </BreadTop>
      )
      break
    case 'bacon':
      ingredient = <Bacon />
      break
    case 'cheese':
      ingredient = <Cheese />
      break
    case 'meat':
      ingredient = <Meat />
      break
    case 'salad':
      ingredient = <Salad />
      break
    default:
      ingredient = null
  }
  return ingredient
}

burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
}

burgerIngredient.displayName = 'BurgerIngredient'

export default burgerIngredient
