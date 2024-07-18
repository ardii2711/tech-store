import axiosWithConfig from "./axios-with-config";
import { IProduct } from "../types/products";
import { IResponse } from "../types/api";

export const getProduct = async () => {
  try {
    const response = await axiosWithConfig.get("/products");
    return response.data as IResponse<IProduct[]>;
  } catch (error: any) {
    const { message } = error.response.data;
    throw Error(message);
  }
};

export const getDetailProduct = async (product_id: number) => {
  try {
    const response = await axiosWithConfig.get(`/products/${product_id}`);
    return response.data as IResponse<IProduct>;
  } catch (error: any) {
    const { message } = error.response.data;
    throw Error(message);
  }
}