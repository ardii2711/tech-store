import * as z from "zod";

export interface ILogin {
  token: string;
}

export const loginSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email("Not a valid email"),
  password: z.string().min(6, { message: "Password must be at least 6 characters" }),
});

export const registerSchema = z
  .object({
    fullname: z.string().min(1, { message: "Full name is required" }),
    repassword: z.string().min(6, { message: "Retype password must be at least 6 characters" }),
  })
  .merge(loginSchema)
  .refine((data) => data.password === data.repassword, {
    message: "Passwords don't match",
    path: ["repassword"],
  });

export type LoginSchema = z.infer<typeof loginSchema>;
export type RegisterSchema = z.infer<typeof registerSchema>;