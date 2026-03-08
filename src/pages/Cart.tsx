import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Minus, Plus, Trash2, Heart, Gift, Tag } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { useWishlist } from '@/contexts/WishlistContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';

const Cart = () => {
  const { items, updateQuantity, removeFromCart, toggleGiftWrap, subtotal, shipping, total, couponDiscount, applyCoupon, removeCoupon, appliedCoupon } = useCart();
  const { addToWishlist } = useWishlist();
  const [couponCode, setCouponCode] = useState('');

  if (items.length === 0) {
    return (
      <div className="container py-20 text-center pb-24">
        <div className="text-6xl mb-4">🛒</div>
        <h1 className="font-display font-black text-2xl">Your cart is empty</h1>
        <p className="text-muted-foreground mt-2">Add some amazing toys!</p>
        <Link to="/products"><Button className="mt-4 bg-primary text-primary-foreground font-bold rounded-xl">Browse Toys</Button></Link>
      </div>
    );
  }

  return (
    <div className="container py-6 pb-24 md:pb-6">
      <h1 className="font-display font-black text-2xl md:text-3xl mb-6">Shopping Cart 🛒</h1>
      <div className="grid md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-4">
          {items.map(({ product, quantity, giftWrap }) => (
            <div key={product.id} className="bg-card rounded-2xl p-4 shadow-sm flex gap-4">
              <Link to={`/product/${product.id}`} className="w-20 h-20 bg-muted rounded-xl shrink-0 p-2">
                <img src={product.images[0]} alt={product.name} className="w-full h-full object-contain" />
              </Link>
              <div className="flex-1 min-w-0">
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-display font-bold text-sm truncate">{product.name}</h3>
                </Link>
                <p className="text-xs text-muted-foreground">{product.brand} · {product.ageRange}</p>
                <div className="flex items-center gap-2 mt-2">
                  <span className="font-display font-black">₹{product.price.toLocaleString()}</span>
                  {product.originalPrice > product.price && (
                    <span className="text-xs text-muted-foreground line-through">₹{product.originalPrice.toLocaleString()}</span>
                  )}
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <div className="flex items-center border rounded-lg">
                    <button onClick={() => updateQuantity(product.id, quantity - 1)} className="p-1"><Minus size={14} /></button>
                    <span className="px-3 text-sm font-bold">{quantity}</span>
                    <button onClick={() => updateQuantity(product.id, quantity + 1)} className="p-1"><Plus size={14} /></button>
                  </div>
                  <button onClick={() => { addToWishlist(product.id); removeFromCart(product.id); toast('Moved to wishlist ❤️'); }}
                    className="p-1 text-muted-foreground hover:text-secondary"><Heart size={16} /></button>
                  <button onClick={() => { removeFromCart(product.id); toast('Removed from cart'); }}
                    className="p-1 text-muted-foreground hover:text-destructive"><Trash2 size={16} /></button>
                </div>
                <button onClick={() => toggleGiftWrap(product.id)}
                  className={`mt-2 flex items-center gap-1 text-xs font-semibold ${giftWrap ? 'text-secondary' : 'text-muted-foreground'}`}>
                  <Gift size={12} /> {giftWrap ? 'Gift wrapped (+₹50)' : 'Add gift wrap (+₹50)'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="bg-card rounded-2xl p-6 shadow-sm h-fit sticky top-20">
          <h3 className="font-display font-bold text-lg mb-4">Order Summary</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span className="font-bold">₹{subtotal.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span className="font-bold">{shipping === 0 ? 'FREE' : `₹${shipping}`}</span></div>
            {couponDiscount > 0 && (
              <div className="flex justify-between text-success"><span>Coupon ({appliedCoupon})</span><span className="font-bold">-₹{couponDiscount.toLocaleString()}</span></div>
            )}
            <div className="border-t pt-2 flex justify-between text-lg">
              <span className="font-bold">Total</span>
              <span className="font-display font-black">₹{total.toLocaleString()}</span>
            </div>
          </div>

          {/* Coupon */}
          {!appliedCoupon ? (
            <div className="mt-4 flex gap-2">
              <Input placeholder="Coupon code" value={couponCode} onChange={e => setCouponCode(e.target.value)} className="rounded-xl text-sm" />
              <Button variant="outline" className="rounded-xl text-sm shrink-0" onClick={() => {
                if (applyCoupon(couponCode)) { toast.success('Coupon applied! 🎉'); setCouponCode(''); }
                else toast.error('Invalid coupon code');
              }}>
                <Tag size={14} /> Apply
              </Button>
            </div>
          ) : (
            <button onClick={() => { removeCoupon(); toast('Coupon removed'); }}
              className="mt-2 text-xs text-destructive font-semibold">Remove coupon</button>
          )}

          {shipping === 0 && <p className="text-xs text-success font-semibold mt-3">🎉 You qualify for free shipping!</p>}
          {subtotal < 999 && <p className="text-xs text-muted-foreground mt-3">Add ₹{999 - subtotal} more for free shipping</p>}

          <Link to="/checkout">
            <Button className="w-full mt-4 bg-primary text-primary-foreground font-bold rounded-xl h-12 text-base">
              Proceed to Checkout
            </Button>
          </Link>
          <Link to="/products">
            <Button variant="ghost" className="w-full mt-2 rounded-xl text-sm">Continue Shopping</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
