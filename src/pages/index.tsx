import { Link } from "react-router-dom";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  LaptopIcon,
  SmartphoneIcon,
  HeadphonesIcon,
  CameraIcon,
  TvIcon,
  GamepadIcon,
  TruckIcon,
  ShieldCheckIcon,
  UsersIcon,
} from "lucide-react";

import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import Layout from "@/components/layout";

function Index() {
  return (
    <Layout>
      <div className="flex flex-col">
        <section className="relative w-full">
          <Carousel className="w-full">
            <CarouselContent>
              <CarouselItem>
                <div className="relative h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] w-full overflow-hidden">
                  <img src="/src/assets/Banner-Slider-1.jpg" alt="Carousel Image 1" width={1920} height={1080} className="h-full w-full object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] w-full overflow-hidden">
                  <img src="/src/assets/Banner-Slider-2.jpg" alt="Carousel Image 1" width={1920} height={1080} className="h-full w-full object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] w-full overflow-hidden">
                  <img src="/src/assets/Banner-Slider-3.jpg" alt="Carousel Image 1" width={1920} height={1080} className="h-full w-full object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] w-full overflow-hidden">
                  <img src="/src/assets/Banner-Slider-4.jpg" alt="Carousel Image 1" width={1920} height={1080} className="h-full w-full object-cover" />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="relative h-[100px] sm:h-[200px] md:h-[300px] lg:h-[400px] xl:h-[500px] w-full overflow-hidden">
                  <img src="/src/assets/Banner-Slider-5.jpg" alt="Carousel Image 1" width={1920} height={1080} className="h-full w-full object-cover" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 transition-colors hover:bg-white">
              <ChevronLeftIcon className="h-6 w-6 text-black" />
            </CarouselPrevious>
            <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-white/50 p-2 transition-colors hover:bg-white">
              <ChevronRightIcon className="h-6 w-6 text-black" />
            </CarouselNext>
          </Carousel>
        </section>
        <section className="bg-muted py-12 md:py-16 lg:py-20">
          <div className="container">
            <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
              <div className="flex flex-col items-start gap-4">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Flash Sale</h2>
                <p className="text-muted-foreground md:text-lg lg:text-xl">Limited-time deals on our top-selling products.</p>
              </div>
              <div className="flex flex-col items-end gap-4">
                <div className="flex items-center gap-2">
                  <ClockIcon className="h-6 w-6 text-primary" />
                  <span className="text-lg font-medium">Ends in:</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="rounded-md bg-primary px-3 py-1 text-lg font-medium text-primary-foreground">12</span>
                  <span className="text-lg font-medium">:</span>
                  <span className="rounded-md bg-primary px-3 py-1 text-lg font-medium text-primary-foreground">34</span>
                  <span className="text-lg font-medium">:</span>
                  <span className="rounded-md bg-primary px-3 py-1 text-lg font-medium text-primary-foreground">56</span>
                </div>
              </div>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Link to={"/"}>
                <Card>
                  <CardHeader>
                    <img src="" alt="Product Image" width={300} height={300} className="h-48 w-full object-cover" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-lg font-bold">Product Name</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">3000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to={"/"}>
                <Card>
                  <CardHeader>
                    <img src="" alt="Product Image" width={300} height={300} className="h-48 w-full object-cover" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-lg font-bold">Product Name</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">3000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to={"/"}>
                <Card>
                  <CardHeader>
                    <img src="" alt="Product Image" width={300} height={300} className="h-48 w-full object-cover" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-lg font-bold">Product Name</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">3000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to={"/"}>
                <Card>
                  <CardHeader>
                    <img src="" alt="Product Image" width={300} height={300} className="h-48 w-full object-cover" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-lg font-bold">Product Name</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">3000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
        <section className="container py-12 md:py-16 lg:py-20">
          <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Explore by Category</h2>
              <p className="text-muted-foreground md:text-lg lg:text-xl">Browse our wide selection of products by category.</p>
            </div>
            <Link to={"/"} className="text-primary hover:underline">
              View All Categories
            </Link>
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
              <div className="flex flex-col items-start gap-4">
                <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl">Explore Your Products</h2>
                <p className="text-muted-foreground md:text-lg lg:text-xl">Check out our most popular and top-selling items.</p>
              </div>
              <Link to={"/"} className="text-primary hover:underline">
                View All Products
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Link to={"/"}>
                <Card>
                  <CardHeader>
                    <img src="" alt="Product Image" width={300} height={300} className="h-48 w-full object-cover" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-lg font-bold">Product Name</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">3000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to={"/"}>
                <Card>
                  <CardHeader>
                    <img src="" alt="Product Image" width={300} height={300} className="h-48 w-full object-cover" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-lg font-bold">Product Name</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">3000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to={"/"}>
                <Card>
                  <CardHeader>
                    <img src="" alt="Product Image" width={300} height={300} className="h-48 w-full object-cover" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-lg font-bold">Product Name</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">3000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to={"/"}>
                <Card>
                  <CardHeader>
                    <img src="" alt="Product Image" width={300} height={300} className="h-48 w-full object-cover" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-lg font-bold">Product Name</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">3000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to={"/"}>
                <Card>
                  <CardHeader>
                    <img src="" alt="Product Image" width={300} height={300} className="h-48 w-full object-cover" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-lg font-bold">Product Name</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">3000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to={"/"}>
                <Card>
                  <CardHeader>
                    <img src="" alt="Product Image" width={300} height={300} className="h-48 w-full object-cover" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-lg font-bold">Product Name</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">3000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to={"/"}>
                <Card>
                  <CardHeader>
                    <img src="" alt="Product Image" width={300} height={300} className="h-48 w-full object-cover" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-lg font-bold">Product Name</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">3000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link to={"/"}>
                <Card>
                  <CardHeader>
                    <img src="" alt="Product Image" width={300} height={300} className="h-48 w-full object-cover" />
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col items-start gap-2">
                      <h3 className="text-lg font-bold">Product Name</h3>
                      <div className="flex items-center gap-2">
                        <span className="text-2xl font-bold">3000</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </section>
        <section className="py-12 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-8 text-center">
              <h2 className="text-2xl md:text-4xl font-bold mb-2">Why Shop with Us?</h2>
              <p className="text-muted-foreground">Discover the benefits of choosing Acme Computers.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              <div className="flex flex-col items-center bg-background rounded-lg shadow-lg p-6 text-center">
                <TruckIcon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
                <p className="text-muted-foreground">Enjoy free shipping on all orders over $50.</p>
              </div>
              <div className="flex flex-col items-center bg-background rounded-lg shadow-lg p-6 text-center">
                <ShieldCheckIcon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Warranty</h3>
                <p className="text-muted-foreground">All our products come with a 1-year warranty.</p>
              </div>
              <div className="flex flex-col items-center bg-background rounded-lg shadow-lg p-6 text-center">
                <ClockIcon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Fast Delivery</h3>
                <p className="text-muted-foreground">Your order will be shipped within 1-2 business days.</p>
              </div>
              <div className="flex flex-col items-center bg-background rounded-lg shadow-lg p-6 text-center">
                <UsersIcon className="w-12 h-12 mb-4 text-primary" />
                <h3 className="text-lg font-semibold mb-2">Expert Support</h3>
                <p className="text-muted-foreground">Our knowledgeable team is here to assist you.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

export default Index;
