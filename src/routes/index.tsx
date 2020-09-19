import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Dashboard from '../pages/dashboard'
import Pedidos from '../pages/pedidos'

const routes: React.FC = () => {
  return (
    <Switch>
      <Route path="/" exact component={Dashboard} />
      <Route path="/pedidos" component={Pedidos} />
      <Route path="/clientes" component={() => <h1>Clientes</h1>} />
      <Route path="/produtos" component={() => <h1>Pedidos</h1>} />

    </Switch>
  )
}

export default routes
