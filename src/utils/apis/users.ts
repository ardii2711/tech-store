import axiosWithConfig from "./axios-with-config";
import { ProfileType } from "../types/users";
import { IResponse } from "../types/api";
import { checkProperty, valueFormatData } from "../../utils/function";
import { EditProfileSchema } from "../../utils/types/users";

export const updateProfile = async (body: EditProfileSchema): Promise<ProfileType> => {
  try {
    const formData = new FormData();
    let key: keyof typeof body;

    for (key in body) {
      if (checkProperty(body[key])) {
        formData.append(key, valueFormatData(body[key]));
      }
    }

    const response = await axiosWithConfig.put<ProfileType>("/users", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error: any) {
    if (error.response && error.response.data && error.response.data.message) {
      const { message } = error.response.data;
      throw new Error(message);
    } else {
      throw new Error("Failed to update profile. Please try again later.");
    }
  }
};

export const getProfile = async () => {
  try {
    const response = await axiosWithConfig.get("/users");
    return response.data as IResponse<ProfileType>;
  } catch (error: any) {
    const { message } = error.response.data;
    throw Error(message);
  }
};

export const deleteProfile = async () => {
  try {
    const response = await axiosWithConfig.delete("/users");
    return response.data as IResponse<ProfileType>;
  } catch (error: any) {
    const { message } = error.response.data;
    throw Error(message);
  }
};
