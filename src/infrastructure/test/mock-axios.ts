import axios from 'axios'
import faker from '@faker-js/faker'

export const mockAxios = (): jest.Mocked<typeof axios> => {
  const mockAxios = axios as jest.Mocked<typeof axios>
  mockAxios.post.mockResolvedValue({
    data: {},
    status: faker.random.number()
  })

  return mockAxios
}
