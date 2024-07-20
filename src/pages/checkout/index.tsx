import { zodResolver } from "@hookform/resolvers/zod";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CustomFormField } from "@/components/custom-formfield";
import { Separator } from "@/components/ui/separator";
import { Textarea } from "@/components/ui/textarea";
import CustomAlert from "@/components/custom-alert";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form } from "@/components/ui/form";
import Layout from "@/components/layout";

import { checkOutSchema, CheckOutSchema } from "@/utils/types/checkout";
import { addCheckOut } from "@/utils/apis/checkout";
import { formatCurrency } from "@/utils/function";
import { getCartItems } from "@/utils/apis/carts";
import { useToken } from "@/utils/contexts/token";
import { ICart } from "@/utils/types/carts";

function Checkout() {
  const [cart, setCart] = useState<ICart[]>([]);
  const { user } = useToken();
  const [paymentUrl, setPaymentUrl] = useState<string | null>(null);
  const navigate = useNavigate();

  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const form = useForm<CheckOutSchema>({
    resolver: zodResolver(checkOutSchema),
    defaultValues: {
      fullname: "",
      phone: "",
      shipping_address: "",
    },
  });

  useEffect(() => {
    form.setValue("fullname", user?.fullname ?? "");
    form.setValue("phone", user?.phone ?? "");
    form.setValue("shipping_address", user?.address ?? "");
  }, [user, form]);

  useEffect(() => {
    fetchCart();
  }, []);

  async function fetchCart() {
    try {
      const response = await getCartItems();
      const cartData: ICart[] = response.data || [];
      cartData.forEach((item) => {
        item.qty = item.qty || 1;
        item.id = item.product_id;
      });
      setCart(cartData);
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  async function handlePlaceOrder(data: CheckOutSchema) {
    try {
      const response = await addCheckOut(data.shipping_address);
      setPaymentUrl(response.data.payment_url);
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  function handleProceedPayment() {
    if (paymentUrl) {
      window.location.href = paymentUrl;
    }
  }

  function handleCancel() {
    navigate("/");
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
                    <CustomFormField control={form.control} name="shipping_address" label="Shipping Address">
                      {(field) => (
                        <Textarea
                          placeholder="123, Main Street, Lagos, Nigeria"
                          disabled={form.formState.isSubmitting}
                          aria-disabled={form.formState.isSubmitting}
                          {...field}
                        />
                      )}
                    </CustomFormField>
                    <CustomAlert
                      title="Place Order"
                      description="Are you sure you want to place this order? If you proceed, you will be redirected to the payment page."
                      onAction={handleProceedPayment}
                      onCancel={handleCancel}
                    >
                      <Button className="w-full" type="submit">
                        Place Order
                      </Button>
                    </CustomAlert>
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

export default Checkout;
