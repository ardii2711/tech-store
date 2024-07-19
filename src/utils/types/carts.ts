export interface ICart {
  id: number;
  buyer_id: number;
  product_owner_id: number;
  product_id: number;
  name: string;
  qty: number;
  total_price: number;
  image_url: string;
  category: string;
  description: string;
  price: number;
  stock: number;
}
