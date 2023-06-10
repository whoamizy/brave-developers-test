export enum ResponseMessage {
  Success = "✅ Success",
  Failure = "❌ Error",
}

export type IResponse = {
  isFetched: boolean;
  isSuccess: boolean;
  message: ResponseMessage;
};
