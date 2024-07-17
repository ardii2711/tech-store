import { Button } from "@/components/ui/button";
import Layout from "@/components/layout";

const HistoryOrder = () => {
  const orderHistory = [
    { id: 1, date: "2024-07-10", total: 1500, status: "Delivered" },
    { id: 2, date: "2024-07-05", total: 2200, status: "Pending" },
    { id: 3, date: "2024-06-30", total: 1800, status: "Delivered" },
    { id: 4, date: "2024-06-25", total: 2500, status: "Delivered" },
    { id: 5, date: "2024-06-20", total: 800, status: "Delivered" },
  ];

  return (
    <Layout>
      <div className="mx-auto py-6 md:py-10 px-4 md:px-10">
        <h2 className="text-2xl font-bold mb-4">Order History</h2>
        <div className="grid gap-4">
          {orderHistory.map((order) => (
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
      </div>
    </Layout>
  );
};

export default HistoryOrder;
