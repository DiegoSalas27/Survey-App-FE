import { Authentication } from '@domain/usecases'
import { Footer, FormStatus, Input, LoginHeader, SubmitButton } from '@presentation/components'
import { ApiContext, FormContext } from '@presentation/context'
import { Validation } from '@presentation/protocols/validation'
import React, { useContext, useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom'
import Styles from './login-styles.scss'

type Props = {
  validation: Validation | undefined
  authentication: Authentication | undefined
}

const Login: React.FC<Props> = ({ validation, authentication }) => {
  const { setCurrentAccount } = useContext(ApiContext)
  const history = useHistory()
  const [state, setState] = useState({
    isLoading: false,
    isFormInvalid: true,
    email: '',
    password: '',
    emailError: '',
    passwordError: '',
    mainError: ''
  })

  useEffect(() => {
    validate('email')
  }, [state.email])

  useEffect(() => {
    validate('password')
  }, [state.password])

  const validate = (field: string): void => {
    const { email, password } = state
    const formData = { email, password }
    setState(prev => ({
      ...prev,
      [`${field}Error`]: validation.validate(field, formData)
    }))

    setState(prev => ({
      ...prev,
      isFormInvalid: !!prev.emailError || !!prev.passwordError
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      if (state.isLoading || state.isFormInvalid) return
      setState({
        ...state,
        isLoading: true
      })
      const account = await authentication.auth({ email: state.email, password: state.password })
      setCurrentAccount(account)
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
    <div className={Styles.loginWrap}>
      <LoginHeader />
      <FormContext.Provider value={{ state, setState } as any}>
        <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
          <h2>Login</h2>
          <Input type="email" name="email" placeholder="Enter your email" />
          <Input type="password" name="password" placeholder="Enter your password" />
          <SubmitButton text="Login" />
          <Link data-testid="signup-link" to="/signup" className={Styles.link}>
            Create an account
          </Link>
          <FormStatus />
        </form>
      </FormContext.Provider>
      <Footer />
    </div>
  )
}

export default Login
