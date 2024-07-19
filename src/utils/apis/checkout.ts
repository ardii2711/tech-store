import { IResponse } from "../types/api";
import { CheckOutSchema } from "../types/checkout";
import axiosWithConfig from "./axios-with-config";

export const addCheckOut = async (shipping_address: string) => {
  try {
    console.log('Mengirim request dengan body:', { shipping_address });
    const response = await axiosWithConfig.post(`/checkout`, { shipping_address });
    console.log('Response dari server:', response.data);
    return response.data as IResponse<CheckOutSchema>;
  } catch (error: any) {
    console.error('Error dari server:', error.response.data);
    const { message } = error.response.data;
    throw Error(message);
  }
};