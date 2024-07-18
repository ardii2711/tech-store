import axiosWithConfig from "./axios-with-config";
import { ICart, IResponseCart } from "../types/carts";
import { IResponse } from "../types/api";

export const addProductToCart = async (product_id: number, quantity: number) => {
  try {
    const response = await axiosWithConfig.post(`/cartitems`, { product_id, quantity });
    return response.data as IResponse<IResponseCart>;
  } catch (error: any) {
    const { message } = error.response.data;
    throw Error(message);
  }
};

export const getCartItems = async () => {
  try {
    const response = await axiosWithConfig.get("/cartitems");
    return response.data as IResponse<ICart[]>;
  } catch (error: any) {
    const { message } = error.response.data;
    throw Error(message);
  }
};
