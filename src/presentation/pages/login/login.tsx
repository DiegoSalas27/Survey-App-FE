import Footer from '@presentation/components/footer/footer'
import FormStatus from '@presentation/components/form-status/form-status'
import Input from '@presentation/components/input/input'
import Header from '@presentation/components/login-header/login-header'
import React from 'react'
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
