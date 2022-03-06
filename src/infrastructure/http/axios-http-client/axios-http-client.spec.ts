import axios from 'axios'
import faker from '@faker-js/faker'
import { AxiosHttpClient } from './axios-http-client'
import { HttpPostParams } from '@data/protocols/http'

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>

const makeSut = (): AxiosHttpClient => new AxiosHttpClient()

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: {}
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockAxios.post).toHaveBeenCalledWith(request.url,  request.body)
  })
})
