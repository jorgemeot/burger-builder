import React, { Component } from 'react'
import axios from '../axios-orders'
import BuildControls from '../components/Burger/BuildControls'
import Burger from '../components/Burger/Burger'
import OrderSummary from '../components/Burger/OrderSummary'
import Modal from '../components/UI/Modal'
import Spinner from '../components/UI/Spinner'
import Auxiliary from '../hoc/Auxiliary'
import withErrorHandler from '../hoc/withErrorHandler'

const INGREDIENT_PRICES = {
  bacon: 0.7,
  cheese: 0.4,
  meat: 1.3,
  salad: 0.5
}

class BurgerBuilder extends Component {
  constructor (props) {
    super(props)
    this.state = {
      ingredients: null,
      totalPrice: 4,
      purchasable: false,
      purchasing: false,
      loading: false,
      error: false
    }
    this.updatePurchaseState = this.updatePurchaseState.bind(this)
    this.addIngredientHandler = this.addIngredientHandler.bind(this)
    this.addIngredientHandler = this.addIngredientHandler.bind(this)
    this.deductIngredientHandler = this.deductIngredientHandler.bind(this)
    this.purchaseHandler = this.purchaseHandler.bind(this)
    this.purchaseCancelHandler = this.purchaseCancelHandler.bind(this)
    this.purchaseContinueHandler = this.purchaseContinueHandler.bind(this)
  }

  componentDidMount () {
    axios
      .get('/ingredients.json')
      .then((response) => {
        this.setState({ ingredients: response.data })
      })
      .catch(() => {
        this.setState({ error: true })
      })
  }

  updatePurchaseState (ingredients) {
    const sum = Object.keys(ingredients)
      .map((ingredientKey) => ingredients[ingredientKey])
      .reduce((sum, el) => sum + el, 0)
    this.setState({ purchasable: sum > 0 })
  }

  addIngredientHandler (type) {
    const oldCount = this.state.ingredients[type]
    const updatedCount = oldCount + 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceAddition = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const updatedPrice = oldPrice + priceAddition
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    })
    this.updatePurchaseState(updatedIngredients)
  }

  deductIngredientHandler (type) {
    const oldCount = this.state.ingredients[type]
    if (oldCount <= 0) {
      return
    }
    const updatedCount = oldCount - 1
    const updatedIngredients = {
      ...this.state.ingredients
    }
    updatedIngredients[type] = updatedCount
    const priceDeduction = INGREDIENT_PRICES[type]
    const oldPrice = this.state.totalPrice
    const updatedPrice = oldPrice - priceDeduction
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: updatedPrice
    })
    this.updatePurchaseState(updatedIngredients)
  }

  purchaseHandler () {
    this.setState({ purchasing: true })
  }

  purchaseCancelHandler () {
    this.setState({ purchasing: false })
  }

  purchaseContinueHandler () {
    this.setState({ loading: true })
    const order = {
      ingredients: this.state.ingredients,
      price: this.state.totalPrice,
      customer: {}
    }
    axios
      .post('/orders.json', order)
      .then(() => this.setState({ loading: false, purchasing: false }))
      .catch(() => this.setState({ loading: false, purchasing: false }))
  }

  render () {
    const disabledInfo = {
      ...this.state.ingredients
    }
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }
    let orderSummary = null
    let burger = this.state.error ? (
      <p>Ingredients cannot be loaded</p>
    ) : (
      <Spinner />
    )
    if (this.state.ingredients) {
      orderSummary = (
        <OrderSummary
          ingredients={this.state.ingredients}
          price={this.state.totalPrice}
          purchaseCancel={this.purchaseCancelHandler}
          purchaseContinue={this.purchaseContinueHandler}
        />
      )
      burger = (
        <Auxiliary>
          <Burger ingredients={this.state.ingredients} />
          <BuildControls
            ingredientAdded={this.addIngredientHandler}
            ingredientDeducted={this.deductIngredientHandler}
            disabled={disabledInfo}
            purchasable={this.state.purchasable}
            ordered={this.purchaseHandler}
            price={this.state.totalPrice}
          />
        </Auxiliary>
      )
    }
    if (this.state.loading) {
      orderSummary = <Spinner />
    }
    return (
      <Auxiliary>
        <Modal
          show={this.state.purchasing}
          modalClosed={this.purchaseCancelHandler}
        >
          {orderSummary}
        </Modal>
        {burger}
      </Auxiliary>
    )
  }
}

BurgerBuilder.displayName = 'BurgerBuilder'

export default withErrorHandler(BurgerBuilder, axios)
