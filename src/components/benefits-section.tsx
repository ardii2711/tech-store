import { ClockIcon, ShieldCheckIcon, TruckIcon, UsersIcon } from "lucide-react";

function BenefitsSection() {
  return (
    <>
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
    </>
  );
}

export default BenefitsSection;
