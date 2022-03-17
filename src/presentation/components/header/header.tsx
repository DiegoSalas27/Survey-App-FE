import { Logo } from '@presentation/components'
import { ApiContext } from '@presentation/context'
import { useLogout } from '@presentation/hooks'
import React, { memo, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import Styles from './header-styles.scss'

const Header: React.FC = () => {
  const logout = useLogout()
  const history = useHistory()
  const { getCurrentAccount } = useContext(ApiContext)

  const logoutBtnClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
    e.preventDefault()
    logout()
  }

  return (
    <header className={Styles.headerWrap}>
      <div className={Styles.headerContent}>
        <Logo />
        <div className={Styles.logoutWrap}>
          <span data-testid="username">{getCurrentAccount().name}</span>
          <a data-testid="logout" href="#" onClick={logoutBtnClick}>
            Logout
          </a>
        </div>
      </div>
    </header>
  )
}

export default memo(Header)
