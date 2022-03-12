import { Link, useHistory } from 'react-router-dom'
import { AddAccount, SaveAccessToken } from '@domain/usecases'
import { Footer, FormStatus, Header, Input } from '@presentation/components'
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
    setState({
      ...state,
      nameError: validation.validate('name', state.name),
      emailError: validation.validate('name', state.email),
      passwordError: validation.validate('name', state.password),
      passwordConfirmError: validation.validate('name', state.passwordConfirm)
    })
  }, [state.nameError, state.email, state.password, state.passwordConfirm])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault()
    try {
      if (
        state.isLoading ||
        state.emailError ||
        state.emailError ||
        state.passwordError ||
        state.passwordConfirmError
      ) {
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
    <div className={Styles.signup}>
      <Header />
      <Context.Provider value={{ state, setState }}>
        <form data-testid="form" className={Styles.form} onSubmit={handleSubmit}>
          <h2>Sign up</h2>
          <Input type="name" name="name" placeholder="Enter your name" />
          <Input type="email" name="email" placeholder="Enter your email" />
          <Input type="password" name="password" placeholder="Enter your password" />
          <Input type="password" name="passwordConfirm" placeholder="Reenter password" />
          <button
            data-testid="submit"
            className={Styles.submit}
            disabled={
              !!state.emailError ||
              !!state.passwordError ||
              !!state.nameError ||
              !!state.passwordConfirmError
            }
            type="submit"
          >
            Register
          </button>
          <Link data-testid="login" to="/login" className={Styles.link}>Log in</Link>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Signup