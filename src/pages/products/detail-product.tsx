import { StarIcon } from "lucide-react";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import Layout from "@/components/layout";

function DetailProduct() {
  return (
    <Layout>
      <div className="grid md:grid-cols-2 gap-6 lg:gap-12 items-start max-w-5xl px-4 mx-auto py-6">
        <div className="flex gap-3 items-start">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNRTgvq1AdyzSTpvT68lOP0xwQOCdPjT_C3g&s"
            alt="Product Image"
            width={400}
            height={400}
            className="aspect-square object-cover border w-full rounded-lg overflow-hidden"
          />
        </div>
        <div className="grid gap-4 md:gap-10 items-start">
          <div className="grid gap-2">
            <h1 className="font-bold text-2xl sm:text-3xl">Acme Prism Wireless Headphones</h1>
            <div className="flex items-center gap-0.5">
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-primary" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
              <StarIcon className="w-5 h-5 fill-muted stroke-muted-foreground" />
            </div>
            <div className="text-4xl font-bold">$149.99</div>
          </div>
          <div className="grid gap-4">
            <p>Experience the ultimate in wireless audio with the Acme Prism Headphones. Crafted with premium materials and advanced technology, these headphones deliver exceptional sound quality, comfort, and convenience.</p>
            <div className="grid gap-2">
              <Label htmlFor="quantity" className="text-base">
                Quantity
              </Label>
              <Select defaultValue="1">
                <SelectTrigger className="w-24">
                  <SelectValue placeholder="Select" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1</SelectItem>
                  <SelectItem value="2">2</SelectItem>
                  <SelectItem value="3">3</SelectItem>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <Button size="lg">Add to Cart</Button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default DetailProduct;
