import { CameraIcon, GamepadIcon, HeadphonesIcon, LaptopIcon, SmartphoneIcon, TvIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "sonner";

import BenefitsSection from "@/components/benefits-section";
import CarauselSection from "@/components/carausel-section";
import ProductCard from "@/components/product-card";
import Layout from "@/components/layout";

import { getProduct } from "@/utils/apis/products";
import { IProduct } from "@/utils/types/products";

function Index() {
  const [data, setData] = useState<IProduct[]>([]);
  const [onClick, setOnClick] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const response = await getProduct();
      setData(response.data);
    } catch (error) {
      toast.error((error as Error).message);
    }
  }

  const handleClick = () => {
    setOnClick(true);
  };

  return (
    <Layout>
      <div className="flex flex-col">
        <section className="relative w-full">
          <CarauselSection />
        </section>
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-col items-center text-center md:text-start md:items-start gap-4">
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Explore by Category</h2>
              <p className="text-muted-foreground md:text-lg lg:text-xl">Browse our wide selection of products by category.</p>
            </div>
          </div>
          <div className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            <Link
              to={"/"}
              className="group flex flex-col items-center gap-2 rounded-lg bg-muted p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <LaptopIcon className="h-10 w-10" />
              <span className="text-sm font-medium">Laptops</span>
            </Link>
            <Link
              to={"/"}
              className="group flex flex-col items-center gap-2 rounded-lg bg-muted p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <SmartphoneIcon className="h-10 w-10" />
              <span className="text-sm font-medium">Smartphones</span>
            </Link>
            <Link
              to={"/"}
              className="group flex flex-col items-center gap-2 rounded-lg bg-muted p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <HeadphonesIcon className="h-10 w-10" />
              <span className="text-sm font-medium">Headphones</span>
            </Link>
            <Link
              to={"/"}
              className="group flex flex-col items-center gap-2 rounded-lg bg-muted p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <CameraIcon className="h-10 w-10" />
              <span className="text-sm font-medium">Cameras</span>
            </Link>
            <Link
              to={"/"}
              className="group flex flex-col items-center gap-2 rounded-lg bg-muted p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <TvIcon className="h-10 w-10" />
              <span className="text-sm font-medium">TVs</span>
            </Link>
            <Link
              to={"/"}
              className="group flex flex-col items-center gap-2 rounded-lg bg-muted p-4 transition-colors hover:bg-accent hover:text-accent-foreground"
            >
              <GamepadIcon className="h-10 w-10" />
              <span className="text-sm font-medium">Gaming</span>
            </Link>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="flex flex-col items-center text-center md:text-start md:items-start gap-4">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Explore Your Products</h2>
                <p className="text-muted-foreground md:text-lg lg:text-xl">Check out our most popular and top-selling items.</p>
              </div>
              <Link to={"/"} onClick={handleClick} className="text-primary hover:underline">
                View All Products
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {onClick
                ? data.map((product) => <ProductCard key={product.id} data={product} navigate={`/products/${product.id}`} />)
                : data.slice(0, 8).map((product) => <ProductCard key={product.id} data={product} navigate={`/products/${product.id}`} />)}
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <BenefitsSection />
        </section>
      </div>
    </Layout>
  );
}

export default Index;
