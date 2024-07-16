import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout";

function Register() {
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
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Enter your name" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type="password" placeholder="Enter a password" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="password">Confirm Password</Label>
                <Input id="password" type="password" placeholder="Enter a password" required />
              </div>
              <Button type="submit" className="w-full">
                Create Account
              </Button>
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
      </div>
    </Layout>
  );
}

export default Register;
