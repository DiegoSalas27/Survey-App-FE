import { makeRemoteAddAccount } from '@main/factories/usecases/add-account/remote-add-account-factory'
import { Signup } from '@presentation/pages'
import React from 'react'
import { makeSignupValidation } from './signup-validation-factory'

export const makeSignup: React.FC = () => {
  return (
    <Signup
      addAccount={makeRemoteAddAccount()}
      validation={makeSignupValidation()}
    />
  )
}
