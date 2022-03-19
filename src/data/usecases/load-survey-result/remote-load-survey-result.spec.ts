import { LoadSurveyResult } from '@domain/usecases'
import faker from '@faker-js/faker'
import { HttpGetClientSpy } from '../authentication/remote-authentication-protocols'
import { RemoteLoadSurveyResult } from './remote-load-survey-result'

type SutTypes = {
  httpGetClientSpy: HttpGetClientSpy
  sut: RemoteLoadSurveyResult
}

const makeSut = (url = faker.internet.url()): SutTypes => {
  const httpGetClientSpy = new HttpGetClientSpy<LoadSurveyResult.Model[]>()
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
})
