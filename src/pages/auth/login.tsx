import { zodResolver } from "@hookform/resolvers/zod";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { CustomFormField } from "@/components/custom-formfield";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import Layout from "@/components/layout";

import { loginSchema, LoginSchema } from "@/utils/types/auth";
import { useToken } from "@/utils/contexts/token";
import { userLogin } from "@/utils/apis/auth";

function Login() {
  const { changeToken } = useToken();
  const navigate = useNavigate();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: LoginSchema) {
    try {
      const response = await userLogin(data);
      changeToken(response.data.token);
      toast.success(response.message);
      navigate("/");
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
              <h2 className="text-3xl font-bold">Welcome Back to Tech Store</h2>
              <p className="text-muted-foreground">Log in to access your account and continue shopping our wide selection of tech products.</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center p-6 lg:p-10">
          <div className="mx-auto w-full max-w-md space-y-6 p-6 bg-secondary rounded-lg shadow-lg">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Login to Your Account</h1>
              <p className="text-muted-foreground">Enter your credentials below</p>
            </div>
            <Form {...form}>
              <form data-testid="form-login" onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
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
                Don't have an account?{" "}
                <Link to={"/register"} className="underline text-primary">
                  Sign up
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Login;
