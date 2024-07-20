import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { CustomFormField } from "@/components/custom-formfield";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import Layout from "@/components/layout";

import { registerSchema, RegisterSchema } from "@/utils/types/auth";
import { userRegister } from "@/utils/apis/auth";

function Register() {
  const navigate = useNavigate();

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
      repassword: "",
    },
  });

  async function onSubmit(data: RegisterSchema) {
    try {
      const response = await userRegister(data);
      toast.success(response.message);
      navigate("/login");
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  return (
    <Layout>
      <div className="lg:grid lg:grid-cols-2 lg:min-h-screen w-full">
        <div className="hidden lg:flex items-center justify-center p-6 lg:p-10">
          <div className="max-w-[500px] space-y-4">
            <img src="/image-auth.jpg" width="500" height="400" alt="Computer image" className="rounded-lg" />
            <div className="space-y-2 text-center lg:text-left">
              <h2 className="text-3xl font-bold">Find the best computer equipment at Tech Store</h2>
              <p className="text-muted-foreground">Shop our wide selection of laptops, desktops, and accessories to upgrade your setup.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 lg:p-10">
          <div className="mx-auto w-full max-w-md space-y-6 p-6 bg-secondary rounded-lg shadow-lg">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Create an Account</h1>
              <p className="text-muted-foreground">Enter your details below</p>
            </div>
            <Form {...form}>
              <form data-testid="form-login" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <CustomFormField control={form.control} name="fullname" label="Full Name">
                  {(field) => (
                    <Input
                      data-testid="input-full-name"
                      placeholder="John Doe"
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                      {...field}
                    />
                  )}
                </CustomFormField>
                <CustomFormField control={form.control} name="email" label="Email">
                  {(field) => (
                    <Input
                      data-testid="input-email"
                      placeholder="johndoe@mail.com"
                      type="email"
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                      {...field}
                    />
                  )}
                </CustomFormField>
                <CustomFormField control={form.control} name="password" label="Password">
                  {(field) => (
                    <Input
                      data-testid="input-password"
                      placeholder="Password"
                      type="password"
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                      {...field}
                    />
                  )}
                </CustomFormField>
                <CustomFormField control={form.control} name="repassword" label="Confirm Password">
                  {(field) => (
                    <Input
                      data-testid="input-repassword"
                      placeholder="Confirm Password"
                      type="password"
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                      {...field}
                    />
                  )}
                </CustomFormField>
                <Button
                  data-testid="btn-submit"
                  type="submit"
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                  aria-disabled={form.formState.isSubmitting}
                >
                  Create Account
                </Button>
              </form>
            </Form>
            <div className="text-center">
              <p className="text-muted-foreground">
                Already have an account?{" "}
                <Link to={"/login"} className="underline text-primary">
                  Login
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Register;
