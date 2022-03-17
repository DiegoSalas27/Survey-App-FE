import { AxiosHttpClient } from '@infrastructure/http/axios-http-client/axios-http-client'

export const makeAxiosHttpClient = <BodyType, ResponseType>(): AxiosHttpClient<BodyType, ResponseType> => {
  return new AxiosHttpClient<BodyType, ResponseType>()
}