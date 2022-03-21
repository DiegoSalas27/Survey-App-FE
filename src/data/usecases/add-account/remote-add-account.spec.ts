import { HttpClientSpy } from '@data/test'
import { EmailInUseError, UnexpectedError } from '@domain/errors'
import { mockAccountModel, mockAddAccountParams } from '@domain/test'
import { AddAccount } from '@domain/usecases'
import faker from '@faker-js/faker'
import { HttpStatusCode } from '../authentication/remote-authentication-protocols'
import { RemoteAddAccount } from './remote-add-account'

type SutTypes = {
  httpClientSpy: HttpClientSpy<AddAccount.Params, RemoteAddAccount.Model>
  sut: RemoteAddAccount
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<AddAccount.Params, RemoteAddAccount.Model>()
  const sut = new RemoteAddAccount(url, httpClientSpy)

  return {
    httpClientSpy,
    sut
  }
}

describe('RemoteAddAccount UseCase', () => {
  test('Should call httpClient with correct values', async () => {
    const url = faker.internet.url()
    const { httpClientSpy, sut } = makeSut(url)
    const addAccountParams = mockAddAccountParams()
    await sut.add(addAccountParams)
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('POST')
    expect(httpClientSpy.body).toEqual(addAccountParams)
  })

  test('Should throw EmailInUseError if HttpPostClient returns 403', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.forbidden }
    const promise = sut.add(mockAddAccountParams())
    await expect(promise).rejects.toThrow(new EmailInUseError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 400', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.badRequest }
    const promise = sut.add(mockAddAccountParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 500', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.serverError }
    const promise = sut.add(mockAddAccountParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpPostClient returns 404', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.notFound }
    const promise = sut.add(mockAddAccountParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return an AccountModel if HttpPostClient returns 200', async () => {
    const { httpClientSpy, sut } = makeSut()
    const httpResult = mockAccountModel()
    httpClientSpy.response = { statusCode: HttpStatusCode.ok, body: httpResult }
    const account = await sut.add(mockAddAccountParams())
    await expect(account).toEqual(httpResult)
  })
})
