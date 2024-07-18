import * as z from "zod";

import { ACCEPTED_IMAGE_TYPES, MAX_MB, MAX_UPLOAD_SIZE } from "../const";

export const addProductSchema = z.object({
  name: z.string().min(1, { message: "Product name is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  category: z.string().min(1, { message: "Category is required" }),
  price: z.preprocess((a) => parseInt(z.string().parse(a), 10), z.number().gte(1, 'Price must be at least 1"')),
  stock: z.preprocess((a) => parseInt(z.string().parse(a), 10), z.number().gte(1, "Stock must be at least 1")),
  product_image: z
    .instanceof(File)
    .refine((file) => !file || file.size <= MAX_UPLOAD_SIZE, `Max image size is ${MAX_MB}MB`)
    .refine((file) => !file || file.type === "" || ACCEPTED_IMAGE_TYPES.includes(file.type), "Only .jpg, .jpeg, and .png formats are supported"),
});

export type AddProductSchema = z.infer<typeof addProductSchema>;

export interface IProduct {
  id: number;
  name: string;
  user_id: number;
  description: string;
  category: string;
  price: number;
  stock: number;
  image_url: string;
}
