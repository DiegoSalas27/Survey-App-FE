import { mockRemoteSurveyResultModel } from '@data/test'
import { AccessDeniedError, UnexpectedError } from '@domain/errors'
import { mockSaveSurveyResultParams } from '@domain/test'
import faker from '@faker-js/faker'
import { HttpClientSpy, HttpStatusCode } from '../authentication/remote-authentication-protocols'
import { RemoteSaveSurveyResult } from './remote-save-survey-result'

type SutTypes = {
  httpClientSpy: HttpClientSpy<any, any>
  sut: RemoteSaveSurveyResult
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<any, any>()
  const sut = new RemoteSaveSurveyResult(url, httpClientSpy)
  return {
    httpClientSpy,
    sut
  }
}

describe('RemoteSaveSurveyResult', () => {
  test('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const { httpClientSpy, sut } = makeSut(url)
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: mockRemoteSurveyResultModel()
    }
    const saveSurveyResultParams = mockSaveSurveyResultParams()
    await sut.save(saveSurveyResultParams)
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('PUT')
    expect(httpClientSpy.body).toEqual(saveSurveyResultParams)
  })

  test('Should throw AccessDeniedError if HttpClient returns 403', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.forbidden
    }
    const promise = sut.save(mockSaveSurveyResultParams())
    await expect(promise).rejects.toThrow(new AccessDeniedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 404', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.notFound }
    const promise = sut.save(mockSaveSurveyResultParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 500', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.serverError }
    const promise = sut.save(mockSaveSurveyResultParams())
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })
})
