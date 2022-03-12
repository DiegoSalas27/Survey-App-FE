import { Footer, FormStatus, Header, Input } from '@presentation/components'
import Context from '@presentation/context/form/form-context'
import { Validation } from '@presentation/protocols/validation'
import React, { useEffect, useState } from 'react'
import Styles from './signup-styles.scss'

type Props = {
  validation: Validation | undefined
}

const Signup: React.FC<Props> = ({ validation }) => {
  const [state, setState] = useState({
    isLoading: false,
    name: '',
    email: '',
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
      emailError: validation.validate('name', state.email)
    })
  }, [state.nameError, state.email])

  return (
    <div className={Styles.signup}>
      <Header />
      <Context.Provider value={{ state, setState }}>
        <form className={Styles.form}>
          <h2>Sign up</h2>
          <Input type="name" name="name" placeholder="Enter your name" />
          <Input type="email" name="email" placeholder="Enter your email" />
          <Input type="password" name="password" placeholder="Enter your password" />
          <Input type="password" name="passwordConfirm" placeholder="Reenter password" />
          <button data-testid="submit" className={Styles.submit} disabled type="submit">
            Register
          </button>
          <span className={Styles.link}>Log in</span>
          <FormStatus />
        </form>
      </Context.Provider>
      <Footer />
    </div>
  )
}

export default Signup
