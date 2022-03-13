import { HttpGetClient, HttpStatusCode } from '@data/protocols/http'
import { SurveyModel } from '@domain/models'
import { LoadSurveyList } from '@domain/usecases'
import { UnexpectedError } from '../authentication/remote-authentication-protocols'

export class RemoteLoadSurveyList implements LoadSurveyList {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<SurveyModel[]>
  ) {}

  async loadAll(): Promise<SurveyModel[]> {
    const httpResponse = await this.httpGetClient.get({ url: this.url })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok:
        return httpResponse.body
      case HttpStatusCode.noContent:
        return []
      default:
        throw new UnexpectedError()
    }
  }
}
