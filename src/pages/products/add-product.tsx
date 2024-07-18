import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Layout from "@/components/layout";

import { addProductSchema, AddProductSchema } from "@/utils/types/products";
import { addProduct } from "@/utils/apis/products";
import { Form } from "@/components/ui/form";
import { CustomFormField } from "@/components/custom-formfield";

function AddProduct() {
  const navigate = useNavigate();

  const form = useForm<AddProductSchema>({
    resolver: zodResolver(addProductSchema),
    defaultValues: {
      name: "",
      description: "",
      category: "",
      price: 0,
      stock: 0,
      product_image: new File([], ""),
    },
  });

  async function onSubmit(data: AddProductSchema) {
    try {
      data.price = Number(data.price);
      const response = await addProduct(data);
      toast.success(response.message);
      navigate("/products/manage");
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  return (
    <Layout>
      <div className="flex py-6 md:py-12 flex-col items-center justify-center min-h-screen bg-muted/40">
        <Card className="w-full max-w-2xl">
          <CardHeader>
            <CardTitle>Add New Product</CardTitle>
            <CardDescription>Fill out the form to add a new product to the store.</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <CustomFormField control={form.control} name="name" label="Product Name">
                  {(field) => <Input {...field} placeholder="Asus ROG Strix G15" disabled={form.formState.isSubmitting} aria-disabled={form.formState.isSubmitting} value={field.value as string} />}
                </CustomFormField>
                <CustomFormField control={form.control} name="price" label="Price">
                  {(field) => (
                    <Input
                      {...field}
                      placeholder="300"
                      type="number" // Ensure input type is 'number'
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                      value={field.value as string}
                    />
                  )}
                </CustomFormField>
                <CustomFormField control={form.control} name="category" label="Category">
                  {(field) => <Input {...field} placeholder="Laptop gaming" disabled={form.formState.isSubmitting} aria-disabled={form.formState.isSubmitting} value={field.value as string} />}
                </CustomFormField>
                <CustomFormField control={form.control} name="stock" label="Stock">
                  {(field) => <Input {...field} placeholder="10" disabled={form.formState.isSubmitting} aria-disabled={form.formState.isSubmitting} value={field.value as string} />}
                </CustomFormField>
                <CustomFormField control={form.control} name="description" label="Description">
                  {(field) => <Textarea {...field} placeholder="Description" disabled={form.formState.isSubmitting} aria-disabled={form.formState.isSubmitting} value={field.value as string} className="h-32" />}
                </CustomFormField>
                <CustomFormField control={form.control} name="product_image" label="Product Image">
                  {(field) => (
                    <Input
                      type="file"
                      accept="image/png, image/jpeg, image/jpg"
                      multiple={false}
                      disabled={form.formState.isSubmitting}
                      aria-disabled={form.formState.isSubmitting}
                      onChange={(e) => field.onChange(e.target.files ? e.target.files[0] : null)}
                    />
                  )}
                </CustomFormField>
                <CardFooter className="flex justify-end gap-2">
                  <Button variant="outline">Cancel</Button>
                  <Button type="submit">Save Product</Button>
                </CardFooter>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}

export default AddProduct;
