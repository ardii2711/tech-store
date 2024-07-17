import { Link } from "react-router-dom";

import { Card, CardContent, CardHeader } from "./ui/card";

import { IProduct } from "@/utils/types/products";

interface Props {
  data: IProduct;
  navigate: string;
}

function ProductCard(props: Props) {
  const { data, navigate } = props;

  return (
    <Link to={navigate}>
      <Card>
        <CardHeader>
          <img src={data.image_url} alt={data.name} width={300} height={300} className="h-48 w-full object-cover" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-col items-start gap-2">
            <h3 className="text-lg font-bold">{data.name}</h3>
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold">Rp. {data.price}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}

export default ProductCard;
