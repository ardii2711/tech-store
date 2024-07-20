import axiosWithConfig from "./axios-with-config";
import { IResponse } from "../types/api";
import { ICart } from "../types/carts";

export const addProductToCart = async (product_id: number, qty: number = 1) => {
  try {
    const response = await axiosWithConfig.post(`/cartitems`, { product_id, qty });
    return response.data as IResponse<ICart>;
  } catch (error: any) {
    const { message } = error.response.data;
    throw Error(message);
  }
};

export const updateCartItemQuantity = async (product_id: number, qty: number) => {
  try {
    const response = await axiosWithConfig.post(`/cartitems`, { product_id, qty });
    return response.data as IResponse<ICart>;
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

export const deleteCartItem = async (item_id: number) => {
  try {
    const response = await axiosWithConfig.delete(`/cartitems/${item_id}`);
    return response.data as IResponse<ICart>;
  } catch (error: any) {
    const { message } = error.response.data;
    throw Error(message);
  }
};
