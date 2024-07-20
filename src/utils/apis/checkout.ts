import axiosWithConfig from "./axios-with-config";
import { ICheckOut } from "../types/checkout";
import { IResponse } from "../types/api";

export const addCheckOut = async (shipping_address: string) => {
  try {
    console.log("Mengirim request dengan body:", { shipping_address });
    const response = await axiosWithConfig.post(`/checkout`, { shipping_address });
    return response.data as IResponse<ICheckOut>;
  } catch (error: any) {
    const { message } = error.response.data;
    throw Error(message);
  }
};
