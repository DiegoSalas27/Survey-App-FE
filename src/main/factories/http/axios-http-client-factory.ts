import { HttpPostClient } from '@data/protocols/http'
import { AccountModel } from '@domain/models'
import { AuthenticationParams } from '@domain/usecases'
import { AxiosHttpClient } from '@infrastructure/http/axios-http-client/axios-http-client'

export const makeAxiosHttpClient = (): HttpPostClient<AuthenticationParams, AccountModel> => {
  return new AxiosHttpClient<AuthenticationParams, AccountModel>()
}
