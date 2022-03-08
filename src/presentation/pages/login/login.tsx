import React from 'react'
import { Input, FormStatus, Footer, Header } from '@presentation/components'
import Styles from './login-styles.scss'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <Input type="email" name="email" placeholder="Enter your email" />
        <Input type="password" name="password" placeholder="Enter your password" />
        <button className={Styles.submit} type="submit">
          Login
        </button>
        <span className={Styles.link}>Create an account</span>
        <FormStatus />
      </form>
      <Footer />
    </div>
  )
}

export default Login
