import { LoadSurveyResult } from '@domain/usecases'
import faker from '@faker-js/faker'

export const mockSurveyResultModel = (): LoadSurveyResult.Model => ({
  question: faker.random.words(10),
  answers: [
    {
      answer: faker.random.words(4),
      image: faker.internet.url(),
      count: faker.datatype.number(),
      percent: faker.datatype.number(),
      isCurrentAccountAnswer: true
    },
    {
      answer: faker.random.words(4),
      count: faker.datatype.number(),
      percent: faker.datatype.number(),
      isCurrentAccountAnswer: false
    },
  ],
  date: faker.date.recent(),
})

export class LoadSurveyResultSpy implements LoadSurveyResult {
  callsCount = 0
  surveyResult = mockSurveyResultModel()

  async load(): Promise<LoadSurveyResult.Model> {
    this.callsCount++
    return this.surveyResult
  }
}
