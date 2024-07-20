import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout";

import { getDetailProduct, editProduct } from "@/utils/apis/products";

function EditProductPage() {
  const { product_id } = useParams<{ product_id: string }>();
  const navigate = useNavigate();
  const [product, setProduct] = useState({
    name: "",
    price: 0,
    description: "",
    stock: 0,
    product_image: null as File | null,
  });

  useEffect(() => {
    if (product_id) {
      fetchProductDetails();
    }
  }, [product_id]);

  const fetchProductDetails = async () => {
    try {
      const response = await getDetailProduct(Number(product_id));
      setProduct({
        name: response.data.name,
        price: response.data.price,
        description: response.data.description,
        stock: response.data.stock,
        product_image: null,
      });
    } catch (error) {
      toast.error("Failed to fetch product details");
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setProduct((prev) => ({ ...prev, [id]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setProduct((prev) => ({ ...prev, product_image: file }));
  };

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("name", product.name);
    formData.append("price", product.price.toString());
    formData.append("description", product.description);
    formData.append("stock", product.stock.toString());
    if (product.product_image) {
      formData.append("product_image", product.product_image);
    }

    try {
      await editProduct(formData, Number(product_id));
      toast.success("Product updated successfully");
      navigate("/products/manage");
    } catch (error) {
      toast.error("Failed to update product");
    }
  };

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
                  <Input id="name" type="text" className="w-full" value={product.name} onChange={handleInputChange} />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="price">Price</Label>
                  <Input id="price" type="number" className="w-full" value={product.price} onChange={handleInputChange} />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="description">Description</Label>
                  <Textarea id="description" value={product.description} onChange={handleInputChange} className="min-h-32" />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="stock">Stock</Label>
                  <Input id="stock" type="number" className="w-full" value={product.stock} onChange={handleInputChange} />
                </div>
                <div className="grid gap-3">
                  <Label htmlFor="product_image">Image</Label>
                  <Input id="product_image" type="file" className="w-full" onChange={handleFileChange} />
                </div>
                <div className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button onClick={handleSubmit}>Save</Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}

export default EditProductPage;
