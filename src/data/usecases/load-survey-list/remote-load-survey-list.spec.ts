import { mockRemoteSurveyListModel } from '@data/test'
import { AccessDeniedError } from '@domain/errors'
import { SurveyModel } from '@domain/models'
import faker from '@faker-js/faker'
import {
  HttpClientSpy,
  HttpStatusCode,
  UnexpectedError
} from '../authentication/remote-authentication-protocols'
import { RemoteLoadSurveyList } from './remote-load-survey-list'

type SutTypes = {
  sut: RemoteLoadSurveyList
  httpClientSpy: HttpClientSpy<any, SurveyModel[]>
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy<any, SurveyModel[]>()
  const sut = new RemoteLoadSurveyList(url, httpClientSpy)

  return {
    httpClientSpy,
    sut
  }
}

describe('RemoteLoadSurveyList', () => {
  test('Should call HttpClient with correct URL and Method', async () => {
    const url = faker.internet.url()
    const { httpClientSpy, sut } = makeSut(url)
    await sut.loadAll()
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('GET')
  })

  test('Should throw AccessDeniedError if HttpClient returns 403', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.forbidden }
    const promise = sut.loadAll()
    await expect(promise).rejects.toThrow(new AccessDeniedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 404', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.notFound }
    const promise = sut.loadAll()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should throw UnexpectedError if HttpClient returns 500', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.serverError }
    const promise = sut.loadAll()
    await expect(promise).rejects.toThrow(new UnexpectedError())
  })

  test('Should return a list of SurveyModel if HttpClient returns 200', async () => {
    const { httpClientSpy, sut } = makeSut()
    const httpResult = mockRemoteSurveyListModel()
    httpClientSpy.response = { statusCode: HttpStatusCode.ok, body: httpResult }
    const surveyList = await sut.loadAll()
    expect(surveyList).toEqual(httpResult)
  })

  test('Should return no content if HttpClient returns 204', async () => {
    const { httpClientSpy, sut } = makeSut()
    httpClientSpy.response = { statusCode: HttpStatusCode.noContent }
    const surveyList = await sut.loadAll()
    expect(surveyList).toEqual([])
  })
})
