import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { Check, CreditCard, Smartphone, Building2, Wallet, Banknote, MapPin, Truck, ShieldCheck } from 'lucide-react';

const steps = ['Address', 'Delivery', 'Payment', 'Review'];
const stepEmojis = ['📍', '🚚', '💳', '✅'];

const paymentMethods = [
  { id: 'card', label: 'Credit/Debit Card', icon: CreditCard, desc: 'Visa, Mastercard, RuPay' },
  { id: 'upi', label: 'UPI', icon: Smartphone, desc: 'GPay, PhonePe, Paytm' },
  { id: 'netbanking', label: 'Net Banking', icon: Building2, desc: 'All major banks' },
  { id: 'wallet', label: 'Digital Wallet', icon: Wallet, desc: 'Paytm, Mobikwik' },
  { id: 'cod', label: 'Cash on Delivery', icon: Banknote, desc: '+₹50 COD charges' },
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
    if (step === 0) return formData.name && formData.phone && formData.address1 && formData.city && formData.state && formData.pincode;
    if (step === 1) return true;
    if (step === 2) {
      if (formData.paymentMethod === 'card') return formData.cardNumber.length >= 4 && formData.cardExpiry;
      if (formData.paymentMethod === 'upi') return formData.upiId.length >= 3;
      return true;
    }
    return true;
  };

  return (
    <div className="container py-6 pb-24 md:pb-6 max-w-4xl">
      {/* Progress bar */}
      <div className="mb-8">
        <div className="flex items-center justify-between relative">
          {/* Background line */}
          <div className="absolute top-5 left-0 right-0 h-0.5 bg-muted mx-8" />
          <div className="absolute top-5 left-0 h-0.5 bg-primary mx-8 transition-all duration-500" style={{ width: `${(step / (steps.length - 1)) * (100 - 12)}%` }} />

          {steps.map((s, i) => (
            <div key={s} className="flex flex-col items-center gap-1.5 relative z-10">
              <motion.div
                animate={{ scale: i === step ? 1.1 : 1 }}
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold border-2 transition-all duration-300 ${
                  i < step ? 'bg-success border-success text-success-foreground' :
                  i === step ? 'bg-primary border-primary text-primary-foreground shadow-lg' :
                  'bg-card border-muted text-muted-foreground'
                }`}
              >
                {i < step ? <Check size={18} strokeWidth={3} /> : <span>{stepEmojis[i]}</span>}
              </motion.div>
              <span className={`text-[10px] md:text-xs font-bold ${i <= step ? 'text-foreground' : 'text-muted-foreground'}`}>{s}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="md:col-span-2">
          <AnimatePresence mode="wait">
            <motion.div key={step} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.2 }}>
              {/* Step 0: Shipping */}
              {step === 0 && (
                <div className="bg-card rounded-2xl p-6 shadow-sm space-y-4 border border-border/50">
                  <div className="flex items-center gap-2">
                    <MapPin size={20} className="text-primary" />
                    <h2 className="font-display font-black text-xl">Shipping Address</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div><Label className="text-xs font-bold">Full Name *</Label><Input value={formData.name} onChange={e => update('name', e.target.value)} className="rounded-xl mt-1" placeholder="John Doe" /></div>
                    <div><Label className="text-xs font-bold">Email</Label><Input type="email" value={formData.email} onChange={e => update('email', e.target.value)} className="rounded-xl mt-1" placeholder="john@email.com" /></div>
                    <div><Label className="text-xs font-bold">Phone *</Label><Input value={formData.phone} onChange={e => update('phone', e.target.value)} className="rounded-xl mt-1" placeholder="+91 98765 43210" /></div>
                    <div className="sm:col-span-2"><Label className="text-xs font-bold">Address Line 1 *</Label><Input value={formData.address1} onChange={e => update('address1', e.target.value)} className="rounded-xl mt-1" placeholder="House/Flat No, Street" /></div>
                    <div className="sm:col-span-2"><Label className="text-xs font-bold">Address Line 2</Label><Input value={formData.address2} onChange={e => update('address2', e.target.value)} className="rounded-xl mt-1" placeholder="Landmark (optional)" /></div>
                    <div><Label className="text-xs font-bold">City *</Label><Input value={formData.city} onChange={e => update('city', e.target.value)} className="rounded-xl mt-1" placeholder="Mumbai" /></div>
                    <div><Label className="text-xs font-bold">State *</Label><Input value={formData.state} onChange={e => update('state', e.target.value)} className="rounded-xl mt-1" placeholder="Maharashtra" /></div>
                    <div><Label className="text-xs font-bold">PIN Code *</Label><Input value={formData.pincode} onChange={e => update('pincode', e.target.value)} className="rounded-xl mt-1" placeholder="400001" /></div>
                  </div>
                </div>
              )}

              {/* Step 1: Delivery */}
              {step === 1 && (
                <div className="bg-card rounded-2xl p-6 shadow-sm space-y-3 border border-border/50">
                  <div className="flex items-center gap-2">
                    <Truck size={20} className="text-primary" />
                    <h2 className="font-display font-black text-xl">Delivery Option</h2>
                  </div>
                  {[
                    { id: 'standard', label: 'Standard Delivery', desc: '5-7 business days', price: 'FREE', emoji: '📦' },
                    { id: 'express', label: 'Express Delivery', desc: '2-3 business days', price: '₹99', emoji: '🚀' },
                    { id: 'sameday', label: 'Same Day Delivery', desc: 'Select cities only', price: '₹199', emoji: '⚡' },
                  ].map(opt => (
                    <motion.button key={opt.id} whileTap={{ scale: 0.98 }}
                      onClick={() => update('deliveryOption', opt.id)}
                      className={`w-full text-left p-4 rounded-xl border-2 transition-all ${formData.deliveryOption === opt.id ? 'border-primary bg-primary/5 shadow-sm' : 'border-border hover:border-border/80'}`}>
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <span className="text-xl">{opt.emoji}</span>
                          <div>
                            <p className="font-bold text-sm">{opt.label}</p>
                            <p className="text-xs text-muted-foreground">{opt.desc}</p>
                          </div>
                        </div>
                        <span className={`font-bold text-sm ${opt.price === 'FREE' ? 'text-success' : ''}`}>{opt.price}</span>
                      </div>
                    </motion.button>
                  ))}
                </div>
              )}

              {/* Step 2: Payment */}
              {step === 2 && (
                <div className="bg-card rounded-2xl p-6 shadow-sm space-y-4 border border-border/50">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={20} className="text-primary" />
                    <h2 className="font-display font-black text-xl">Secure Payment</h2>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {paymentMethods.map(pm => (
                      <motion.button key={pm.id} whileTap={{ scale: 0.97 }}
                        onClick={() => update('paymentMethod', pm.id)}
                        className={`p-3 rounded-xl border-2 flex items-center gap-3 text-left transition-all ${formData.paymentMethod === pm.id ? 'border-primary bg-primary/5 shadow-sm' : 'border-border hover:border-border/80'}`}>
                        <pm.icon size={20} className="shrink-0" />
                        <div>
                          <p className="text-xs font-bold">{pm.label}</p>
                          <p className="text-[10px] text-muted-foreground">{pm.desc}</p>
                        </div>
                      </motion.button>
                    ))}
                  </div>

                  {formData.paymentMethod === 'card' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="space-y-3 mt-2 bg-muted/30 rounded-xl p-4">
                      <div><Label className="text-xs font-bold">Card Number</Label><Input placeholder="1234 5678 9012 3456" value={formData.cardNumber} onChange={e => update('cardNumber', e.target.value.replace(/[^0-9 ]/g, '').slice(0, 19))} className="rounded-xl mt-1" /></div>
                      <div><Label className="text-xs font-bold">Name on Card</Label><Input placeholder="Any name" value={formData.cardName} onChange={e => update('cardName', e.target.value)} className="rounded-xl mt-1" /></div>
                      <div className="grid grid-cols-2 gap-3">
                        <div><Label className="text-xs font-bold">Expiry</Label><Input placeholder="12/28" value={formData.cardExpiry} onChange={e => update('cardExpiry', e.target.value.slice(0, 5))} className="rounded-xl mt-1" /></div>
                        <div><Label className="text-xs font-bold">CVV</Label><Input placeholder="123" value={formData.cardCvv} onChange={e => update('cardCvv', e.target.value.replace(/\D/g, '').slice(0, 4))} className="rounded-xl mt-1" /></div>
                      </div>
                      <p className="text-[10px] text-muted-foreground">🧪 Demo: enter any test data</p>
                    </motion.div>
                  )}
                  {formData.paymentMethod === 'upi' && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-2 bg-muted/30 rounded-xl p-4">
                      <Label className="text-xs font-bold">UPI ID</Label>
                      <Input placeholder="yourname@paytm" value={formData.upiId} onChange={e => update('upiId', e.target.value)} className="rounded-xl mt-1" />
                      <p className="text-[10px] text-muted-foreground mt-1">🧪 Demo: enter any UPI ID</p>
                    </motion.div>
                  )}
                  {formData.paymentMethod === 'cod' && (
                    <div className="bg-secondary/5 border border-secondary/20 rounded-xl p-3 text-sm">
                      💰 Additional ₹50 COD charges apply. Pay cash on delivery.
                    </div>
                  )}
                </div>
              )}

              {/* Step 3: Review */}
              {step === 3 && (
                <div className="bg-card rounded-2xl p-6 shadow-sm space-y-4 border border-border/50">
                  <h2 className="font-display font-black text-xl">Order Review ✅</h2>
                  <div className="space-y-2">
                    {items.map(({ product, quantity }) => (
                      <div key={product.id} className="flex items-center gap-3 bg-muted/30 rounded-xl p-2.5">
                        <div className="w-12 h-12 bg-card rounded-lg p-1 shrink-0"><img src={product.images[0]} alt="" className="w-full h-full object-contain" /></div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-semibold truncate">{product.name}</p>
                          <p className="text-[10px] text-muted-foreground">Qty: {quantity}</p>
                        </div>
                        <span className="font-bold text-sm">₹{(product.price * quantity).toLocaleString()}</span>
                      </div>
                    ))}
                  </div>
                  <div className="bg-muted/30 rounded-xl p-3 text-sm">
                    <p className="font-bold text-xs mb-1">📍 Shipping to:</p>
                    <p className="text-muted-foreground text-xs">{formData.name}, {formData.address1}{formData.address2 ? `, ${formData.address2}` : ''}, {formData.city}, {formData.state} - {formData.pincode}</p>
                  </div>
                  <div className="bg-muted/30 rounded-xl p-3 text-sm">
                    <p className="font-bold text-xs mb-1">💳 Payment: <span className="capitalize">{formData.paymentMethod}</span></p>
                    <p className="font-bold text-xs">🚚 Delivery: <span className="capitalize">{formData.deliveryOption}</span></p>
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex gap-3 mt-6">
            {step > 0 && (
              <Button variant="outline" onClick={() => setStep(step - 1)} className="rounded-xl flex-1 h-11">← Back</Button>
            )}
            {step < 3 ? (
              <Button onClick={() => setStep(step + 1)} disabled={!canProceed()}
                className="bg-primary text-primary-foreground font-bold rounded-xl flex-1 h-11">
                Continue →
              </Button>
            ) : (
              <motion.div className="flex-1" whileTap={{ scale: 0.97 }}>
                <Button onClick={handlePlaceOrder}
                  className="w-full bg-success text-success-foreground font-bold rounded-xl h-12 text-base hover:bg-success/90 shadow-lg">
                  🎉 Place Order - ₹{finalTotal.toLocaleString()}
                </Button>
              </motion.div>
            )}
          </div>
        </div>

        {/* Order summary sidebar */}
        <div className="hidden md:block">
          <div className="bg-card rounded-2xl p-5 shadow-sm border border-border/50 sticky top-24">
            <h3 className="font-display font-bold text-base mb-3">Order Summary</h3>
            <div className="space-y-2 text-sm max-h-40 overflow-y-auto mb-3">
              {items.map(({ product, quantity }) => (
                <div key={product.id} className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-muted rounded p-0.5 shrink-0">
                    <img src={product.images[0]} alt="" className="w-full h-full object-contain" />
                  </div>
                  <span className="text-xs flex-1 truncate">{product.name}</span>
                  <span className="text-xs font-bold">x{quantity}</span>
                </div>
              ))}
            </div>
            <div className="space-y-1.5 text-sm border-t pt-3">
              <div className="flex justify-between"><span className="text-muted-foreground">Subtotal</span><span className="font-bold">₹{subtotal.toLocaleString()}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Shipping</span><span className="font-bold text-success">{shipping === 0 ? 'FREE' : `₹${shipping}`}</span></div>
              {deliveryCharge > 0 && <div className="flex justify-between"><span className="text-muted-foreground">Delivery</span><span className="font-bold">₹{deliveryCharge}</span></div>}
              {codCharge > 0 && <div className="flex justify-between"><span className="text-muted-foreground">COD</span><span className="font-bold">₹{codCharge}</span></div>}
              {couponDiscount > 0 && <div className="flex justify-between text-success"><span>Discount</span><span className="font-bold">-₹{couponDiscount.toLocaleString()}</span></div>}
              <div className="flex justify-between text-base font-black border-t pt-2 mt-2"><span>Total</span><span>₹{finalTotal.toLocaleString()}</span></div>
            </div>
            <div className="mt-3 flex items-center gap-1.5 text-[10px] text-muted-foreground">
              <ShieldCheck size={12} className="text-success" /> 100% Secure Payment
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
