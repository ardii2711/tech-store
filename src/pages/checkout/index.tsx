import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomFormField } from "@/components/custom-formfield";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import Layout from "@/components/layout";

import { checkOutSchema, CheckOutSchema } from "@/utils/types/checkout";
import { addCheckOut } from "@/utils/apis/checkout";
import { formatCurrency } from "@/utils/function";
import { ICart } from "@/utils/types/carts";

interface LocationState {
  state: {
    cart: ICart[];
  };
}

function Index() {
  const location = useLocation() as LocationState;
  const cart = location.state?.cart || [];
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
  const navigate = useNavigate();

  const form = useForm<CheckOutSchema>({
    resolver: zodResolver(checkOutSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      address: "",
    },
  });

  async function handlePlaceOrder(data: CheckOutSchema) {
    try {
      const response = await addCheckOut(data.address);
      toast.success(response.message);
      navigate("/");
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

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
                <CardTitle>Order Summary</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-6">
                  {cart.map((item) => (
                    <div key={item.id}>
                      <div className="flex items-start md:items-center gap-8 mb-1 justify-between">
                        <span className="text-muted-foreground">
                          {item.name} x {item.qty}
                        </span>
                        <span>{formatCurrency(item.price * item.qty)}</span>
                      </div>
                      <Separator />
                    </div>
                  ))}
                </div>
                <div className="grid gap-2">
                  <div className="flex items-center justify-between font-semibold">
                    <span className="text-muted-foreground">Total</span>
                    <span>{formatCurrency(totalPrice)}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Shipping Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Form {...form}>
                  <form onSubmit={form.handleSubmit(handlePlaceOrder)} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <CustomFormField control={form.control} name="fullname" label="Full Name">
                        {(field) => (
                          <Input
                            placeholder="John Doe"
                            type="text"
                            disabled={form.formState.isSubmitting}
                            aria-disabled={form.formState.isSubmitting}
                            {...field}
                          />
                        )}
                      </CustomFormField>
                      <CustomFormField control={form.control} name="phone" label="Phone Number">
                        {(field) => (
                          <Input
                            placeholder="08012345678"
                            type="tel"
                            disabled={form.formState.isSubmitting}
                            aria-disabled={form.formState.isSubmitting}
                            {...field}
                          />
                        )}
                      </CustomFormField>
                    </div>
                    <CustomFormField control={form.control} name="address" label="Address">
                      {(field) => (
                        <Textarea
                          placeholder="123, Main Street, Lagos, Nigeria"
                          disabled={form.formState.isSubmitting}
                          aria-disabled={form.formState.isSubmitting}
                          {...field}
                        />
                      )}
                    </CustomFormField>
                    <Button className="w-full" type="submit">
                      Place Order
                    </Button>
                  </form>
                </Form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
