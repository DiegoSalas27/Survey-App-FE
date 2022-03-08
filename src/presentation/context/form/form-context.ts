import { StateProps } from '@presentation/pages/login/login'
import { createContext } from 'react'

export default createContext<StateProps>({ isLoading: false, errorMessage: '' })
