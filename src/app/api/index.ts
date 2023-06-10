import { IResponse, ResponseMessage } from "../types/ResponseType";
import { getRandomBool } from "../utils/getRandomBool";

export const fetchPaymentResponse = () => {
  const response = new Promise<IResponse>((resolve) => {
    setTimeout(() => {
      if (getRandomBool()) {
        resolve({
          isFetched: true,
          isSuccess: true,
          message: ResponseMessage.Success,
        });
      } else {
        resolve({
          isFetched: true,
          isSuccess: false,
          message: ResponseMessage.Failure,
        });
      }
    }, 3000);
  });

  return response;
};
