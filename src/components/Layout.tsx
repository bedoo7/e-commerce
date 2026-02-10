import { Link, useLocation, useSearchParams } from "react-router-dom";
import { ShoppingBag, Search, Menu, X, Heart } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { totalItems } = useCart();
  const { wishlist } = useWishlist();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchParams] = useSearchParams();
  const currentCategory = searchParams.get("category");
  const location = useLocation();

  const isActive = (link: { to: string; label: string }) => {
    if (link.label === "Shop" && !currentCategory && location.pathname === "/") return true;
    if (link.to.includes("category=")) {
      const linkCat = new URLSearchParams(link.to.split("?")[1]).get("category");
      return currentCategory === linkCat;
    }
    return false;
  };

  const navLinks = [
    { to: "/", label: "Shop" },
    { to: "/?category=Outerwear", label: "Outerwear" },
    { to: "/?category=Tops", label: "Tops" },
    { to: "/?category=Accessories", label: "Accessories" },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <div className="bg-primary text-primary-foreground text-center py-2 text-xs font-body tracking-widest uppercase">
        Complimentary shipping on orders over $200
      </div>

      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <button
              className="lg:hidden p-2 -ml-2 text-foreground"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>

            <Link to="/" className="font-display text-xl lg:text-2xl font-semibold tracking-tight text-foreground">
              MAISON
            </Link>

            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  className={`text-sm font-body tracking-wide transition-colors uppercase border-b-2 pb-0.5 ${
                    isActive(link)
                      ? "text-foreground border-foreground font-semibold"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <Link to="/wishlist" className="relative p-2 text-foreground hover:text-muted-foreground transition-colors">
                <Heart size={18} />
                {wishlist.length > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-[10px] font-body font-semibold rounded-full flex items-center justify-center min-w-[18px] h-[18px]">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <Link to="/cart" className="relative p-2 text-foreground hover:text-muted-foreground transition-colors">
                <ShoppingBag size={18} />
                {totalItems > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 bg-accent text-accent-foreground text-[10px] font-body font-semibold rounded-full flex items-center justify-center min-w-[18px] h-[18px]">
                    {totalItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-3">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-sm font-body tracking-wide text-muted-foreground hover:text-foreground transition-colors uppercase py-2"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="flex-1">{children}</main>

      <footer className="bg-primary text-primary-foreground mt-20">
        <div className="container mx-auto px-4 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h3 className="font-display text-lg mb-4">MAISON</h3>
              <p className="text-sm text-primary-foreground/70 font-body leading-relaxed">
                Timeless essentials crafted with care. Quality materials, thoughtful design, lasting value.
              </p>
            </div>
            <div>
              <h4 className="text-xs font-body tracking-widest uppercase mb-4">Customer Care</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70 font-body">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Shipping & Returns</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Size Guide</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-body tracking-widest uppercase mb-4">About</h4>
              <ul className="space-y-2 text-sm text-primary-foreground/70 font-body">
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Our Story</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Sustainability</a></li>
                <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-xs text-primary-foreground/50 font-body">
            © 2026 Maison. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
