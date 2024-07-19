import { z } from "zod";

export const checkOutSchema = z.object({
  fullname: z.string().min(1, { message: "Full name is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  shipping_address: z.string().min(1, { message: "Address is required" }),
});

export type CheckOutSchema = z.infer<typeof checkOutSchema>;

export interface ICheckOut {
  payment_url: string;
}