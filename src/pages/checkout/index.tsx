import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";

function Index() {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col gap-8">
        <div className="space-y-8">
          <div>
            <h1 className="text-3xl font-bold">Checkout</h1>
            <p className="text-muted-foreground">Review your order and complete checkout.</p>
          </div>
        </div>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="First Last" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input id="phone" type="tel" placeholder="+1 (555) 555-5555" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Address</Label>
                  <Textarea id="address" cols={4} placeholder="123 Main St" />
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-2">
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Gamer Gear Pro Controller x 1</span>
                    <span>$99.00</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-muted-foreground">Aqua Filters x 2</span>
                    <span>$98.00</span>
                  </div>
                </div>
                <Separator />
                <div className="grid gap-2">
                  <div className="flex items-center justify-between font-semibold">
                    <span className="text-muted-foreground">Total</span>
                    <span>$219.73</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Button className="w-full">Place Order</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
