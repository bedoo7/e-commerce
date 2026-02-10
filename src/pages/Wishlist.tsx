import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { useWishlist } from "@/context/WishlistContext";
import ProductCard from "@/components/ProductCard";

const Wishlist = () => {
  const { wishlist } = useWishlist();
  const wishlistProducts = products.filter((p) => wishlist.includes(p.id));

  if (wishlistProducts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-2xl font-semibold text-foreground mb-2">Your wishlist is empty</h1>
        <p className="text-muted-foreground font-body text-sm mb-8">Save items you love for later.</p>
        <Link to="/" className="text-accent font-body text-sm hover:underline">
          Browse the collection
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
      <h1 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-8">
        Wishlist ({wishlistProducts.length})
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-6 lg:gap-y-12">
        {wishlistProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Wishlist;
