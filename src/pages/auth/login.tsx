import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout";

function Login() {
  return (
    <Layout>
      <div className="grid lg:grid-cols-2 min-h-screen w-full">
        <div className="flex items-center justify-center p-6 lg:p-10">
          <div className="max-w-[500px] space-y-4">
            <img
              src=""
              width="500"
              height="400"
              alt="Computer image"
              className="rounded-lg"
            />
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
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter your password" required />
              </div>
              <Button type="submit" className="w-full">
                Log In
              </Button>
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
      </div>
    </Layout>
  );
}

export default Login;
