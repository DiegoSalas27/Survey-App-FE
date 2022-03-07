import Footer from '@presentation/components/footer/footer'
import Header from '@presentation/components/login-header/login-header'
import Spinner from '@presentation/components/spinner/spinner'
import React from 'react'
import Styles from './login-styles.scss'

const Login: React.FC = () => {
  return (
    <div className={Styles.login}>
      <Header />
      <form className={Styles.form}>
        <h2>Login</h2>
        <div className={Styles.inputWrap}>
          <input type="email" name="email" placeholder="Enter your email" />
          <span className={Styles.status}>😃</span>
        </div>
        <div className={Styles.inputWrap}>
          <input type="password" name="password" placeholder="Enter your password" />
          <span className={Styles.status}>😃</span>
        </div>
        <button className={Styles.submit} type="submit">
          Login
        </button>
        <span className={Styles.link}>Create an account</span>
        <div className={Styles.errorWrap}>
          <Spinner className={Styles.spinner} />
          <span className={Styles.error}>Error</span>
        </div>
      </form>
      <Footer />
    </div>
  )
}

export default Login
