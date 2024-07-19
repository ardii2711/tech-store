import { IResponse } from "../types/api";
import { IOrder } from "../types/orders";
import axiosWithConfig from "./axios-with-config";

export const getOrder = async () => {
  try {
    const response = await axiosWithConfig.get("/orders");
    return response.data as IResponse<IOrder[]>;
  } catch (error: any) {
    const { message } = error.response.data;
    throw Error(message);
  }
};