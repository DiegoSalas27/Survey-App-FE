import { mockRemoteSurveyResultModel } from '@data/test'
import { AccessDeniedError, UnexpectedError } from '@domain/errors'
import faker from '@faker-js/faker'
import { HttpClientSpy, HttpStatusCode } from '../authentication/remote-authentication-protocols'
import { RemoteLoadSurveyResult } from './remote-load-survey-result'

type SutTypes = {
  httpClientSpy: HttpClientSpy<any, RemoteLoadSurveyResult.Model>
  sut: RemoteLoadSurveyResult
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<any, RemoteLoadSurveyResult.Model>()
  const sut = new RemoteLoadSurveyResult(url, httpClientSpy)
  return {
    httpClientSpy,
    sut
  }
}

describe('RemoteLoadSurveyResult', () => {
  test('Should call HttpClient with correct URL and Method', async () => {
    const url = faker.internet.url()
    const { httpClientSpy, sut } = makeSut(url)
    await sut.load()
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('GET')
  })

  test('Should throw AccessDeniedError if HttpClient returns 403', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.forbidden
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new AccessDeniedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 404', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.notFound }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 500', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.serverError }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return a SurveyResult on 200', async () => {
    const { httpClientSpy, sut } = makeSut()
    const httpResult = mockRemoteSurveyResultModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: httpResult
    }
    const httpResponse = await sut.load()
    expect(httpResponse).toEqual({
      question: httpResult.question,
      answers: httpResult.answers,
      date: new Date(httpResult.date)
    })
  })
})
