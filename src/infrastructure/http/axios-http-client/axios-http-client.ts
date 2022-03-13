import axios, { AxiosResponse } from 'axios'
import { HttpPostClient, HttpPostParams, HttpResponse } from '@data/protocols/http'

export class AxiosHttpClient<BodyTye, ResponseType> implements HttpPostClient<BodyTye, ResponseType> {
  async post(params: HttpPostParams<BodyTye>): Promise<HttpResponse<ResponseType>> {
    let httpResponse: AxiosResponse<ResponseType, BodyTye>
    try {
      httpResponse = await axios.post(params.url, params.body)
    } catch (error: any) {
      httpResponse = error.response
    }
    return {
      statusCode: httpResponse.status,
      body: httpResponse.data
    }
  }
}
