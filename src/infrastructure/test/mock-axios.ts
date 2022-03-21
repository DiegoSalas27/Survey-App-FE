import faker from '@faker-js/faker'
import axios from 'axios'

export const mockHttpResponse = (): any => ({
  data: {},
  status: faker.datatype.number()
})

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockAxios = axios as jest.Mocked<typeof axios>
  mockAxios.request.mockClear().mockResolvedValue(mockHttpResponse())
  return mockAxios
}
