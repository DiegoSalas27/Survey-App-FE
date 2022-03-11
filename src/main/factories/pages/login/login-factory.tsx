import React from 'react'
import { RemoteAuthentication } from '@data/usecases/authentication/remote-authentication'
import { AccountModel } from '@domain/models'
import { AuthenticationParams } from '@domain/usecases'
import { AxiosHttpClient } from '@infrastructure/http/axios-http-client/axios-http-client'
import { Login } from '@presentation/pages'
import { ValidationComposite, ValidationBuilder } from '@validation/validators'

export const makeLogin: React.FC = () => {
  const url = 'https://clean-node-api-dsn.herokuapp.com/api/login'
  const axiosHttpClient = new AxiosHttpClient<AuthenticationParams, AccountModel>()
  const remoteAuthentication = new RemoteAuthentication(url, axiosHttpClient)
  const validationComposite = ValidationComposite.build([
    ...ValidationBuilder.field('email').required().email().build(),
    ...ValidationBuilder.field('password').required().min(5).build()
  ])

  return <Login authentication={remoteAuthentication} validation={validationComposite} />
}
