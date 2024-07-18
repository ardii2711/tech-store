import { useEffect, useState } from "react";
import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Layout from "@/components/layout";
import Dropdown from "./dropdown";

import { getProductsByUser, deleteProduct } from "@/utils/apis/products";
import { useToken } from "@/utils/contexts/token";
import { IProduct } from "@/utils/types/products";

function ManageProduct() {
  const { user } = useToken();
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    if (user) {
      fetchProducts(user.id);
    }
  }, [user]);

  const fetchProducts = async (userId: number) => {
    try {
      const response = await getProductsByUser(userId);
      setProducts(response.data);
    } catch (error) {
      toast.error("Failed to fetch products");
    }
  };

  const handleDelete = async (productId: number) => {
    try {
      await deleteProduct(productId);
      setProducts((prevProducts) => prevProducts.filter((product) => product.id !== productId));
      toast.success("Product deleted successfully");
    } catch (error) {
      toast.error("Failed to delete product");
    }
  };

  return (
    <Layout>
      <div className="flex flex-col h-full">
        <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Manage Products</h1>
          <Link
            to="/add-product"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow-sm transition-colors hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <PlusIcon className="h-4 w-4" />
            Add New Product
          </Link>
        </header>
        <div className="flex-1 overflow-x-auto p-6">
          <div className="max-w-full overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Description</TableHead>
                  <TableHead>Price</TableHead>
                  <TableHead>Stock</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {products.map((product) => (
                  <TableRow key={product.id}>
                    <TableCell className="font-medium">{product.name}</TableCell>
                    <TableCell>{product.description}</TableCell>
                    <TableCell>${product.price}</TableCell>
                    <TableCell>{product.stock}</TableCell>
                    <TableCell className="flex items-center gap-2">
                      <Dropdown productId={product.id} onDelete={() => handleDelete(product.id)} />
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ManageProduct;
