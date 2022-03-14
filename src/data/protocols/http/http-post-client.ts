import { HttpResponse } from '.'

export type HttpPostParams<T> = {
  url: string
  body?: T
}

export interface HttpPostClient<BodyTye, ResponseType> {
  post(params: HttpPostParams<BodyTye>): Promise<HttpResponse<ResponseType>>
}
