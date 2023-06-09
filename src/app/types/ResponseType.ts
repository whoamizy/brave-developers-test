export enum ResponseMessage {
  Success = "✅ Success",
  Failure = "❌ Error",
}

export type IResponse = {
  fetched: boolean;
  isSuccess: boolean;
  message: ResponseMessage;
};
