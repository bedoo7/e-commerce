import { Link } from "react-router-dom";
import { Product } from "@/data/products";
import { motion } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  index: number;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, index }) => {
  const { addItem } = useCart();
  const { isWishlisted, toggleWishlist } = useWishlist();
  const wishlisted = isWishlisted(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!product.inStock) return;
    addItem(product);
    toast.success(`${product.name} added to cart`);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    toast(wishlisted ? "Removed from wishlist" : "Added to wishlist");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link to={`/product/${product.id}`} className="group block">
        <div className="relative aspect-[3/4] overflow-hidden bg-secondary rounded-sm mb-3">
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
            loading="lazy"
          />

          {/* Overlay actions */}
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-300" />

          {/* Wishlist button */}
          <button
            onClick={handleToggleWishlist}
            className="absolute top-2.5 right-2.5 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center transition-all hover:bg-background"
          >
            <Heart
              size={15}
              className={wishlisted ? "fill-accent text-accent" : "text-foreground/70"}
            />
          </button>

          {/* Add to cart button */}
          {product.inStock && (
            <button
              onClick={handleAddToCart}
              className="absolute bottom-2.5 right-2.5 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all hover:bg-background translate-y-1 group-hover:translate-y-0"
            >
              <ShoppingBag size={14} className="text-foreground/70" />
            </button>
          )}

          {/* Sale badge */}
          {product.originalPrice && (
            <span className="absolute top-2.5 left-2.5 bg-accent text-accent-foreground text-[10px] font-body font-semibold uppercase tracking-wider px-2 py-0.5 rounded-sm">
              Sale
            </span>
          )}
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-body font-medium text-foreground group-hover:text-muted-foreground transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2">
            <span className="text-sm font-body font-medium text-foreground">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm font-body text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>
          {!product.inStock && (
            <span className="text-xs font-body text-muted-foreground uppercase tracking-wide">
              Sold out
            </span>
          )}
          {product.tags.includes("new") && product.inStock && (
            <span className="text-xs font-body text-accent uppercase tracking-wide font-medium">
              New
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
