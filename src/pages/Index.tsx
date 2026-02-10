import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { products } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductFilters from "@/components/ProductFilters";

const Index = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const selectedCategory = searchParams.get("category") || "All";
  const sortBy = searchParams.get("sort") || "featured";

  const handleCategoryChange = (category: string) => {
    const params = new URLSearchParams(searchParams);
    if (category === "All") {
      params.delete("category");
    } else {
      params.set("category", category);
    }
    setSearchParams(params);
  };

  const handleSortChange = (sort: string) => {
    const params = new URLSearchParams(searchParams);
    if (sort === "featured") {
      params.delete("sort");
    } else {
      params.set("sort", sort);
    }
    setSearchParams(params);
  };

  const filteredProducts = useMemo(() => {
    let result = selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

    switch (sortBy) {
      case "price-asc":
        return [...result].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...result].sort((a, b) => b.price - a.price);
      case "rating":
        return [...result].sort((a, b) => b.rating - a.rating);
      case "newest":
        return [...result].sort((a, b) => (b.tags.includes("new") ? 1 : 0) - (a.tags.includes("new") ? 1 : 0));
      default:
        return result;
    }
  }, [selectedCategory, sortBy]);

  return (
    <div className="container mx-auto px-4 lg:px-8 py-8 lg:py-12">
      <div className="mb-12 lg:mb-16">
        <h1 className="font-display text-3xl lg:text-5xl font-semibold text-foreground mb-3">
          The Collection
        </h1>
        <p className="text-muted-foreground font-body text-base lg:text-lg max-w-xl">
          Thoughtfully designed essentials for the modern wardrobe. Quality that lasts, style that endures.
        </p>
      </div>

      <ProductFilters
        selectedCategory={selectedCategory}
        sortBy={sortBy}
        onCategoryChange={handleCategoryChange}
        onSortChange={handleSortChange}
      />

      <p className="text-xs font-body text-muted-foreground uppercase tracking-wide mb-6">
        {filteredProducts.length} {filteredProducts.length === 1 ? "product" : "products"}
      </p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-x-6 lg:gap-y-12">
        {filteredProducts.map((product, index) => (
          <ProductCard key={product.id} product={product} index={index} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20">
          <p className="text-muted-foreground font-body">No products found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default Index;
