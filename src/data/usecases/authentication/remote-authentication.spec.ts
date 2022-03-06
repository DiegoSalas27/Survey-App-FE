import { faker } from '@faker-js/faker'
import { HttpPostClientSpy } from '@data/test/mock-http-client'
import { RemoteAuthentication } from './remote-authentication'

type SutTypes = {
  httpPostClientSpy: HttpPostClientSpy
  sut: RemoteAuthentication
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpPostClientSpy = new HttpPostClientSpy()
  const sut = new RemoteAuthentication(url, httpPostClientSpy)

  return {
    httpPostClientSpy,
    sut
  }
}

describe('RemoteAuthentication UseCase', () => {
  test('Should call httpPostClient with correct URL', async () => {
    const url = faker.internet.url()
    const { httpPostClientSpy, sut } = makeSut(url)
    await sut.auth()
    expect(httpPostClientSpy.url).toBe(url)
  })
})
