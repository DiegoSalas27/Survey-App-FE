import React, { memo, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { Logo } from '@presentation/components'
import Styles from './header-styles.scss'
import { ApiContext } from '@presentation/context'

const Header: React.FC = () => {
  const history = useHistory()
  const { setCurrentAccount } = useContext(ApiContext)

  const logout = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    setCurrentAccount(undefined)
    history.replace('/login')
  }

  return (
    <header className={Styles.headerWrap}>
      <div className={Styles.headerContent}>
        <Logo />
        <div className={Styles.logoutWrap}>
          <span>Fala Galera Beleza</span>
          <a data-testid="logout" href="#" onClick={logout}>
            Logout
          </a>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
