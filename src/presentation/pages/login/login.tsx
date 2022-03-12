import React, { useState, useEffect } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { Input, FormStatus, Footer, Header } from '@presentation/components'
import Context from '@presentation/context/form/form-context'
import Styles from './login-styles.scss'
import { Validation } from '@presentation/protocols/validation'
import { Authentication, SaveAccessToken } from '@domain/usecases'

type Props = {
  validation: Validation | undefined
  authentication: Authentication | undefined
  saveAccessToken: SaveAccessToken | undefined
}

const Login: React.FC<Props> = ({ validation, authentication, saveAccessToken }) => {
  const history = useHistory()
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

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      if (state.isLoading || state.emailError || state.passwordError) return
      setState({
        ...state,
        isLoading: true
      })
      const account = await authentication.auth({ email: state.email, password: state.password })
      await saveAccessToken.save(account.accessToken)
      history.replace('/')
    } catch (error: any) {
      setState({
        ...state,
        isLoading: false,
        mainError: error.message
      })
    }
  }

  return (
    <div className={Styles.login}>
      <Header />
      <Context.Provider value={{ state, setState } as any}>
        <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
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
          <Link data-testid="signup" to="/signup" className={Styles.link}>
            Create an account
          </Link>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Login
