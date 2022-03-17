import { AccessDeniedError } from '@domain/errors'
import { useLogout } from './use-logout'

type CallBackErrorType = (error: Error) => void
type ResultType = CallBackErrorType

export const useErrorHandler = (callback: CallBackErrorType): ResultType => {
  const logout = useLogout()
  return (error: Error): void => {
    if (error instanceof AccessDeniedError) {
      logout()
    } else {
      callback(error)
    }
  }
}
