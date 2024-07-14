import { LogInIcon, PackageIcon, SearchIcon, ShoppingCartIcon, UserIcon } from "lucide-react";
import { Link } from "react-router-dom";

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

function Header() {
  return (
    <header className="bg-primary-foreground text-foreground shadow-sm">
      <div className="mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link to={"/"} className="flex items-center gap-2">
          <PackageIcon className="h-6 w-6" />
          <span className="text-lg font-semibold">Tech Store</span>
        </Link>
        <nav className="hidden md:flex items-center gap-4 lg:gap-8 xl:gap-12">
          <Link to={"/home"} className="text-sm font-medium hover:text-primary transition-colors">
            Home
          </Link>
          <Link to={"/about"} className="text-sm font-medium hover:text-primary transition-colors">
            About
          </Link>
          <Link to={"/contact"} className="text-sm font-medium hover:text-primary transition-colors">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative hidden md:flex">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search products..."
              className="h-9 w-64 rounded-md bg-muted pl-10 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
            />
          </div>
          <Link to={"/cart"} className="relative">
            <ShoppingCartIcon className="h-6 w-6" />
            <Badge className="absolute -top-2 -right-2 rounded-full bg-primary px-2 py-1 text-xs text-primary-foreground">3</Badge>
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <div className="flex justify-between items-center">
                <DropdownMenuLabel>John Doe</DropdownMenuLabel>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link to={"/profile"} className="flex items-center gap-2">
                  <UserIcon className="h-4 w-4" />
                  My Account
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to={"/login"} className="flex items-center gap-2">
                  <LogInIcon className="h-4 w-4" />
                  Login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link to={"/register"} className="flex items-center gap-2">
                  <LogInIcon className="h-4 w-4" />
                  Register
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
}

export default Header;