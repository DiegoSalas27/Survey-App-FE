import axios from 'axios'
import faker from '@faker-js/faker'
import { AxiosHttpClient } from './axios-http-client'
import { HttpPostParams } from '@data/protocols/http'

jest.mock('axios')
const mockAxios = axios as jest.Mocked<typeof axios>
const mockAxiosResult = {
  data: {},
  status: faker.random.number()
}

mockAxios.post.mockResolvedValue(mockAxiosResult)

const makeSut = (): AxiosHttpClient<any, any> => new AxiosHttpClient()

const mockPostRequest = (): HttpPostParams<any> => ({
  url: faker.internet.url(),
  body: {}
})

describe('AxiosHttpClient', () => {
  test('Should call axios with correct values', async () => {
    const request = mockPostRequest()
    const sut = makeSut()
    await sut.post(request)
    expect(mockAxios.post).toHaveBeenCalledWith(request.url, request.body)
  })

  test('Should return the correct statusCode and body', async () => {
    const sut = makeSut()
    const httpResponse = await sut.post(mockPostRequest())
    expect(httpResponse).toEqual({
      statusCode: mockAxiosResult.status,
      body: mockAxiosResult.data
    })
  })
})
