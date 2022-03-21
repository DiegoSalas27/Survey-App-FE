import faker from '@faker-js/faker'
import { HttpClient, HttpRequest, HttpResponse, HttpStatusCode } from '@data/protocols/http'

export const mockHttpRequest = (): HttpRequest<any> => ({
  url: faker.internet.url(),
  body: {},
  headers: JSON.parse(faker.datatype.json()),
  method: faker.random.arrayElement(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
})

export class HttpClientSpy<T, R> implements HttpClient<T, R> {
  url?: string
  method?: string
  body?: T
  headers: any
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async request(data: HttpRequest<T>): Promise<HttpResponse<R>> {
    this.url = data.url
    this.method = data.method
    this.body = data.body
    this.headers = data.headers
    return await Promise.resolve(this.response)
  }
}
