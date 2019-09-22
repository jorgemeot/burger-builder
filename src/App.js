import React from 'react'
import Layout from './hoc/Layout'
import BurgerBuilder from './container/BurgerBuilder'

const app = () => (
  <Layout>
    <BurgerBuilder />
  </Layout>
)

app.displayName = 'App'

export default app
