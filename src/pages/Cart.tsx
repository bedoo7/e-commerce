import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { Minus, Plus, X, ArrowLeft, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const Cart = () => {
	const { items, updateQuantity, removeItem, totalPrice } = useCart();

	if (items.length === 0) {
		return (
			<div className="container mx-auto px-4 py-20 text-center">
				<ShoppingBag
					size={48}
					className="mx-auto text-muted-foreground/30 mb-6"
				/>
				<h1 className="font-display text-2xl font-semibold text-foreground mb-2">
					Your cart is empty
				</h1>
				<p className="text-muted-foreground font-body text-sm mb-8">
					Discover something you'll love.
				</p>
				<Link to="/">
					<Button
						variant="default"
						className="text-sm font-body uppercase tracking-widest h-11 px-8"
					>
						Continue Shopping
					</Button>
				</Link>
			</div>
		);
	}

	return (
		<div className="container mx-auto px-4 lg:px-8 py-6 lg:py-12">
			<Link
				to="/"
				className="inline-flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide mb-8"
			>
				<ArrowLeft size={14} />
				Continue shopping
			</Link>

			<h1 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-8">
				Shopping Cart ({items.length})
			</h1>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
				<div className="lg:col-span-2 space-y-0 divide-y divide-border">
					<AnimatePresence>
						{items.map((item) => (
							<motion.div
								key={item.product.id}
								layout
								exit={{ opacity: 0, height: 0 }}
								className="flex gap-4 py-6 first:pt-0"
							>
								<Link
									to={`/product/${item.product.id}`}
									className="shrink-0 w-24 h-32 bg-secondary rounded-sm overflow-hidden"
								>
									<img
										src={item.product.images[0]}
										alt={item.product.name}
										className="w-full h-full object-cover"
									/>
								</Link>

								<div className="flex-1 min-w-0">
									<div className="flex justify-between gap-2">
										<Link to={`/product/${item.product.id}`}>
											<h3 className="text-sm font-body font-medium text-foreground hover:text-muted-foreground transition-colors">
												{item.product.name}
											</h3>
										</Link>
										<button
											onClick={() => removeItem(item.product.id)}
											className="p-1 text-muted-foreground hover:text-foreground transition-colors shrink-0"
										>
											<X size={16} />
										</button>
									</div>

									{(item.selectedSize || item.selectedColor) && (
										<p className="text-xs font-body text-muted-foreground mt-1">
											{[
												item.selectedColor,
												item.selectedSize && `Size ${item.selectedSize}`,
											]
												.filter(Boolean)
												.join(" / ")}
										</p>
									)}

									<p className="text-sm font-body font-medium text-foreground mt-2">
										${item.product.price}
									</p>

									<div className="inline-flex items-center border border-border rounded-sm mt-3">
										<button
											onClick={() =>
												updateQuantity(item.product.id, item.quantity - 1)
											}
											className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
										>
											<Minus size={12} />
										</button>
										<span className="w-8 text-center text-xs font-body font-medium text-foreground">
											{item.quantity}
										</span>
										<button
											onClick={() =>
												updateQuantity(item.product.id, item.quantity + 1)
											}
											className="p-1.5 text-muted-foreground hover:text-foreground transition-colors"
										>
											<Plus size={12} />
										</button>
									</div>
								</div>
							</motion.div>
						))}
					</AnimatePresence>
				</div>

				<div className="lg:sticky lg:top-28 h-fit">
					<div className="bg-secondary/50 rounded-sm p-6">
						<h2 className="text-xs font-body uppercase tracking-widest text-foreground mb-6">
							Order Summary
						</h2>
						<div className="space-y-3 text-sm font-body">
							<div className="flex justify-between text-muted-foreground">
								<span>Subtotal</span>
								<span>${totalPrice.toFixed(2)}</span>
							</div>
							<div className="flex justify-between text-muted-foreground">
								<span>Shipping</span>
								<span>{totalPrice >= 200 ? "Free" : "$12.00"}</span>
							</div>
							<div className="border-t border-border pt-3 flex justify-between font-semibold text-foreground">
								<span>Total</span>
								<span>
									${(totalPrice + (totalPrice >= 200 ? 0 : 12)).toFixed(2)}
								</span>
							</div>
						</div>
						<Link to="/checkout">
							<Button
								className="w-full mt-6 h-11 text-sm font-body uppercase tracking-widest"
								size="lg"
							>
								Checkout
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
