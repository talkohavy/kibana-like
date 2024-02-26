declare type RestMethodNames = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

declare interface ApiRequest {
  /**
   * The method of the request. Options are: GET, POST, PUT, PATCH, DELETE.
   * @default "GET"
   */
  method: RestMethodNames;
  /**
   * The target URL of the request.
   */
  URL: string;
  /**
   * The required body object if the method is one of the following: POST,PUT,PATCH.
   */
  body?: object;
  /**
   * The config object of axios.
   */
  config?: object;
  /**
   * The onSuccess redux action for when a response is successful. Default is _null_.
   */
  onSuccess?: string;
  /**
   * The onFailure redux action for when a response is a failure. Default is _null_.
   */
  onFailure?: string;
}

export { ApiRequest, RestMethodNames };
