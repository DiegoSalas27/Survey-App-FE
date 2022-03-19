import { Link, useHistory } from 'react-router-dom'
import { AddAccount } from '@domain/usecases'
import { Footer, FormStatus, LoginHeader, Input, SubmitButton } from '@presentation/components'
import { ApiContext, FormContext } from '@presentation/context'
import { Validation } from '@presentation/protocols/validation'
import React, { useContext, useEffect, useState } from 'react'
import Styles from './signup-styles.scss'

type Props = {
  validation: Validation | undefined
  addAccount: AddAccount | undefined
}

const Signup: React.FC<Props> = ({ validation, addAccount }) => {
  const { setCurrentAccount } = useContext(ApiContext)
  const history = useHistory()
  const [state, setState] = useState({
    isLoading: false,
    isFormInvalid: true,
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    nameError: 'Required field',
    emailError: 'Required field',
    passwordError: 'Required field',
    passwordConfirmError: 'Required field',
    mainError: ''
  })

  useEffect(() => {
    validate('name')
  }, [state.name])

  useEffect(() => {
    validate('email')
  }, [state.email])

  useEffect(() => {
    validate('password')
  }, [state.password])

  useEffect(() => {
    validate('passwordConfirm')
  }, [state.passwordConfirm])

  const validate = (field: string): void => {
    const { name, email, password, passwordConfirm } = state
    const formData = { name, email, password, passwordConfirm }
    setState(prev => ({
      ...prev,
      [`${field}Error`]: validation.validate(field, formData)
    }))

    setState(prev => ({
      ...prev,
      isFormInvalid:
        !!prev.nameError || !!prev.emailError || !!prev.passwordError || !!prev.passwordConfirmError
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      if (state.isLoading || state.isFormInvalid) {
        return
      }

      setState({
        ...state,
        isLoading: true
      })

      const { name, email, password, passwordConfirm } = state

      const account = await addAccount.add({
        name,
        email,
        password,
        passwordConfirm
      })
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
    <div className={Styles.signupWrap}>
      <LoginHeader />
      <FormContext.Provider value={{ state, setState }}>
        <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <Input type="text" name="name" placeholder="Enter your name" />
          <Input type="email" name="email" placeholder="Enter your email" />
          <Input type="password" name="password" placeholder="Enter your password" />
          <Input type="password" name="passwordConfirm" placeholder="Reenter password" />
          <SubmitButton text="Register" />
          <Link data-testid="login-link" replace to="/login" className={Styles.link}>
            Log in
          </Link>
          <FormStatus />
        </form>
      </FormContext.Provider>
      <Footer />
    </div>
  )
}

export default Signup
