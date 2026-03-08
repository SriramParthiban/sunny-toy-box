import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Download, Package, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const confettiColors = ['#FFD700', '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7', '#DDA0DD', '#98D8C8'];

const ConfettiPiece = ({ index }: { index: number }) => {
  const left = Math.random() * 100;
  const delay = Math.random() * 2;
  const duration = 2 + Math.random() * 2;
  const color = confettiColors[index % confettiColors.length];
  const size = 6 + Math.random() * 8;
  const rotation = Math.random() * 360;

  return (
    <motion.div
      initial={{ y: -20, x: 0, opacity: 1, rotate: 0 }}
      animate={{ y: '100vh', x: (Math.random() - 0.5) * 200, opacity: 0, rotate: rotation + 720 }}
      transition={{ duration, delay, ease: 'easeIn' }}
      className="fixed z-[100] pointer-events-none"
      style={{
        left: `${left}%`,
        top: -20,
        width: size,
        height: size * 0.6,
        backgroundColor: color,
        borderRadius: '2px',
      }}
    />
  );
};

const generateReceiptPDF = (order: any) => {
  const items = order.items || [];
  const receiptDate = new Date(order.orderDate).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
  });
  const addr = order.address || {};

  const lineItems: string[] = [];
  let yPos = 580;
  items.forEach((item: any, i: number) => {
    lineItems.push(`BT /F2 9 Tf 50 ${yPos} Td (${i + 1}. ${escapePdf(item.product.name)}) Tj ET`);
    lineItems.push(`BT /F1 9 Tf 400 ${yPos} Td (x${item.quantity}) Tj ET`);
    lineItems.push(`BT /F2 9 Tf 460 ${yPos} Td (Rs.${(item.product.price * item.quantity).toLocaleString()}) Tj ET`);
    yPos -= 18;
  });
  yPos -= 10;
  const summaryY = yPos;

  const pdfContent = `%PDF-1.4
1 0 obj << /Type /Catalog /Pages 2 0 R >> endobj
2 0 obj << /Type /Pages /Kids [3 0 R] /Count 1 >> endobj
3 0 obj << /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >> endobj
5 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >> endobj
6 0 obj << /Type /Font /Subtype /Type1 /BaseFont /Helvetica >> endobj
4 0 obj << /Length 9999 >>
stream
0.996 0.843 0.0 rg 0 780 595 62 re f
0.2 0.2 0.2 rg
BT /F1 22 Tf 50 800 Td (ToyStore) Tj ET
BT /F2 10 Tf 160 802 Td (India) Tj ET
BT /F2 9 Tf 400 808 Td (Order Receipt) Tj ET
BT /F2 8 Tf 400 794 Td (${receiptDate}) Tj ET
0.95 0.95 0.95 rg 30 710 535 60 re f
0.2 0.2 0.2 rg
BT /F1 10 Tf 50 750 Td (Order ID:) Tj ET
BT /F2 10 Tf 200 750 Td (#${escapePdf(order.orderId)}) Tj ET
BT /F1 10 Tf 50 733 Td (Transaction ID:) Tj ET
BT /F2 10 Tf 200 733 Td (${escapePdf(order.txnId || 'N/A')}) Tj ET
BT /F1 10 Tf 350 750 Td (Payment:) Tj ET
BT /F2 10 Tf 430 750 Td (${escapePdf(order.paymentMethod?.toUpperCase() || 'N/A')}) Tj ET
BT /F1 10 Tf 350 733 Td (Status:) Tj ET
0.0 0.6 0.0 rg
BT /F1 10 Tf 430 733 Td (PAID) Tj ET
0.2 0.2 0.2 rg
BT /F1 11 Tf 50 695 Td (Shipping Address) Tj ET
BT /F2 9 Tf 50 680 Td (${escapePdf(addr.name || '')}) Tj ET
BT /F2 9 Tf 50 668 Td (${escapePdf(addr.address1 || '')}) Tj ET
BT /F2 9 Tf 50 656 Td (${escapePdf([addr.city, addr.state].filter(Boolean).join(', '))} - ${escapePdf(addr.pincode || '')}) Tj ET
BT /F1 11 Tf 350 695 Td (Delivery) Tj ET
BT /F2 9 Tf 350 680 Td (Expected by: ${escapePdf(order.deliveryDate || 'N/A')}) Tj ET
0.996 0.843 0.0 rg 30 600 535 20 re f
0.2 0.2 0.2 rg
BT /F1 9 Tf 50 605 Td (Item) Tj ET
BT /F1 9 Tf 400 605 Td (Qty) Tj ET
BT /F1 9 Tf 460 605 Td (Amount) Tj ET
${lineItems.join('\n')}
0.85 0.85 0.85 rg 30 ${summaryY} 535 1 re f
0.2 0.2 0.2 rg
BT /F1 10 Tf 350 ${summaryY - 20} Td (Total Paid:) Tj ET
BT /F1 14 Tf 440 ${summaryY - 20} Td (Rs.${order.total?.toLocaleString() || '0'}) Tj ET
0.6 0.6 0.6 rg
BT /F2 8 Tf 50 50 Td (ToyStore India Pvt. Ltd. | support@toystore.com | +91-9876543210) Tj ET
BT /F2 7 Tf 400 50 Td (This is a computer generated receipt) Tj ET
endstream
endobj
xref
0 7
0000000000 65535 f 
0000000009 00000 n 
0000000058 00000 n 
0000000115 00000 n 
0000000380 00000 n 
0000000266 00000 n 
0000000341 00000 n 
trailer << /Size 7 /Root 1 0 R >>
startxref
99999
%%EOF`;
  return pdfContent;
};

const escapePdf = (str: string) => {
  if (!str) return '';
  return str.replace(/\\/g, '\\\\').replace(/\(/g, '\\(').replace(/\)/g, '\\)');
};

const downloadReceipt = (order: any) => {
  const pdfContent = generateReceiptPDF(order);
  const blob = new Blob([pdfContent], { type: 'application/pdf' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `ToyStore_Receipt_${order.orderId}.pdf`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const OrderSuccess = () => {
  const [searchParams] = useSearchParams();
  const orderId = searchParams.get('orderId') || 'ORD0000000000';
  const [order, setOrder] = useState<any>(null);
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const orders = JSON.parse(localStorage.getItem('toystore-orders') || '[]');
    const found = orders.find((o: any) => o.orderId === orderId);
    setOrder(found);
    const timer = setTimeout(() => setShowConfetti(false), 4000);
    return () => clearTimeout(timer);
  }, [orderId]);

  const deliveryDate = order?.deliveryDate
    ? new Date(order.deliveryDate).toLocaleDateString('en-IN', { weekday: 'long', month: 'long', day: 'numeric' })
    : 'Within 5-7 days';

  return (
    <div className="container py-10 pb-24 md:pb-10 max-w-lg">
      {/* Confetti */}
      {showConfetti && Array.from({ length: 40 }).map((_, i) => <ConfettiPiece key={i} index={i} />)}

      {/* Success animation */}
      <div className="text-center">
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: 'spring', stiffness: 200, damping: 12 }}
          className="w-24 h-24 bg-success rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
        >
          <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 0.3 }}>
            <Check size={48} className="text-success-foreground" strokeWidth={3} />
          </motion.div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }}>
          <h1 className="font-display font-black text-3xl">🎉 Order Placed!</h1>
          <p className="text-muted-foreground mt-1 text-sm">Thank you for shopping with ToyStore India</p>
        </motion.div>
      </div>

      {/* Order details card */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
        className="bg-card rounded-2xl shadow-md mt-8 overflow-hidden border border-border/50">

        {/* Order ID header */}
        <div className="bg-primary/10 px-5 py-3 flex items-center justify-between">
          <div>
            <p className="text-[10px] text-muted-foreground font-medium">Order ID</p>
            <p className="font-mono font-bold text-sm">#{orderId}</p>
          </div>
          <div className="text-right">
            <p className="text-[10px] text-muted-foreground font-medium">Status</p>
            <p className="text-xs font-bold text-success">✓ Confirmed</p>
          </div>
        </div>

        {order && (
          <div className="p-5 space-y-4">
            {/* Key info grid */}
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-muted/50 rounded-xl p-3">
                <p className="text-[10px] text-muted-foreground">Amount Paid</p>
                <p className="font-display font-black text-lg">₹{order.total?.toLocaleString()}</p>
              </div>
              <div className="bg-muted/50 rounded-xl p-3">
                <p className="text-[10px] text-muted-foreground">Payment</p>
                <p className="font-bold text-sm capitalize mt-1">{order.paymentMethod}</p>
              </div>
            </div>

            {/* Delivery estimate */}
            <div className="bg-success/5 border border-success/20 rounded-xl p-3 flex items-center gap-3">
              <Package size={20} className="text-success shrink-0" />
              <div>
                <p className="text-sm font-bold">Expected Delivery</p>
                <p className="text-xs text-muted-foreground">{deliveryDate}</p>
              </div>
            </div>

            {/* Items */}
            <div>
              <p className="font-bold text-sm mb-2">Items ({order.items?.length})</p>
              <div className="space-y-2">
                {order.items?.map((item: any) => (
                  <div key={item.product.id} className="flex items-center gap-3 bg-muted/30 rounded-xl p-2">
                    <div className="w-10 h-10 bg-card rounded-lg p-1 shrink-0">
                      <img src={item.product.images[0]} alt="" className="w-full h-full object-contain" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold truncate">{item.product.name}</p>
                      <p className="text-[10px] text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <span className="text-xs font-bold shrink-0">₹{(item.product.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping address */}
            <div className="border-t pt-3">
              <p className="font-bold text-sm mb-1">Shipping Address</p>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {order.address?.name}<br />
                {order.address?.address1}
                {order.address?.address2 ? <><br />{order.address.address2}</> : null}<br />
                {order.address?.city}, {order.address?.state} - {order.address?.pincode}
              </p>
            </div>
          </div>
        )}
      </motion.div>

      <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.8 }}
        className="text-xs text-muted-foreground text-center mt-4">
        📧 Order confirmation sent to your registered email
      </motion.p>

      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
        className="flex flex-col gap-2.5 mt-6">
        {order && (
          <Button onClick={() => downloadReceipt(order)}
            variant="outline" className="w-full font-bold rounded-xl h-11 border-2 border-primary">
            <Download size={16} /> Download Receipt (PDF)
          </Button>
        )}
        <Link to="/products" className="w-full">
          <Button className="w-full bg-primary text-primary-foreground font-bold rounded-xl h-11">
            Continue Shopping <ArrowRight size={16} />
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;
