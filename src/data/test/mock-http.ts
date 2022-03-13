import faker from '@faker-js/faker'
import {
  HttpPostClient,
  HttpResponse,
  HttpStatusCode,
  HttpPostParams,
  HttpGetClient,
  HttpGetParams
} from '@data/protocols/http'

export const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: {}
})

export class HttpPostClientSpy<T, R> implements HttpPostClient<T, R> {
  url?: string
  body?: T
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async post(params: HttpPostParams<T>): Promise<HttpResponse<R>> {
    this.url = params.url
    this.body = params.body
    return await Promise.resolve(this.response)
  }
}

export class HttpGetClientSpy implements HttpGetClient {
  url: string

  async get(params: HttpGetParams): Promise<void> {
    this.url = params.url
  }
}
