import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { UploadIcon } from "lucide-react";

function AddProduct() {
  return (
    <Layout>
      <div className="flex py-6 md:py-12 flex-col items-center justify-center min-h-screen bg-muted/40">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Add New Product</CardTitle>
            <CardDescription>Fill out the form to add a new product to the store.</CardDescription>
          </CardHeader>
          <CardContent>
            <form className="grid gap-6">
              <div className="grid gap-3">
                <Label htmlFor="name">Product Name</Label>
                <Input id="name" type="text" placeholder="Enter product name" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="price">Price</Label>
                <Input id="price" type="number" placeholder="Enter product price" min="0" step="0.01" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="category">Category</Label>
                <Select required>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="electronics">Electronics</SelectItem>
                    <SelectItem value="apparel">Apparel</SelectItem>
                    <SelectItem value="home">Home</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                    <SelectItem value="beauty">Beauty</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="grid gap-3">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Enter product description" rows={4} required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="stock">Stock</Label>
                <Input id="stock" type="number" placeholder="Enter product stock" min="0" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="image">Product Image</Label>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm">
                    <UploadIcon className="h-4 w-4" />
                    <span>Upload Image</span>
                  </Button>
                  <input id="image-upload" type="file" className="hidden" required />
                </div>
              </div>
            </form>
          </CardContent>
          <CardFooter className="flex justify-end gap-2">
            <Button variant="outline">Cancel</Button>
            <Button type="submit">Save Product</Button>
          </CardFooter>
        </Card>
      </div>
    </Layout>
  );
}

export default AddProduct;
