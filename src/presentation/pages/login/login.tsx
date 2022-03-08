import React, { useState } from 'react'
import { Input, FormStatus, Footer, Header } from '@presentation/components'
import Context from '@presentation/context/form/form-context'
import Styles from './login-styles.scss'

const Login: React.FC = () => {
  const [state] = useState({
    isLoading: false,
  })
  const [errorState] = useState({
    email: 'Required field',
    password: 'Required field',
    main: ''
  })

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={{ state, errorState } as any}>
        <form className={Styles.form}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Enter your email" />
          <Input type="password" name="password" placeholder="Enter your password" />
          <button data-testid="submit" disabled className={Styles.submit} type="submit">
            Login
          </button>
          <span className={Styles.link}>Create an account</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
