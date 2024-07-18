import { AddProductSchema, IProduct } from "../types/products";
import { checkProperty, valueFormatData } from "../function";
import axiosWithConfig from "./axios-with-config";
import { IResponse } from "../types/api";

export const getProduct = async () => {
  try {
    const response = await axiosWithConfig.get("/products");
    return response.data as IResponse<IProduct[]>;
  } catch (error: any) {
    const message = error.response?.data?.message || "An error occurred";
    throw new Error(message);
  }
};

export const getDetailProduct = async (product_id: number) => {
  try {
    const response = await axiosWithConfig.get(`/products/${product_id}`);
    return response.data as IResponse<IProduct>;
  } catch (error: any) {
    const message = error.response?.data?.message || "An error occurred";
    throw new Error(message);
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
    const message = error.response?.data?.message || "An error occurred";
    throw new Error(message);
  }
};

export const getProductsByUser = async (userId: number) => {
  try {
    const response = await axiosWithConfig.get(`/users/${userId}/products`);
    return response.data as IResponse<IProduct[]>;
  } catch (error: any) {
    const message = error.response?.data?.message || "An error occurred";
    throw new Error(message);
  }
};

export const deleteProduct = async (productId: number) => {
  try {
    const response = await axiosWithConfig.delete(`/products/${productId}`);
    return response.data as IResponse<null>;
  } catch (error: any) {
    const message = error.response?.data?.message || "An error occurred";
    throw new Error(message);
  }
};
