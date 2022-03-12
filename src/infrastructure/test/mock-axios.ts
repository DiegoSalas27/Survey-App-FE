import axios, { AxiosResponse } from 'axios'
import faker from '@faker-js/faker'

export const mockHttpResponse = (): any => ({
  data: {},
  status: faker.random.number()
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockAxios = axios as jest.Mocked<typeof axios>
  mockAxios.post.mockResolvedValue(mockHttpResponse())

  return mockAxios
}
