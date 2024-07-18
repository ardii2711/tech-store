import { IResponse } from "../types/api";
import { ICheckOut } from "../types/checkout";
import axiosWithConfig from "./axios-with-config";

export const addCheckOut = async (shippingAddress: string) => {
  try {
    const response = await axiosWithConfig.post(`/checkout`, { shippingAddress });
    return response.data as IResponse<ICheckOut>;
  } catch (error: any) {
    const { message } = error.response.data;
    throw Error(message);
  }
};