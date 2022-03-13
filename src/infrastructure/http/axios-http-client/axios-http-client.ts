import axios, { AxiosResponse } from 'axios'
import { HttpPostClient, HttpPostParams, HttpResponse } from '@data/protocols/http'

export class AxiosHttpClient<BodyTye, ResponseType> implements HttpPostClient<BodyTye, ResponseType> {
  async post(params: HttpPostParams<BodyTye>): Promise<HttpResponse<ResponseType>> {
    let axiosResponse: AxiosResponse<ResponseType, BodyTye>
    try {
      axiosResponse = await axios.post(params.url, params.body)
    } catch (error: any) {
      axiosResponse = error.response
    }
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
