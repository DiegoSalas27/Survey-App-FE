import Context from '@presentation/context/form/form-context'
import React, { useContext } from 'react'
import Spinner from '../spinner/spinner'
import Styles from './form-status-styles.scss'

const FormStatus: React.FC = () => {
  const { state, errorState } = useContext(Context) as any
  const { isLoading } = state
  const { main } = errorState

  return (
    <div data-testid="error-wrap" className={Styles.errorWrap}>
      {isLoading && <Spinner className={Styles.spinner} />}
      {main && <span className={Styles.error}>{main}</span>}
    </div>
  )
}

export default FormStatus
