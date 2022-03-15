import { makeLogin } from '@main/factories/pages/login/login-factory'
import { makeSignup } from '@main/factories/pages/signup/signup-factory'
import { SurveyList } from '@presentation/pages'
import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={makeLogin} />
        <Route path="/signup" component={makeSignup} />
        <Route exact path="/" component={SurveyList} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
