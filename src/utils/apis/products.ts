import axiosWithConfig from "./axios-with-config";
import { AddProductSchema, IProduct } from "../types/products";
import { IResponse } from "../types/api";
import { checkProperty, valueFormatData } from "../function";

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
};

export const addProduct = async (body: AddProductSchema) => {
  try {
    const formData = new FormData();
    let key: keyof typeof body;
    for (key in body) {
      if (checkProperty(body[key])) {
        formData.append(key, valueFormatData(body[key]));
      }
    }
    const response = await axiosWithConfig.post("/products", formData);
    return response.data as IResponse<IProduct>;
  } catch (error: any) {
    const { message } = error.response.data;
    throw Error(message);
  }
};
