import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

function EditProduct() {
  return (
    <Layout>
      <div className="flex justify-center py-6 md:py-12">
        <div className="w-full max-w-screen-sm">
          <Card>
            <CardHeader>
              <CardTitle>Update Your Product</CardTitle>
              <CardDescription>Lipsum dolor sit amet, consectetur adipiscing elit</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="grid gap-3">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" type="text" className="w-full" defaultValue="Gamer Gear Pro Controller" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" type="number" className="w-full" defaultValue="99.99" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea
                    id="description"
                    defaultValue="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisl nec ultricies ultricies, nunc nisl ultricies nunc, nec ultricies nunc nisl nec nunc."
                    className="min-h-32"
                  />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="stock">Stock</Label>
                  <Input id="stock" type="number" className="w-full" defaultValue="100" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="image">Image</Label>
                  <Input id="image" type="file" className="w-full" />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button>Save</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default EditProduct;
