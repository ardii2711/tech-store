export interface IOrder {
  id: number;
  user_id: number;
  payment_method: string;
  shipping_address: string;
  status: string;
  total_order: number;
  payment_url: string;
  order_items: IOrderItem[];
}

export interface IOrderItem {
  order_id: number;
  product_id: number;
  quantity: number;
  total_price: number;
}
