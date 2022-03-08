import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Login } from '@presentation/pages'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={(props: any) => <Login validation={undefined} authentication={undefined} />} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
