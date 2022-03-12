import { Footer, FormStatus, Header, Input } from '@presentation/components'
import Context from '@presentation/context/form/form-context'
import React, { useState } from 'react'
import Styles from './signup-styles.scss'

const Signup: React.FC = () => {
  const [state] = useState({
    isLoading: false,
    nameError: 'Required field',
    emailError: 'Required field',
    passwordError: 'Required field',
    passwordConfirmError: 'Required field',
    mainError: ''
  })

  return (
    <div className={Styles.signup}>
      <Header />
      <Context.Provider value={{ state }}>
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
