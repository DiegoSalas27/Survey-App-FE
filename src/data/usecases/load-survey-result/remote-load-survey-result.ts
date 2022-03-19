import { HttpGetClient } from '@data/protocols/http'
import { LoadSurveyResult } from '@domain/usecases'

export class RemoteLoadSurveyResult {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient<LoadSurveyResult.Model[]>
  ) {}

  async load(): Promise<void> {
    await this.httpGetClient.get({ url: this.url })
  }
}
