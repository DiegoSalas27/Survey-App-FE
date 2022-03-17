import { SurveyModel } from '@domain/models'
import faker from '@faker-js/faker'

export const mockRemoteSurveyModel = (): SurveyModel => ({
  id: faker.datatype.uuid(),
  question: faker.random.words(10),
  answers: [
    {
      answer: faker.random.words(4),
      image: faker.internet.url()
    },
    {
      answer: faker.random.words(5)
    }
  ],
  date: faker.date.recent(),
  didAnswer: faker.datatype.boolean()
})

export const mockRemoteSurveyListModel = (): SurveyModel[] => [
  mockRemoteSurveyModel(),
  mockRemoteSurveyModel(),
  mockRemoteSurveyModel()
]
