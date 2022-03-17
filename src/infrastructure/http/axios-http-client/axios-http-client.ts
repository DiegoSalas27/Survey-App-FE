import axios, { AxiosResponse } from 'axios'
import {
  HttpGetClient,
  HttpGetParams,
  HttpPostClient,
  HttpPostParams,
  HttpResponse
} from '@data/protocols/http'

export class AxiosHttpClient<BodyTye, ResponseType>
  implements HttpPostClient<BodyTye, ResponseType>, HttpGetClient<ResponseType> {
  async post(params: HttpPostParams<BodyTye>): Promise<HttpResponse<ResponseType>> {
    let axiosResponse: AxiosResponse<ResponseType, BodyTye>
    try {
      axiosResponse = await axios.post(params.url, params.body)
    } catch (error: any) {
      axiosResponse = error.response
    }
    return this.adapt(axiosResponse)
  }

  async get(params: HttpGetParams): Promise<HttpResponse<ResponseType>> {
    let axiosResponse
    try {
      axiosResponse = await axios.get(params.url, { headers: params.headers })
    } catch (error: any) {
      axiosResponse = error.response
    }
    return this.adapt(axiosResponse)
  }

  private adapt(axiosResponse: AxiosResponse<ResponseType, BodyTye>): HttpResponse<ResponseType> {
    return {
      statusCode: axiosResponse.status,
      body: axiosResponse.data
    }
  }
}
