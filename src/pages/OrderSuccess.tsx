import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Package, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const OrderSuccess = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId') || 'ORD0000000000';
  const [order, setOrder] = useState<any>(null);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('toystore-orders') || '[]');
    const found = orders.find((o: any) => o.orderId === orderId);
    setOrder(found);
  }, [orderId]);

  return (
    <div className="container py-12 pb-24 md:pb-12 max-w-lg text-center">
      <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', stiffness: 200 }}
        className="w-20 h-20 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
        <Check size={40} className="text-success-foreground" />
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}>
        <h1 className="font-display font-black text-3xl">🎉 Payment Successful!</h1>
        <p className="text-muted-foreground mt-2">Thank you for your order!</p>

        <div className="bg-card rounded-2xl p-6 shadow-sm mt-8 text-left space-y-3">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Order ID</span>
            <span className="font-bold">#{orderId}</span>
          </div>
          {order && (
            <>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Amount Paid</span>
                <span className="font-bold">₹{order.total?.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Payment</span>
                <span className="font-bold capitalize">{order.paymentMethod}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Delivery By</span>
                <span className="font-bold">{order.deliveryDate}</span>
              </div>
              <div className="border-t pt-3 text-sm">
                <p className="font-bold mb-1">Shipping to:</p>
                <p className="text-muted-foreground">
                  {order.address?.name}<br />
                  {order.address?.address1}<br />
                  {order.address?.city}, {order.address?.state} - {order.address?.pincode}
                </p>
              </div>
              <div className="border-t pt-3">
                <p className="font-bold text-sm mb-2">Items ({order.items?.length})</p>
                {order.items?.map((item: any) => (
                  <div key={item.product.id} className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-muted rounded p-0.5">
                      <img src={item.product.images[0]} alt="" className="w-full h-full object-contain" />
                    </div>
                    <span className="text-xs flex-1 truncate">{item.product.name} x{item.quantity}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <p className="text-sm text-muted-foreground mt-4">📧 Confirmation email sent to your registered email.</p>

        <div className="flex gap-3 mt-6">
          <Link to="/products" className="flex-1">
            <Button className="w-full bg-primary text-primary-foreground font-bold rounded-xl">Continue Shopping</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;
