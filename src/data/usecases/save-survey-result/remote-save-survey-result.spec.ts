import { mockRemoteSurveyResultModel } from '@data/test'
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
})
