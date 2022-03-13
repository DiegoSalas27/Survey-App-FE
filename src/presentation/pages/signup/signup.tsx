import { Link, useHistory } from 'react-router-dom'
import { AddAccount, SaveAccessToken } from '@domain/usecases'
import { Footer, FormStatus, Header, Input, SubmitButton } from '@presentation/components'
import Context from '@presentation/context/form/form-context'
import { Validation } from '@presentation/protocols/validation'
import React, { useEffect, useState } from 'react'
import Styles from './signup-styles.scss'

type Props = {
  validation: Validation | undefined
  addAccount: AddAccount | undefined
  saveAccessToken: SaveAccessToken | undefined
}

const Signup: React.FC<Props> = ({ validation, addAccount, saveAccessToken }) => {
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
    const { name, email, password, passwordConfirm } = state
    const formData = { name, email, password, passwordConfirm }
    const nameError = validation.validate('name', formData)
    const emailError = validation.validate('email', formData)
    const passwordError = validation.validate('password', formData)
    const passwordConfirmError = validation.validate('passwordConfirm', formData)
    setState({
      ...state,
      nameError,
      emailError,
      passwordError,
      passwordConfirmError,
      isFormInvalid: !!emailError || !!emailError || !!passwordError || !!passwordConfirmError
    })
  }, [state.name, state.email, state.password, state.passwordConfirm])

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
    <div className={Styles.signupWrap}>
      <Header />
      <Context.Provider value={{ state, setState }}>
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
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Signup
