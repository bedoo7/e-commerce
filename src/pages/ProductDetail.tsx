import { useParams, Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/context/CartContext";
import ImageGallery from "@/components/ImageGallery";
import { useState } from "react";
import { Star, Minus, Plus, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const ProductDetail = () => {
	const { id } = useParams();
	const product = products.find((p) => p.id === id);
	const { addItem } = useCart();
	const [quantity, setQuantity] = useState(1);
	const [selectedSize, setSelectedSize] = useState<string | undefined>();
	const [selectedColor, setSelectedColor] = useState<string | undefined>();

	if (!product) {
		return (
			<div className="container mx-auto px-4 py-20 text-center">
				<p className="text-muted-foreground font-body">Product not found.</p>
				<Link
					to="/"
					className="text-accent font-body text-sm mt-4 inline-block hover:underline"
				>
					Back to shop
				</Link>
			</div>
		);
	}

	const handleAddToCart = () => {
		if (product.sizes && !selectedSize) {
			toast.error("Please select a size");
			return;
		}
		addItem(product, quantity, selectedSize, selectedColor);
		toast.success(`${product.name} added to cart`);
	};

	return (
		<div className="container mx-auto px-4 lg:px-8 py-6 lg:py-12">
			<Link
				to="/"
				className="inline-flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide mb-8"
			>
				<ArrowLeft size={14} />
				Back to shop
			</Link>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
				<ImageGallery images={product.images} productName={product.name} />

				<div className="lg:py-4">
					<h1 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-2">
						{product.name}
					</h1>

					<div className="flex items-center gap-3 mb-4">
						<div className="flex items-center gap-1">
							<Star size={14} className="fill-accent text-accent" />
							<span className="text-sm font-body font-medium text-foreground">
								{product.rating}
							</span>
						</div>
						<span className="text-sm font-body text-muted-foreground">
							({product.reviews} reviews)
						</span>
					</div>

					<div className="flex items-center gap-3 mb-6">
						<span className="text-xl font-body font-semibold text-foreground">
							${product.price}
						</span>
						{product.originalPrice && (
							<span className="text-lg font-body text-muted-foreground line-through">
								${product.originalPrice}
							</span>
						)}
					</div>

					<p className="text-sm font-body text-muted-foreground leading-relaxed mb-8">
						{product.description}
					</p>

					{product.colors && (
						<div className="mb-6">
							<label className="text-xs font-body uppercase tracking-wide text-foreground mb-2 block">
								Color {selectedColor && `— ${selectedColor}`}
							</label>
							<div className="flex gap-2">
								{product.colors.map((color) => (
									<button
										key={color}
										onClick={() => setSelectedColor(color)}
										className={`px-3 py-1.5 text-xs font-body border rounded-sm transition-colors ${
											selectedColor === color
												? "border-foreground text-foreground"
												: "border-border text-muted-foreground hover:border-foreground"
										}`}
									>
										{color}
									</button>
								))}
							</div>
						</div>
					)}

					{product.sizes && (
						<div className="mb-6">
							<label className="text-xs font-body uppercase tracking-wide text-foreground mb-2 block">
								Size {selectedSize && `— ${selectedSize}`}
							</label>
							<div className="flex flex-wrap gap-2">
								{product.sizes.map((size) => (
									<button
										key={size}
										onClick={() => setSelectedSize(size)}
										className={`w-12 h-10 text-sm font-body border rounded-sm transition-colors ${
											selectedSize === size
												? "border-foreground text-foreground bg-primary text-primary-foreground"
												: "border-border text-muted-foreground hover:border-foreground"
										}`}
									>
										{size}
									</button>
								))}
							</div>
						</div>
					)}

					<div className="mb-8">
						<label className="text-xs font-body uppercase tracking-wide text-foreground mb-2 block">
							Quantity
						</label>
						<div className="inline-flex items-center border border-border rounded-sm">
							<button
								onClick={() => setQuantity(Math.max(1, quantity - 1))}
								className="p-2.5 text-muted-foreground hover:text-foreground transition-colors"
							>
								<Minus size={14} />
							</button>
							<span className="w-10 text-center text-sm font-body font-medium text-foreground">
								{quantity}
							</span>
							<button
								onClick={() => setQuantity(quantity + 1)}
								className="p-2.5 text-muted-foreground hover:text-foreground transition-colors"
							>
								<Plus size={14} />
							</button>
						</div>
					</div>

					<Button
						onClick={handleAddToCart}
						disabled={!product.inStock}
						className="w-full h-12 text-sm font-body uppercase tracking-widest"
						size="lg"
					>
						{product.inStock ? "Add to Cart" : "Sold Out"}
					</Button>

					<div className="mt-10 pt-8 border-t border-border space-y-3">
						{[
							"Free shipping over $200",
							"30-day easy returns",
							"Sustainably made",
						].map((feature) => (
							<p
								key={feature}
								className="text-xs font-body text-muted-foreground flex items-center gap-2"
							>
								<span className="w-1 h-1 bg-accent rounded-full" />
								{feature}
							</p>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProductDetail;
