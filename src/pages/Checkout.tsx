import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Check, CreditCard, Smartphone, Building2, Wallet, Banknote } from 'lucide-react';

const steps = ['Shipping', 'Delivery', 'Payment', 'Review'];

const paymentMethods = [
  { id: 'card', label: 'Credit/Debit Card', icon: CreditCard },
  { id: 'upi', label: 'UPI', icon: Smartphone },
  { id: 'netbanking', label: 'Net Banking', icon: Building2 },
  { id: 'wallet', label: 'Digital Wallet', icon: Wallet },
  { id: 'cod', label: 'Cash on Delivery', icon: Banknote },
];

const Checkout = () => {
  const navigate = useNavigate();
  const { items, subtotal, shipping, total, couponDiscount, clearCart } = useCart();
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address1: '', address2: '', city: '', state: '', pincode: '',
    deliveryOption: 'standard',
    paymentMethod: 'card',
    cardNumber: '', cardName: '', cardExpiry: '', cardCvv: '',
    upiId: '',
  });

  const update = (field: string, value: string) => setFormData(prev => ({ ...prev, [field]: value }));

  if (items.length === 0) {
    navigate('/cart');
    return null;
  }

  const deliveryCharge = formData.deliveryOption === 'express' ? 99 : formData.deliveryOption === 'sameday' ? 199 : 0;
  const codCharge = formData.paymentMethod === 'cod' ? 50 : 0;
  const finalTotal = total + deliveryCharge + codCharge;

  const handlePlaceOrder = () => {
    const orderId = `ORD${Date.now().toString().slice(-10)}`;
    const txnId = `TXN${Date.now().toString().slice(-12)}`;
    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + (formData.deliveryOption === 'sameday' ? 0 : formData.deliveryOption === 'express' ? 3 : 6));

    const orderData = {
      orderId, txnId, items: [...items], total: finalTotal,
      address: formData, paymentMethod: formData.paymentMethod,
      deliveryDate: deliveryDate.toISOString().split('T')[0],
      orderDate: new Date().toISOString(),
    };

    const orders = JSON.parse(localStorage.getItem('toystore-orders') || '[]');
    orders.push(orderData);
    localStorage.setItem('toystore-orders', JSON.stringify(orders));
    clearCart();
    navigate(`/order-success?orderId=${orderId}`);
  };

  const canProceed = () => {
    if (step === 0) return formData.name && formData.email && formData.phone && formData.address1 && formData.city && formData.state && formData.pincode;
    if (step === 1) return true;
    if (step === 2) {
      if (formData.paymentMethod === 'card') return formData.cardNumber.length >= 16 && formData.cardName && formData.cardExpiry && formData.cardCvv;
      if (formData.paymentMethod === 'upi') return formData.upiId.includes('@');
      return true;
    }
    return true;
  };

  return (
    <div className="container py-6 pb-24 md:pb-6 max-w-3xl">
      {/* Progress */}
      <div className="flex items-center justify-between mb-8">
        {steps.map((s, i) => (
          <div key={s} className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${i <= step ? 'bg-primary text-primary-foreground' : 'bg-muted text-muted-foreground'}`}>
              {i < step ? <Check size={16} /> : i + 1}
            </div>
            <span className={`hidden sm:inline text-sm font-semibold ${i <= step ? 'text-foreground' : 'text-muted-foreground'}`}>{s}</span>
            {i < steps.length - 1 && <div className={`w-8 md:w-16 h-0.5 ${i < step ? 'bg-primary' : 'bg-muted'}`} />}
          </div>
        ))}
      </div>

      {/* Step 0: Shipping */}
      {step === 0 && (
        <div className="bg-card rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="font-display font-black text-xl">Shipping Address 📦</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div><Label>Full Name *</Label><Input value={formData.name} onChange={e => update('name', e.target.value)} className="rounded-xl mt-1" /></div>
            <div><Label>Email *</Label><Input type="email" value={formData.email} onChange={e => update('email', e.target.value)} className="rounded-xl mt-1" /></div>
            <div><Label>Phone *</Label><Input value={formData.phone} onChange={e => update('phone', e.target.value)} className="rounded-xl mt-1" /></div>
            <div className="sm:col-span-2"><Label>Address Line 1 *</Label><Input value={formData.address1} onChange={e => update('address1', e.target.value)} className="rounded-xl mt-1" /></div>
            <div className="sm:col-span-2"><Label>Address Line 2</Label><Input value={formData.address2} onChange={e => update('address2', e.target.value)} className="rounded-xl mt-1" /></div>
            <div><Label>City *</Label><Input value={formData.city} onChange={e => update('city', e.target.value)} className="rounded-xl mt-1" /></div>
            <div><Label>State *</Label><Input value={formData.state} onChange={e => update('state', e.target.value)} className="rounded-xl mt-1" /></div>
            <div><Label>PIN Code *</Label><Input value={formData.pincode} onChange={e => update('pincode', e.target.value)} className="rounded-xl mt-1" /></div>
          </div>
        </div>
      )}

      {/* Step 1: Delivery */}
      {step === 1 && (
        <div className="bg-card rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="font-display font-black text-xl">Delivery Option 🚚</h2>
          {[
            { id: 'standard', label: 'Standard Delivery', desc: '5-7 business days', price: 'FREE (above ₹999)' },
            { id: 'express', label: 'Express Delivery', desc: '2-3 business days', price: '₹99' },
            { id: 'sameday', label: 'Same Day Delivery', desc: 'Select cities only', price: '₹199' },
          ].map(opt => (
            <button key={opt.id} onClick={() => update('deliveryOption', opt.id)}
              className={`w-full text-left p-4 rounded-xl border-2 transition-colors ${formData.deliveryOption === opt.id ? 'border-primary bg-primary/5' : 'border-border'}`}>
              <div className="flex justify-between items-center">
                <div>
                  <p className="font-bold text-sm">{opt.label}</p>
                  <p className="text-xs text-muted-foreground">{opt.desc}</p>
                </div>
                <span className="font-bold text-sm">{opt.price}</span>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* Step 2: Payment */}
      {step === 2 && (
        <div className="bg-card rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="font-display font-black text-xl">Payment Method 💳</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {paymentMethods.map(pm => (
              <button key={pm.id} onClick={() => update('paymentMethod', pm.id)}
                className={`p-3 rounded-xl border-2 flex flex-col items-center gap-1 text-xs font-semibold transition-colors ${formData.paymentMethod === pm.id ? 'border-primary bg-primary/5' : 'border-border'}`}>
                <pm.icon size={20} />
                {pm.label}
              </button>
            ))}
          </div>

          {formData.paymentMethod === 'card' && (
            <div className="space-y-3 mt-4">
              <div><Label>Card Number</Label><Input placeholder="1234 5678 9012 3456" value={formData.cardNumber} onChange={e => update('cardNumber', e.target.value.replace(/\D/g, '').slice(0, 16))} className="rounded-xl mt-1" /></div>
              <div><Label>Name on Card</Label><Input value={formData.cardName} onChange={e => update('cardName', e.target.value)} className="rounded-xl mt-1" /></div>
              <div className="grid grid-cols-2 gap-3">
                <div><Label>Expiry (MM/YY)</Label><Input placeholder="12/28" value={formData.cardExpiry} onChange={e => update('cardExpiry', e.target.value)} className="rounded-xl mt-1" /></div>
                <div><Label>CVV</Label><Input type="password" placeholder="***" value={formData.cardCvv} onChange={e => update('cardCvv', e.target.value.slice(0, 3))} className="rounded-xl mt-1" /></div>
              </div>
            </div>
          )}
          {formData.paymentMethod === 'upi' && (
            <div className="mt-4"><Label>UPI ID</Label><Input placeholder="yourname@paytm" value={formData.upiId} onChange={e => update('upiId', e.target.value)} className="rounded-xl mt-1" /></div>
          )}
          {formData.paymentMethod === 'cod' && (
            <p className="text-sm text-muted-foreground mt-4">💰 Additional ₹50 COD charges will apply. Pay cash when your order arrives.</p>
          )}
        </div>
      )}

      {/* Step 3: Review */}
      {step === 3 && (
        <div className="bg-card rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="font-display font-black text-xl">Order Review ✅</h2>
          <div className="space-y-3">
            {items.map(({ product, quantity }) => (
              <div key={product.id} className="flex items-center gap-3">
                <div className="w-12 h-12 bg-muted rounded-lg p-1"><img src={product.images[0]} alt="" className="w-full h-full object-contain" /></div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">{product.name}</p>
                  <p className="text-xs text-muted-foreground">Qty: {quantity}</p>
                </div>
                <span className="font-bold text-sm">₹{(product.price * quantity).toLocaleString()}</span>
              </div>
            ))}
          </div>
          <div className="border-t pt-3 space-y-1 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><span>₹{subtotal.toLocaleString()}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{shipping === 0 ? 'FREE' : `₹${shipping}`}</span></div>
            {deliveryCharge > 0 && <div className="flex justify-between"><span>Delivery</span><span>₹{deliveryCharge}</span></div>}
            {codCharge > 0 && <div className="flex justify-between"><span>COD Charge</span><span>₹{codCharge}</span></div>}
            {couponDiscount > 0 && <div className="flex justify-between text-success"><span>Discount</span><span>-₹{couponDiscount.toLocaleString()}</span></div>}
            <div className="flex justify-between text-lg font-black border-t pt-2"><span>Total</span><span>₹{finalTotal.toLocaleString()}</span></div>
          </div>
          <div className="bg-muted rounded-xl p-3 text-sm">
            <p className="font-bold">Shipping to:</p>
            <p>{formData.name}, {formData.address1}{formData.address2 ? `, ${formData.address2}` : ''}</p>
            <p>{formData.city}, {formData.state} - {formData.pincode}</p>
          </div>
        </div>
      )}

      {/* Navigation */}
      <div className="flex gap-3 mt-6">
        {step > 0 && (
          <Button variant="outline" onClick={() => setStep(step - 1)} className="rounded-xl flex-1">Back</Button>
        )}
        {step < 3 ? (
          <Button onClick={() => setStep(step + 1)} disabled={!canProceed()}
            className="bg-primary text-primary-foreground font-bold rounded-xl flex-1 h-12">
            Continue
          </Button>
        ) : (
          <Button onClick={handlePlaceOrder}
            className="bg-secondary text-secondary-foreground font-bold rounded-xl flex-1 h-12 text-base">
            🎉 Place Order - ₹{finalTotal.toLocaleString()}
          </Button>
        )}
      </div>
    </div>
  );
};

export default Checkout;
