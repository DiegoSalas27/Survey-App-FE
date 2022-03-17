import { AccessDeniedError } from '@domain/errors'
import { ApiContext } from '@presentation/context'
import { useContext } from 'react'
import { useHistory } from 'react-router-dom'

type CallBackErrorType = (error: Error) => void
type ResultType = CallBackErrorType

export const useErrorHandler = (callback: CallBackErrorType): ResultType => {
  const history = useHistory()
  const { setCurrentAccount } = useContext(ApiContext)
  return (error: Error): void => {
    if (error instanceof AccessDeniedError) {
      setCurrentAccount(undefined)
      history.replace('/login')
    } else {
      callback(error)
    }
  }
}
