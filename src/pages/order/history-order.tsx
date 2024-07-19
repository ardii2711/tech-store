import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";
import { IOrder } from "@/utils/types/orders";
import { useEffect, useState } from "react";
import { getOrder } from "@/utils/apis/orders";
import { formatCurrency } from "@/utils/function";

const HistoryOrder = () => {
  const [orderHistory, setOrderHistory] = useState<IOrder[]>([]);

  useEffect(() => {
    fetchOrderHistory();
  }, [])
  
  async function fetchOrderHistory() {
    try {
      const response = await getOrder()
      setOrderHistory(response.data)
      console.log(response.data)
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Layout>
      <div className="mx-auto py-6 md:py-10 px-4 md:px-10">
        <h2 className="text-2xl font-bold mb-4">Order History</h2>
        <div className="grid gap-4">
          {orderHistory.map((order) => (
            <div key={order.id} className="bg-muted rounded-lg p-4 flex items-center justify-between">
              <div>
                <div className="text-base font-medium">
                  Order #{order.id}
                </div>
                <div className="text-muted-foreground">{formatCurrency(order.totalPrice)}</div>
                <div className="text-muted-foreground">Status: {order.status}</div>
              </div>
              <div className="flex gap-2">
                <Button size="sm">Details</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HistoryOrder;
