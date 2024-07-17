import Layout from "@/components/layout";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <Layout>
      <div className="flex items-center justify-center min-h-screen">
        <div className="bg-background rounded-lg shadow p-6 sm:p-8 text-center w-full max-w-md mx-4">
          <h2 className="text-2xl font-bold mb-6">Profile</h2>
          <div className="grid gap-6">
            <div className="flex justify-center">
              <Avatar className="w-16 h-16">
                <AvatarImage src="https://images.unsplash.com/photo-1599566150163-29194dcaad36" className="rounded-full w-full h-full object-cover" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex items-center gap-4">
              <div className="grid gap-1 mx-auto">
                <div className="text-base font-medium ">John Doe</div>
                <div className="text-muted-foreground text-sm">johndoe@example.com</div>
              </div>
            </div>
            <div className="grid gap-1">
              <label className="text-sm font-medium text-muted-foreground">Phone</label>
              <div className="text-base font-medium">+1234567890</div>
            </div>
            <div className="grid gap-1">
              <label className="text-sm font-medium text-muted-foreground">Address</label>
              <div className="text-base font-medium">123 Street, City, Country</div>
            </div>
            <div className="flex gap-2 justify-center">
              <Button size="sm">
                <Link to={"/profile/edit"}>Edit Profile</Link>
              </Button>
              <Button size="sm">
                <Link to={"/manage-product"}>Manage your Products</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Profile;
