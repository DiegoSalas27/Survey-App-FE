import { HttpRequest } from '@data/protocols/http'
import { GetStorageSpy, HttpClientSpy, mockHttpRequest } from '@data/test'
import { mockAccountModel } from '@domain/test'
import faker from '@faker-js/faker'
import { AuthorizeHttpClientDecorator } from './authorize-http-client-decorator'

type SutTypes = {
  sut: AuthorizeHttpClientDecorator
  getStorageSpy: GetStorageSpy
  httpClientSpy: HttpClientSpy<any, any>
}

const makeSut = (): SutTypes => {
  const getStorageSpy = new GetStorageSpy()
  const httpClientSpy = new HttpClientSpy<any, any>()
  const sut = new AuthorizeHttpClientDecorator(getStorageSpy, httpClientSpy)

  return {
    getStorageSpy,
    sut,
    httpClientSpy
  }
}

describe('AuthorizeHttpGetClient Decorator', () => {
  test('Should call GetStorage with correct value', async () => {
    const { getStorageSpy, sut } = makeSut()
    await sut.request(mockHttpRequest())
    expect(getStorageSpy.key).toBe('account')
  })

  test('Should not add headers if GetStorage is invalid', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpRequest: HttpRequest<any> = {
      url: faker.internet.url(),
      method: faker.random.arrayElement(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']),
      headers: {
        field: faker.random.words()
      }
    }
    await sut.request(httpRequest)
    expect(httpClientSpy.url).toBe(httpRequest.url)
    expect(httpClientSpy.headers).toEqual(httpRequest.headers)
    expect(httpClientSpy.method).toEqual(httpRequest.method)
  })

  test('Should add headers to HttpClient', async () => {
    const { sut, getStorageSpy, httpClientSpy } = makeSut()
    getStorageSpy.value = mockAccountModel()
    const httpRequest: HttpRequest<any> = {
      url: faker.internet.url(),
      method: faker.random.arrayElement(['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
    }
    await sut.request(httpRequest)
    expect(httpClientSpy.url).toBe(httpRequest.url)
    expect(httpClientSpy.headers).toEqual({
      'x-access-token': getStorageSpy.value.accessToken
    })
    expect(httpClientSpy.method).toEqual(httpRequest.method)
  })

  test('Should merge headers to HttpClient', async () => {
    const { sut, getStorageSpy, httpClientSpy } = makeSut()
    getStorageSpy.value = mockAccountModel()
    const field = faker.random.words()
    const httpRequest: HttpRequest<any> = {
      url: faker.internet.url(),
      method: faker.random.arrayElement(['GET', 'POST', 'PUT', 'PATCH', 'DELETE']),
      headers: {
        field
      }
    }
    await sut.request(httpRequest)
    expect(httpClientSpy.url).toBe(httpRequest.url)
    expect(httpClientSpy.headers).toEqual({
      field,
      'x-access-token': getStorageSpy.value.accessToken
    })
    expect(httpClientSpy.method).toEqual(httpRequest.method)
  })

  test('Should return the same result as HttpClient', async () => {
    const { sut, httpClientSpy } = makeSut()
    const httpResponse = await sut.request(mockHttpRequest())
    expect(httpResponse).toEqual(httpClientSpy.response)
  })
})
