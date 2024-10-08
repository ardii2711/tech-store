import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

import { addProductToCart, getCartItems } from "@/utils/apis/carts";
import { getDetailProduct } from "@/utils/apis/products";
import { formatCurrency } from "@/utils/function";
import { IProduct } from "@/utils/types/products";
import { useToken } from "@/utils/contexts/token";

function DetailProduct() {
  const { user } = useToken();
  const [data, setData] = useState<IProduct>();
  const [isInCart, setIsInCart] = useState(false);
  const params = useParams();

  useEffect(() => {
    fetchData();
    checkIfInCart();
  }, []);

  async function fetchData() {
    try {
      const response = await getDetailProduct(+params.product_id!);
      setData(response.data);
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  async function checkIfInCart() {
    try {
      const response = await getCartItems();
      const cartItems = response.data || [];
      const productInCart = cartItems.find((item) => item.product_id === +params.product_id!);
      if (productInCart) {
        setIsInCart(true);
      }
    } catch (error) {
      error as Error;
    }
  }

  async function handleAddToCart() {
    try {
      const response = await addProductToCart(+params.product_id!, 1);
      toast.success(response.message);
      setIsInCart(true);
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  const isOwnProduct = data?.user_id === user?.id;

  return (
    <Layout>
      <div className="bg-background text-foreground">
        <div className="container mx-auto px-4 md:px-12 py-12 md:py-16 lg:py-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            <div className="flex items-center justify-center">
              <img
                src={data?.image_url}
                alt="Product Image"
                width={400}
                height={400}
                className="w-full max-h-[300px] md:max-h-[400px] lg:max-h-[500px] object-cover rounded-lg"
              />
            </div>
            <div className="grid gap-6 md:gap-8 lg:gap-10">
              <div>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">{data?.name}</h1>
                <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                  <span>Category: {data?.category}</span>
                  <span className="hidden md:inline">•</span>
                  <span>Stock: {data?.stock}</span>
                </div>
              </div>
              <div className="text-sm md:text-base leading-relaxed">
                <p>{data?.description}</p>
              </div>
              <div className="flex flex-col gap-6">
                <div className="text-4xl font-bold">{formatCurrency(data?.price ?? 0)}</div>
                {!isOwnProduct && (
                  <Button size="lg" className="w-full" onClick={handleAddToCart} disabled={isInCart}>
                    {isInCart ? "Already in Cart" : "Add to Cart"}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DetailProduct;
