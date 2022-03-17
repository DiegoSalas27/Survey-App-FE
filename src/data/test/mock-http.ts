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

export const mockGetRequest = (): HttpGetParams => ({
  url: faker.internet.url(),
  headers: JSON.parse(faker.datatype.json())
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

export class HttpGetClientSpy<R = any> implements HttpGetClient<R> {
  url: string
  headers?: any
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async get(params: HttpGetParams): Promise<HttpResponse<R>> {
    this.url = params.url
    this.headers = params.headers
    return this.response
  }
}
