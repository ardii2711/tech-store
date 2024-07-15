import { FacebookIcon, InstagramIcon, LinkedinIcon, PackageIcon, TwitterIcon } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-muted pt-12 pb-16 text-muted-foreground">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 gap-y-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          <div className="space-y-6">
            <div className="flex items-center">
              <PackageIcon className="mr-2 h-6 w-6" />
              <h3 className="text-2xl font-bold">Tech Store</h3>
            </div>
            <p className="text-sm">Discover the latest tech products and accessories at our e-commerce store.</p>
            <div className="flex items-center space-x-4">
              <Link to={"/"} className="text-muted-foreground hover:text-primary">
                <FacebookIcon className="h-6 w-6" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link to={"/"} className="text-muted-foreground hover:text-primary">
                <TwitterIcon className="h-6 w-6" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link to={"/"} className="text-muted-foreground hover:text-primary">
                <InstagramIcon className="h-6 w-6" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link to={"/"} className="text-muted-foreground hover:text-primary">
                <LinkedinIcon className="h-6 w-6" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Support</h4>
            <ul className="space-y-1">
              <li>
                <Link to={"/"} className="hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:underline">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:underline">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:underline">
                  Product Support
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Account</h4>
            <ul className="space-y-1">
              <li>
                <Link to={"/"} className="hover:underline">
                  My Account
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:underline">
                  Order History
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:underline">
                  Cancel Order
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:underline">
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="text-lg font-medium">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link to={"/"} className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:underline">
                  Shop
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link to={"/"} className="hover:underline">
                  Blog
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t pt-8 text-sm">
          <p>&copy; 2024 Tech Store. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
