import { LoadSurveyResult } from '@domain/usecases'
import faker from '@faker-js/faker'
import { HttpGetClientSpy } from '../authentication/remote-authentication-protocols'
import { RemoteLoadSurveyResult } from './remote-load-survey-result'

describe('RemoteLoadSurveyResult', () => {
  test('Should call HttpGetClient with correct URL', async () => {
    const url = faker.internet.url()
    const httpGetClientSpy = new HttpGetClientSpy<LoadSurveyResult.Model[]>()
    const sut = new RemoteLoadSurveyResult(url, httpGetClientSpy)
    await sut.load()
    expect(httpGetClientSpy.url).toBe(url)
  })
})
