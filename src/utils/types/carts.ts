export interface IResponseCart {
  id: number;
  quantity: number;
}

export interface ICart {
  id: number;
  user_id: number;
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
