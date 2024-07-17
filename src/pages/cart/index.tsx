import { ArrowLeftIcon, MinusIcon, PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

function Index() {
  const [cart, setCart] = useState([
    {
      id: 1,
      name: "Wireless Headphones",
      image: "https://media.dinomarket.com/docs/imgTD/2020-12/TAPH802BK1_071220201231_ll.jpg_mm.jpg",
      price: 99.99,
      quantity: 1,
    },
    {
      id: 2,
      name: "Gaming Mouse",
      image: "https://media.dinomarket.com/docs/imgTD/2022-04/_SMine_1648885487092_020422140447_mm.jpg",
      price: 49.99,
      quantity: 2,
    },
    {
      id: 3,
      name: "Laptop Sleeve",
      image: "https://media.dinomarket.com/docs/imgTD/2023-08/_SMine_3089671AD6C02E486EDC7B6CEB0A120E_260823130826_mm.jpg",
      price: 29.99,
      quantity: 1,
    },
  ]);
  const handleQuantityChange = (id: number, quantity: number) => {
    setCart(cart.map((item) => (item.id === id ? { ...item, quantity } : item)));
  };
  const handleRemoveItem = (id: number) => {
    setCart(cart.filter((item) => item.id !== id));
  };
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);

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
              <div key={item.id} className=" flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="flex w-full justify-between md:justify-start text-end md:text-start gap-4">
                  <img src={item.image} alt={item.name} width={100} height={100} className="rounded-md object-cover" />
                  <div className="flex flex-col justify-center">
                    <h3 className="font-semibold">{item.name}</h3>
                    <p className="text-muted-foreground">${item.price.toFixed(2)}</p>
                  </div>
                </div>
                <div className="flex w-full items-center justify-between md:justify-end gap-2">
                  <div className="flex items-center gap-3">
                    <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.id, item.quantity - 1)} disabled={item.quantity === 1}>
                      <MinusIcon className="w-4 h-4" />
                    </Button>
                    <span className="font-medium">{item.quantity}</span>
                    <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>
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
            <div className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</div>
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
