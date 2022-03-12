import { Footer, FormStatus, Header, Input } from '@presentation/components'
import Context from '@presentation/context/form/form-context'
import React from 'react'
import { Link } from 'react-router-dom'
import Styles from './signup-styles.scss'

const Signup: React.FC = () => {
  return (
    <div className={Styles.signup}>
      <Header />
      <Context.Provider value={{ state: {} } as any}>
        <form className={Styles.form}>
          <h2>Sign up</h2>
          <Input type="text" name="text" placeholder="Enter your name" />
          <Input type="email" name="email" placeholder="Enter your email" />
          <Input type="password" name="password" placeholder="Enter your password" />
          <Input type="password" name="passwordConfirm" placeholder="Reenter password" />
          <button
            data-testid="submit"
            className={Styles.submit}
            type="submit"
          >
            Register
          </button>
          <Link to="/login" className={Styles.link}>
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
