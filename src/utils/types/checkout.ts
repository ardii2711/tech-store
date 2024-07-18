import { z } from "zod";

export interface ICheckOut {
  shippingAddress: string;
}

export const checkOutSchema = z.object({
  fullname: z.string().min(1, { message: "Full name is required" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  address: z.string().min(1, { message: "Address is required" }),
});

export type CheckOutSchema = z.infer<typeof checkOutSchema>;