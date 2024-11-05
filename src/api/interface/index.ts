
export interface Result {
  code: string;
  message: string;
}
export interface ResultData<T = any> extends Result {
  data?: T;
}