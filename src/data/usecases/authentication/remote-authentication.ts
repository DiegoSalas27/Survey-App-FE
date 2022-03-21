import { HttpClient } from '@data/protocols/http'
import {
  Authentication,
  HttpStatusCode,
  InvalidCredentialsError,
  UnexpectedError
} from './remote-authentication-protocols'

export class RemoteAuthentication implements Authentication {
  constructor(
    private readonly url: string,
    private readonly httpPostClient: HttpClient<Authentication.Params, RemoteAuthentication.Model>
  ) {}

  async auth(params: Authentication.Params): Promise<RemoteAuthentication.Model> {
    const httpResponse = await this.httpPostClient.request({
      url: this.url,
      method: 'POST',
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.unauthorized:
        throw new InvalidCredentialsError()
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteAuthentication {
  export type Model = Authentication.Model
}
