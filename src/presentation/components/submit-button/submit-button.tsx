import React, { useContext } from 'react'
import Styles from './input-styles.scss'
import Context from '@presentation/context/form/form-context'

type Props = {
  text: string
}

const SubmitButton: React.FC<Props> = ({ text }) => {
  const { state } = useContext(Context)

  return (
    <button
      data-testid="submit"
      className={Styles.submit}
      disabled={state.isFormInvalid}
      type="submit"
    >
      Register
    </button>
  )
}

export default SubmitButton
