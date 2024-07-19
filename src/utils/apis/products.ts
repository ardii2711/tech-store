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

export const deleteProduct = async (productId: number) => {
  try {
    const response = await axiosWithConfig.delete(`/products/${productId}`);
    return response.data as IResponse<null>;
  } catch (error: any) {
    const message = error.response?.data?.message || "An error occurred";
    throw new Error(message);
  }
};

export const editProduct = async (formData: FormData, product_id: number) => {
  try {
    const response = await axiosWithConfig.put(`/products/${product_id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data as IResponse<IProduct>;
  } catch (error: any) {
    const message = error.response?.data?.message || "An error occurred";
    throw new Error(message);
  }
};

export const getProductsByUser = async () => {
  try {
    const response = await axiosWithConfig.get(`/products/productbyowner?isPersonal=true`);
    return response.data;
  } catch (error) {
    throw new Error("Failed to fetch products");
  }
};
