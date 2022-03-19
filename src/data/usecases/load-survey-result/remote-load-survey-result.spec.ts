import { mockRemoteSurveyResultModel } from '@data/test'
import { AccessDeniedError, UnexpectedError } from '@domain/errors'
import { LoadSurveyResult } from '@domain/usecases'
import faker from '@faker-js/faker'
import { HttpGetClientSpy, HttpStatusCode } from '../authentication/remote-authentication-protocols'
import { RemoteLoadSurveyResult } from './remote-load-survey-result'

type SutTypes = {
  httpGetClientSpy: HttpGetClientSpy
  sut: RemoteLoadSurveyResult
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<LoadSurveyResult.Model>()
  const sut = new RemoteLoadSurveyResult(url, httpGetClientSpy)
  return {
    httpGetClientSpy,
    sut
  }
}

describe('RemoteLoadSurveyResult', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const { httpGetClientSpy, sut } = makeSut(url)
    await sut.load()
    expect(httpGetClientSpy.url).toBe(url)
  })

  test('Should throw AccessDeniedError if HttpGetClient returns 403', async () => {
    const { httpGetClientSpy, sut } = makeSut()
    httpGetClientSpy.response = {
      statusCode: HttpStatusCode.forbidden
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new AccessDeniedError())
  })

  test('Should throw UnexpectedError if HttpGetClient returns 404', async () => {
    const { httpGetClientSpy, sut } = makeSut()
    httpGetClientSpy.response = { statusCode: HttpStatusCode.notFound }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpGetClient returns 500', async () => {
    const { httpGetClientSpy, sut } = makeSut()
    httpGetClientSpy.response = { statusCode: HttpStatusCode.serverError }
    const promise = sut.load()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return a SurveyResult on 200', async () => {
    const { httpGetClientSpy, sut } = makeSut()
    const httpResult = mockRemoteSurveyResultModel()
    httpGetClientSpy.response = {
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