import { categories } from "@/data/products";

interface ProductFiltersProps {
  selectedCategory: string;
  sortBy: string;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}

const ProductFilters: React.FC<ProductFiltersProps> = ({
  selectedCategory,
  sortBy,
  onCategoryChange,
  onSortChange,
}) => {
  return (
    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-border">
      {/* Categories */}
      <div className="flex flex-wrap items-center gap-1">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategoryChange(cat)}
            className={`px-3 py-1.5 text-xs font-body tracking-wide uppercase transition-colors rounded-sm ${
              selectedCategory === cat
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:text-foreground hover:bg-secondary"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Sort */}
      <select
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value)}
        className="text-xs font-body tracking-wide uppercase bg-background border border-border rounded-sm px-3 py-1.5 text-foreground focus:outline-none focus:ring-1 focus:ring-ring"
      >
        <option value="featured">Featured</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
        <option value="rating">Highest Rated</option>
        <option value="newest">Newest</option>
      </select>
    </div>
  );
};

export default ProductFilters;
