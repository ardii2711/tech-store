import Layout from "@/components/layout";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Profile() {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
          <div className="bg-background rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Profile</h2>
            <div className="grid gap-4">
              <div className="flex items-center gap-4">
                <Avatar className="w-16 h-16">
                  <AvatarImage src="/placeholder-user.jpg" className="rounded-full w-full h-full object-cover" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <div className="grid gap-1">
                  <div className="text-base font-medium">John Doe</div>
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
              <div className="flex gap-2">
                <Button size="sm">
                  <Link to={"/profile/edit"}>Edit Profile</Link>
                </Button>
              </div>
            </div>
          </div>
          <div className="bg-background rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold mb-4">Your Marketplace</h2>
            <div className="grid gap-4">
              <div className="bg-muted rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="text-base font-medium">High-End Gaming Laptop</div>
                  <div className="text-muted-foreground">$2500</div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="text-base font-medium">Wireless Ergonomic Mouse</div>
                  <div className="text-muted-foreground">$75</div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="text-base font-medium">Mechanical Keyboard with RGB</div>
                  <div className="text-muted-foreground">$150</div>
                </div>
              </div>
              <div className="bg-muted rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="text-base font-medium">Ultra-Wide Curved Monitor</div>
                  <div className="text-muted-foreground">$700</div>
                </div>
              </div>
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
