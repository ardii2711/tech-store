export interface IOrder {
  id: number;
  user_id: number;
  cartId: number;
  items: IOrderItem[];
  shippingAddress: string;
  totalQty: number;
  totalPrice: number;
  status: string;
}

export interface IOrderItem {
  product_id: number;
  name: string;
  quantity: number;
  price: number;
}