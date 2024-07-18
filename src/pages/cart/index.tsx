import { ArrowLeftIcon, MinusIcon, PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

import { formatCurrency } from "@/utils/function";
import { getCartItems } from "@/utils/apis/carts";
import { ICart } from "@/utils/types/carts";

function Index() {
  const [cart, setCart] = useState<ICart[]>([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    calculateTotalPrice();
  }, [cart]);

  async function fetchData() {
    try {
      const response = await getCartItems();
      const cartData = response.data.map((item) => ({
        ...item,
        qty: item.qty || 1,
        id: item.product_id,
      }));
      setCart(cartData);
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  const handleQuantityChange = (id: number, qty: number) => {
    if (qty < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item.id === id) {
          return { ...item, qty };
        }
        return item;
      })
    );
  };

  const handleRemoveItem = (id: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  const calculateTotalPrice = () => {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);
    setTotalPrice(total);
  };

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-20 py-12">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-3xl font-bold">Your Cart</h1>
          <Link to={"/"} className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition">
            <ArrowLeftIcon className="w-4 h-4" />
            Back
          </Link>
        </div>
        <div className="grid gap-8">
          <div className="grid gap-6">
            {cart.map((item) => (
              <div key={item.id} className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex w-full justify-between md:justify-start text-end md:text-start gap-4">
                  <img src={item.image_url} alt={item.name} width={100} height={100} className="rounded-md object-cover" />
                  <div className="flex flex-col justify-center">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-muted-foreground">{formatCurrency(item.price)}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between md:justify-end gap-2">
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.id, item.qty - 1)} disabled={item.qty === 1}>
                      <MinusIcon className="w-4 h-4" />
                    </Button>
                    <span className="font-medium">{item.qty}</span>
                    <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.id, item.qty + 1)}>
                      <PlusIcon className="w-4 h-4" />
                    </Button>
                  </div>
                  <Button variant="destructive" onClick={() => handleRemoveItem(item.id)}>
                    Delete
                  </Button>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="text-2xl font-bold">Total: {formatCurrency(totalPrice)}</div>
            <Button size="lg">
              <Link to={"/checkout"}>Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Index;
