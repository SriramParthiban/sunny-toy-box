import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
  <footer className="bg-foreground text-background pb-20 md:pb-0">
    <div className="container py-10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="col-span-2 md:col-span-1">
          <h3 className="font-display font-black text-xl mb-3">🧸 ToyStore</h3>
          <p className="text-sm opacity-80 leading-relaxed">India's favorite toy store for kids aged 0-18. Quality toys, great prices, and fast delivery!</p>
          <div className="flex gap-3 mt-4 text-lg">
            <span>📘</span><span>📸</span><span>🐦</span><span>▶️</span>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3">Shop</h4>
          <div className="space-y-2 text-sm opacity-80">
            <Link to="/products?age=0-5" className="block hover:opacity-100">0-5 Years</Link>
            <Link to="/products?age=5-10" className="block hover:opacity-100">5-10 Years</Link>
            <Link to="/products?age=10-15" className="block hover:opacity-100">10-15 Years</Link>
            <Link to="/products?age=15-18" className="block hover:opacity-100">15-18 Years</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3">Help</h4>
          <div className="space-y-2 text-sm opacity-80">
            <Link to="/contact" className="block hover:opacity-100">Contact Us</Link>
            <Link to="/faq" className="block hover:opacity-100">FAQ</Link>
            <Link to="/shipping" className="block hover:opacity-100">Shipping</Link>
            <Link to="/returns" className="block hover:opacity-100">Returns</Link>
          </div>
        </div>
        <div>
          <h4 className="font-display font-bold mb-3">Contact</h4>
          <div className="space-y-2 text-sm opacity-80">
            <p>📞 +91-9876543210</p>
            <p>📧 support@toystore.com</p>
            <p>🕐 Mon-Sat, 9AM-6PM</p>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 mt-8 pt-6 text-center text-xs opacity-60">
        © 2026 ToyStore India Pvt. Ltd. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
