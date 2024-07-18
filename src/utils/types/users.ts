import { z } from "zod";

import { ACCEPTED_IMAGE_TYPES, MAX_MB, MAX_UPLOAD_SIZE } from "../const";

export const editProfileSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email("Not a valid email"),
  fullname: z.string().min(1, { message: "Full name is required" }),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  image_profile: z
    .instanceof(File)
    .refine((file) => !file || file.size <= MAX_UPLOAD_SIZE, `Max image size is ${MAX_MB}MB`)
    .refine((file) => !file || file.type === "" || ACCEPTED_IMAGE_TYPES.includes(file.type), "Only .jpg, .jpeg, and .png formats are supported"),
});
export type EditProfileSchema = z.infer<typeof editProfileSchema>;

export interface EditProfileForm {
  email: string;
  fullname: string;
  password: string;
  phone: string;
  address: string;
  image_profile: FileList;
}

export interface ProfileType {
  id: number;
  fullname: string;
  email: string;
  image_profile: string;
  address: string;
  phone: string;
  message?: string;
}
export interface deleteProfileType {
  message: string; // Contoh: Pesan sukses atau informasi terkait penghapusan akun
}
