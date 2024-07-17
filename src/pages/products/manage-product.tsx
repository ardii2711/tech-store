import { PlusIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import Layout from "@/components/layout";
import Dropdown from "./dropdown";

function ManageProduct() {
  return (
    <Layout>
      <div className="flex flex-col h-full">
        <header className="bg-background border-b px-6 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Manage Products</h1>
          <Link
            to={"/add-product"}
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
                <TableRow>
                  <TableCell className="font-medium">Gamer Gear Pro Controller</TableCell>
                  <TableCell>High-quality gaming controller with advanced features.</TableCell>
                  <TableCell>$59.99</TableCell>
                  <TableCell>100</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Dropdown />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Luminous VR Headset</TableCell>
                  <TableCell>Immersive virtual reality headset with high-resolution display.</TableCell>
                  <TableCell>$199.99</TableCell>
                  <TableCell>50</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Dropdown />
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Zest Juicers</TableCell>
                  <TableCell>High-powered juicers for extracting maximum nutrition.</TableCell>
                  <TableCell>$99.99</TableCell>
                  <TableCell>75</TableCell>
                  <TableCell className="flex items-center gap-2">
                    <Dropdown />
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ManageProduct;
