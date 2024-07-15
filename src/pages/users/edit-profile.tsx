import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

function EditProfile() {
  return (
    <Layout>
      <Card className="w-full max-w-[600px] m-auto p-6 sm:p-8">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Edit Profile</CardTitle>
          <CardDescription>Update your personal information.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value="" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="name">Full Name</Label>
            <Input id="name" value="" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="password">Password</Label>
            <Input id="password" type="password" value={""} onChange={(e) => ({})} />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input id="phone" type="tel" value="" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Textarea id="address" rows={3} value="" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="profile-picture">Profile Picture</Label>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={"/placeholder-user.jpg"} />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Input id="profile-picture" type="file" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-end gap-3">
          <Button variant="destructive" onClick={() => ({})}>
            Delete Account
          </Button>
          <Button onClick={() => ({})}>Save Changes</Button>
        </CardFooter>
      </Card>
    </Layout>
  );
}
export default EditProfile;
