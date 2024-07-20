import axiosWithConfig from "./axios-with-config";
import { IResponse } from "../types/api";
import { IOrder } from "../types/orders";

export const getOrder = async (): Promise<IOrder[]> => {
  try {
    const response = await axiosWithConfig.get<IResponse<IOrder[]>>("/orders");
    return response.data.data;
  } catch (error: any) {
    const { message } = error.response.data;
    throw new Error(message);
  }
};
