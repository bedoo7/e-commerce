import { Link } from "react-router-dom";
import { useCart } from "@/context/CartContext";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Checkout = () => {
  const { items, totalPrice, clearCart } = useCart();

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-20 text-center">
        <h1 className="font-display text-2xl font-semibold text-foreground mb-2">Nothing to checkout</h1>
        <Link to="/" className="text-accent font-body text-sm hover:underline">Back to shop</Link>
      </div>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Order placed successfully! Thank you for your purchase.");
    clearCart();
  };

  const shipping = totalPrice >= 200 ? 0 : 12;

  return (
    <div className="container mx-auto px-4 lg:px-8 py-6 lg:py-12 max-w-5xl">
      <Link to="/cart" className="inline-flex items-center gap-1.5 text-xs font-body text-muted-foreground hover:text-foreground transition-colors uppercase tracking-wide mb-8">
        <ArrowLeft size={14} />
        Back to cart
      </Link>

      <h1 className="font-display text-2xl lg:text-3xl font-semibold text-foreground mb-10">Checkout</h1>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Form */}
          <div className="lg:col-span-3 space-y-8">
            {/* Contact */}
            <section>
              <h2 className="text-xs font-body uppercase tracking-widest text-foreground mb-4">Contact</h2>
              <Input type="email" placeholder="Email address" required className="font-body text-sm h-11" />
            </section>

            {/* Shipping */}
            <section>
              <h2 className="text-xs font-body uppercase tracking-widest text-foreground mb-4">Shipping Address</h2>
              <div className="grid grid-cols-2 gap-3">
                <Input placeholder="First name" required className="font-body text-sm h-11" />
                <Input placeholder="Last name" required className="font-body text-sm h-11" />
                <Input placeholder="Address" required className="col-span-2 font-body text-sm h-11" />
                <Input placeholder="City" required className="font-body text-sm h-11" />
                <Input placeholder="Postal code" required className="font-body text-sm h-11" />
                <Input placeholder="Country" required className="col-span-2 font-body text-sm h-11" />
              </div>
            </section>

            {/* Payment */}
            <section>
              <h2 className="text-xs font-body uppercase tracking-widest text-foreground mb-4">Payment</h2>
              <div className="grid grid-cols-1 gap-3">
                <Input placeholder="Card number" required className="font-body text-sm h-11" />
                <div className="grid grid-cols-2 gap-3">
                  <Input placeholder="MM / YY" required className="font-body text-sm h-11" />
                  <Input placeholder="CVC" required className="font-body text-sm h-11" />
                </div>
                <Input placeholder="Name on card" required className="font-body text-sm h-11" />
              </div>
            </section>
          </div>

          {/* Summary */}
          <div className="lg:col-span-2">
            <div className="bg-secondary/50 rounded-sm p-6 lg:sticky lg:top-28">
              <h2 className="text-xs font-body uppercase tracking-widest text-foreground mb-4">Order Summary</h2>
              <div className="space-y-3 mb-6">
                {items.map((item) => (
                  <div key={item.product.id} className="flex gap-3">
                    <div className="w-12 h-16 bg-secondary rounded-sm overflow-hidden shrink-0">
                      <img src={item.product.images[0]} alt={item.product.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-body font-medium text-foreground truncate">{item.product.name}</p>
                      <p className="text-xs font-body text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-xs font-body font-medium text-foreground">${(item.product.price * item.quantity).toFixed(2)}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-2 text-sm font-body border-t border-border pt-4">
                <div className="flex justify-between text-muted-foreground">
                  <span>Subtotal</span>
                  <span>${totalPrice.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-muted-foreground">
                  <span>Shipping</span>
                  <span>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</span>
                </div>
                <div className="border-t border-border pt-2 flex justify-between font-semibold text-foreground">
                  <span>Total</span>
                  <span>${(totalPrice + shipping).toFixed(2)}</span>
                </div>
              </div>
              <Button type="submit" className="w-full mt-6 h-11 text-sm font-body uppercase tracking-widest" size="lg">
                Place Order
              </Button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Checkout;
