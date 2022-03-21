export type HttpMethod = 'POST' | 'GET' | 'PUT' | 'PATCH' | 'DELETE'

export type HttpRequest<BodyType> = {
  url: string
  method: HttpMethod
  body?: BodyType
  headers?:  any
}

export interface HttpClient<BodyType = any, ResponseType = any> {
  request: (data: HttpRequest<BodyType>) => Promise<HttpResponse<ResponseType>>
}

export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500
}

export type HttpResponse<R> = {
  statusCode: HttpStatusCode
  body?: R
}