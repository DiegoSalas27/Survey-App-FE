import React, { useState, useEffect } from 'react'
import { Input, FormStatus, Footer, Header } from '@presentation/components'
import Context from '@presentation/context/form/form-context'
import Styles from './login-styles.scss'
import { Validation } from '@presentation/protocols/validation'

type Props = {
  validation: Validation | undefined
}

const Login: React.FC<Props> = ({ validation }) => {
  const [state, setState] = useState({
    isLoading: false,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    setState({
      ...state,
      emailError: validation.validate('email', state.email),
      passwordError: validation.validate('password', state.password)
    })
  }, [state.email, state.password])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    setState({
      ...state,
      isLoading: true
    })
  }

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={{ state, setState } as any}>
        <form className={Styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Enter your email" />
          <Input type="password" name="password" placeholder="Enter your password" />
          <button
            data-testid="submit"
            disabled={!!state.emailError || !!state.passwordError}
            className={Styles.submit}
            type="submit"
          >
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
