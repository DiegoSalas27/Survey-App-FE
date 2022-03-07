import React, { memo } from 'react'
import Logo from '../logo/logo'
import Styles from './login-header-styles.scss'

const LoginHeader: React.FC = () => {
  return (
    <header className={Styles.header}>
      <Logo />
      <h1>4Dev - Polls for programmers</h1>
    </header>
  )
}

export default memo(LoginHeader) // don't reload this components when state outside of them changes
