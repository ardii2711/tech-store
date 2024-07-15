import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/layout";
import { Button } from "@/components/ui/button";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "4K Ultra HD Smart TV", price: 1200, quantity: 1, image: "/path/to/tv-image.jpg" },
    { id: 2, name: "Noise-Cancelling Headphones", price: 300, quantity: 2, image: "/path/to/headphones-image.jpg" },
    { id: 3, name: "Gaming Chair", price: 400, quantity: 1, image: "/path/to/chair-image.jpg" },
  ]);

  const [orderHistory, setOrderHistory] = useState([
    { id: 1, date: "2024-07-10", total: 1500, status: "Delivered" },
    { id: 2, date: "2024-07-05", total: 2200, status: "Pending" },
    { id: 3, date: "2024-06-30", total: 1800, status: "Delivered" },
  ]);

  const [selectedItems, setSelectedItems] = useState<number[]>([]);

  const handleQuantityChange = (id: number, change: number) => {
    setCartItems(cartItems.map((item) => (item.id === id ? { ...item, quantity: item.quantity + change } : item)));
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleSelectItem = (id: number) => {
    setSelectedItems(selectedItems.includes(id) ? selectedItems.filter((itemId) => itemId !== id) : [...selectedItems, id]);
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  const handleSeeAllHistory = () => {
    navigate("/history-order");
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };

  return (
    <Layout>
      <div className="flex flex-col gap-8 mt-8">
        <div className="bg-background rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
          <div className="grid gap-4">
            {cartItems.map((item) => (
              <div key={item.id} className="bg-muted rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center">
                  <input type="checkbox" className="mr-4" checked={selectedItems.includes(item.id)} onChange={() => handleSelectItem(item.id)} />
                  <img src={item.image} alt={item.name} className="w-16 h-16 object-cover mr-4" />
                  <div>
                    <div className="text-base font-medium">{item.name}</div>
                    <div className="text-muted-foreground">
                      ${item.price} x {item.quantity}
                    </div>
                  </div>
                </div>
                <div className="flex gap-2 items-center">
                  <Button size="sm" onClick={() => handleQuantityChange(item.id, -1)} disabled={item.quantity === 1}>
                    -
                  </Button>
                  <Button size="sm" onClick={() => handleQuantityChange(item.id, 1)}>
                    +
                  </Button>
                  <Button size="sm" onClick={() => alert("Added to favorites")}>
                    Add to Favorite
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleRemoveItem(item.id)}>
                    Remove
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-background rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Order Summary</h2>
          <div className="text-lg font-semibold">Total Price: ${totalPrice}</div>
          <Button size="sm" onClick={handleCheckout} className="mt-4">
            Proceed to Checkout ({totalItems} items)
          </Button>
        </div>

        <div className="bg-background rounded-lg shadow p-6">
          <h2 className="text-2xl font-bold mb-4">Order History</h2>
          <div className="grid gap-4">
            {orderHistory.slice(0, 3).map((order) => (
              <div key={order.id} className="bg-muted rounded-lg p-4 flex items-center justify-between">
                <div>
                  <div className="text-base font-medium">
                    Order #{order.id} - {order.date}
                  </div>
                  <div className="text-muted-foreground">Total: ${order.total}</div>
                  <div className="text-muted-foreground">Status: {order.status}</div>
                </div>
                <div className="flex gap-2">
                  <Button size="sm">Details</Button>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4">
            <Button size="sm" onClick={handleSeeAllHistory}>
              See All Order History
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
