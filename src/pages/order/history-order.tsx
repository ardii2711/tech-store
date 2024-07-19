import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { toast } from "sonner";

import CustomAlert from "@/components/custom-alert";
import { formatCurrency } from "@/utils/function";
import { Button } from "@/components/ui/button";
import { getOrder } from "@/utils/apis/orders";
import { IOrder } from "@/utils/types/orders";
import Layout from "@/components/layout";

const HistoryOrder = () => {
  const [orderHistory, setOrderHistory] = useState<IOrder[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrderHistory();
  }, []);

  const fetchOrderHistory = async () => {
    try {
      const response = await getOrder();
      setOrderHistory(response);
    } catch (error) {
      toast.error((error as Error).message);
    } 
  };

  const handleProceedPayment = (url: string) => {
    window.location.href = url;
  };

  const handleCancel = () => {
    navigate("/order/history");
  };

  return (
    <Layout>
      <div className="mx-auto py-6 md:py-10 px-4 md:px-10">
        <h2 className="text-2xl font-bold mb-4">History Orders</h2>
        <div className="grid gap-4">
          {orderHistory.map((order) => (
            <div key={order.id} className="bg-muted rounded-lg p-4 flex items-center justify-between">
              <div>
                <div className="text-base font-medium">Order #{order.id}</div>
                <div className="text-muted-foreground">{formatCurrency(order.total_order)}</div>
                <div className="text-muted-foreground">Status: {order.status}</div>
              </div>
              {order.status === "pending" && (
                <div className="flex gap-2">
                  <CustomAlert
                    title="Bayar Pesanan"
                    description="Apakah Anda yakin ingin melanjutkan ke pembayaran? Jika Anda melanjutkan, Anda akan diarahkan ke halaman pembayaran."
                    onAction={() => handleProceedPayment(order.payment_url)}
                    onCancel={handleCancel}
                  >
                    <Button size="sm">Pay</Button>
                  </CustomAlert>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default HistoryOrder;
