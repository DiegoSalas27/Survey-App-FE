import { RemoteSurveyResultModel } from '@data/models'
import { HttpClient, HttpStatusCode } from '@data/protocols/http'
import { AccessDeniedError } from '@domain/errors'
import { SaveSurveyResult } from '@domain/usecases'
import { UnexpectedError } from '../authentication/remote-authentication-protocols'

export class RemoteSaveSurveyResult implements SaveSurveyResult {
  constructor(
    private readonly url: string,
    private readonly httpClient: HttpClient<any, RemoteSaveSurveyResult.Model>
  ) {}

  async save(params: SaveSurveyResult.Params): Promise<SaveSurveyResult.Model> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'PUT',
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return null
      case HttpStatusCode.forbidden:
        throw new AccessDeniedError()
      default:
        throw new UnexpectedError()
    }
  }
}

export namespace RemoteSaveSurveyResult {
  export type Model = RemoteSurveyResultModel
}
