import React, { useEffect, useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Check, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const generateReceiptPDF = (order: any) => {
  const items = order.items || [];
  const itemsText = items.map((item: any, i: number) =>
    `${i + 1}. ${item.product.name}  x${item.quantity}  ₹${(item.product.price * item.quantity).toLocaleString()}`
  ).join('\n');

  const receiptDate = new Date(order.orderDate).toLocaleDateString('en-IN', {
    year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit'
  });

  const addr = order.address || {};
  const addressText = [addr.name, addr.address1, addr.address2, `${addr.city}, ${addr.state} - ${addr.pincode}`]
    .filter(Boolean).join('\n');

  // Build PDF manually using raw PDF syntax
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
1 0 obj
<< /Type /Catalog /Pages 2 0 R >>
endobj

2 0 obj
<< /Type /Pages /Kids [3 0 R] /Count 1 >>
endobj

3 0 obj
<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842]
/Contents 4 0 R /Resources << /Font << /F1 5 0 R /F2 6 0 R >> >> >>
endobj

5 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>
endobj

6 0 obj
<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>
endobj

4 0 obj
<< /Length 9999 >>
stream
% Header background
0.996 0.843 0.0 rg
0 780 595 62 re f

% Header text
0.2 0.2 0.2 rg
BT /F1 22 Tf 50 800 Td (ToyStore) Tj ET
BT /F2 10 Tf 160 802 Td (India) Tj ET
BT /F2 9 Tf 400 808 Td (Order Receipt) Tj ET
BT /F2 8 Tf 400 794 Td (${receiptDate}) Tj ET

% Order details section
0.95 0.95 0.95 rg
30 710 535 60 re f
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

% Shipping address
BT /F1 11 Tf 50 695 Td (Shipping Address) Tj ET
BT /F2 9 Tf 50 680 Td (${escapePdf(addr.name || '')}) Tj ET
BT /F2 9 Tf 50 668 Td (${escapePdf(addr.address1 || '')}) Tj ET
BT /F2 9 Tf 50 656 Td (${escapePdf([addr.city, addr.state].filter(Boolean).join(', '))} - ${escapePdf(addr.pincode || '')}) Tj ET
BT /F2 9 Tf 50 644 Td (Phone: ${escapePdf(addr.phone || 'N/A')}) Tj ET

BT /F1 11 Tf 350 695 Td (Delivery) Tj ET
BT /F2 9 Tf 350 680 Td (Expected by: ${escapePdf(order.deliveryDate || 'N/A')}) Tj ET

% Items header
0.996 0.843 0.0 rg
30 600 535 20 re f
0.2 0.2 0.2 rg
BT /F1 9 Tf 50 605 Td (Item) Tj ET
BT /F1 9 Tf 400 605 Td (Qty) Tj ET
BT /F1 9 Tf 460 605 Td (Amount) Tj ET

% Items
${lineItems.join('\n')}

% Summary line
0.85 0.85 0.85 rg
30 ${summaryY} 535 1 re f
0.2 0.2 0.2 rg

BT /F1 10 Tf 350 ${summaryY - 20} Td (Total Paid:) Tj ET
BT /F1 14 Tf 440 ${summaryY - 20} Td (Rs.${order.total?.toLocaleString() || '0'}) Tj ET

% Footer
0.6 0.6 0.6 rg
BT /F2 8 Tf 50 50 Td (ToyStore India Pvt. Ltd. | support@toystore.com | +91-9876543210) Tj ET
BT /F2 7 Tf 50 38 Td (123, Toy Street, MG Road, Tambaram, Chennai - 600045, Tamil Nadu, India) Tj ET
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

trailer
<< /Size 7 /Root 1 0 R >>
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
                  {order.address?.address1}
                  {order.address?.address2 ? <><br />{order.address.address2}</> : null}<br />
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
                    <span className="text-xs font-bold">₹{(item.product.price * item.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

        <p className="text-sm text-muted-foreground mt-4">📧 Confirmation email sent to your registered email.</p>

        <div className="flex flex-col gap-3 mt-6">
          {order && (
            <Button onClick={() => downloadReceipt(order)}
              variant="outline" className="w-full font-bold rounded-xl border-2 border-primary">
              <Download size={16} /> Download Receipt (PDF)
            </Button>
          )}
          <Link to="/products" className="w-full">
            <Button className="w-full bg-primary text-primary-foreground font-bold rounded-xl">Continue Shopping</Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default OrderSuccess;
