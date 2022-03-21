import { HttpClient, HttpStatusCode } from '@data/protocols/http'
import { AccessDeniedError, UnexpectedError } from '@domain/errors'
import { LoadSurveyResult } from '@domain/usecases'

export class RemoteLoadSurveyResult implements LoadSurveyResult {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<any, RemoteLoadSurveyResult.Model>
  ) {}

  async load(): Promise<LoadSurveyResult.Model> {
    const httpResponse = await this.httpClient.request({ url: this.url, method: 'GET' })
    const remoteSurveyResult = httpResponse.body
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return remoteSurveyResult
          ? (Object.assign({}, remoteSurveyResult, {
              date: new Date(remoteSurveyResult.date)
            }) as any) : null
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError()
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteLoadSurveyResult {
  export type Model = {
    question: string
    answers: Array<{
      image?: string
      answer: string
      count: number
      percent: number
      isCurrentAccountAsnwer: boolean
    }>
    date: string
  }
}
