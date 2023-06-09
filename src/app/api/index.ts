import { IResponse, ResponseMessage } from "../types/ResponseType";
import { getRandom } from "../utils/getRandom";

export const fetchPaymentResponse = () => {
  const response = new Promise<IResponse>((resolve) => {
    setTimeout(() => {
      if (getRandom()) {
        resolve({
          fetched: true,
          isSuccess: true,
          message: ResponseMessage.Success,
        });
      } else {
        resolve({
          fetched: true,
          isSuccess: false,
          message: ResponseMessage.Failure,
        });
      }
    }, 3000);
  });

  return response;
};
