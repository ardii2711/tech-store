import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { toast } from "sonner";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { CustomFormField } from "@/components/custom-formfield";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";

import { editProfileSchema, EditProfileSchema } from "@/utils/types/users";
import { updateProfile, deleteProfile } from "@/utils/apis/users";
import { useToken } from "@/utils/contexts/token";

function EditProfile() {
  const navigate = useNavigate();
  const { user, changeToken } = useToken();

  const methods = useForm<EditProfileSchema>({
    resolver: zodResolver(editProfileSchema),
    defaultValues: {
      email: user?.email ?? "",
      fullname: user?.fullname ?? "",
      password: "",
      phone: user?.phone ?? "",
      address: user?.address ?? "",
      image_profile: new File([], ""),
    },
  });

  const { handleSubmit, setValue } = methods;

  useEffect(() => {
    setValue("email", user?.email ?? "");
    setValue("fullname", user?.fullname ?? "");
    setValue("phone", user?.phone ?? "");
    setValue("address", user?.address ?? "");
  }, [user, setValue]);

  async function onSubmit(data: EditProfileSchema) {
    try {
      const response = await updateProfile(data);
      toast.success(response.message);
      navigate("/profile");
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  async function handleDelete() {
    try {
      const response = await deleteProfile();
      toast.success(response.message);
      changeToken();
      navigate("/login");
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      setValue("image_profile", files[0]);
    }
  };

  return (
    <Layout>
      <Card className="w-full max-w-[600px] m-auto p-6 sm:p-8 my-6 md:my-12">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Edit Profile</CardTitle>
          <CardDescription>Update your personal information.</CardDescription>
        </CardHeader>
        <CardContent className="grid gap-6">
          <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <CustomFormField control={methods.control} name="email" label="Email">
                {(field) => <Input {...field} data-testid="input-email" disabled={false} aria-disabled={false} />}
              </CustomFormField>
              <CustomFormField control={methods.control} name="fullname" label="Full Name">
                {(field) => <Input {...field} data-testid="input-fullname" disabled={false} aria-disabled={false} />}
              </CustomFormField>
              <CustomFormField control={methods.control} name="password" label="Password">
                {(field) => <Input {...field} type="password" data-testid="input-password" disabled={false} aria-disabled={false} />}
              </CustomFormField>
              <CustomFormField control={methods.control} name="phone" label="Phone Number">
                {(field) => <Input {...field} data-testid="input-phone" disabled={false} aria-disabled={false} />}
              </CustomFormField>
              <CustomFormField control={methods.control} name="address" label="Address">
                {(field) => <Input {...field} data-testid="input-address" placeholder="Lorem Ipsum Street" disabled={false} aria-disabled={false} />}
              </CustomFormField>
              <CustomFormField control={methods.control} name="image_profile" label="Profile Picture" description="Upload your profile picture">
                {(field) => (
                  <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                      <AvatarImage src={user?.image_profile || "/placeholder-user.jpg"} />
                      <AvatarFallback>{user?.fullname?.[0] ?? "?"}</AvatarFallback>
                    </Avatar>
                    <Input
                      data-testid="input-profile-picture"
                      type="file"
                      disabled={false}
                      aria-disabled={false}
                      onChange={(e) => {
                        field.onChange(e.target.files ? e.target.files[0] : null);
                        handleFileChange(e);
                      }}
                    />
                  </div>
                )}
              </CustomFormField>
              <CardFooter className="flex justify-end gap-3">
                <Button variant="destructive" onClick={handleDelete}>
                  Delete Account
                </Button>
                <Button type="submit">Save Changes</Button>
              </CardFooter>
            </form>
          </FormProvider>
        </CardContent>
      </Card>
    </Layout>
  );
}

export default EditProfile;
