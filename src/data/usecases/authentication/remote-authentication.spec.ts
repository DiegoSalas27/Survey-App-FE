import { HttpClientSpy } from '@data/test'
import faker from '@faker-js/faker'
import { RemoteAuthentication } from './remote-authentication'
import {
  Authentication,
  AccountModel,
  mockAuthenticationParams,
  HttpStatusCode,
  InvalidCredentialsError,
  UnexpectedError,
  mockAccountModel
} from './remote-authentication-protocols'

type SutTypes = {
  httpClientSpy: HttpClientSpy<Authentication.Params, AccountModel>
  sut: RemoteAuthentication
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<Authentication.Params, AccountModel>()
  const sut = new RemoteAuthentication(url, httpClientSpy)

  return {
    httpClientSpy,
    sut
  }
}

describe('RemoteAuthentication UseCase', () => {
  test('Should call httpClient with correct URL and Method', async () => {
    const url = faker.internet.url()
    const { httpClientSpy, sut } = makeSut(url)
    await sut.auth(mockAuthenticationParams())
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('POST')
  })

  test('Should call httpClient with correct body', async () => {
    const { httpClientSpy, sut } = makeSut()
    const authParams = mockAuthenticationParams()
    await sut.auth(authParams)
    expect(httpClientSpy.body).toEqual(authParams)
  })

  test('Should throw InvalidCredentialsError if HttpPostClient returns 401', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.unauthorized }
    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow(new InvalidCredentialsError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.badRequest }
    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.serverError }
    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.notFound }
    const promise = sut.auth(mockAuthenticationParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return an AddAccount.Model if HttpPostClient returns 200', async () => {
    const { httpClientSpy, sut } = makeSut()
    const httpResult = mockAccountModel()
    httpClientSpy.response = { statusCode: HttpStatusCode.ok, body: httpResult }
    const account = await sut.auth(mockAuthenticationParams())
    await expect(account).toEqual(httpResult)
  })
})
