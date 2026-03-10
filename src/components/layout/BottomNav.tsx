import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, Grid3X3, ShoppingCart, Heart, User } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';

const BottomNav = () => {
  const location = useLocation();
  const { totalItems } = useCart();

  const links = [
    { to: '/', icon: Home, label: 'Home' },
    { to: '/products', icon: Grid3X3, label: 'Shop' },
    { to: '/cart', icon: ShoppingCart, label: 'Cart', badge: totalItems },
    { to: '/wishlist', icon: Heart, label: 'Wishlist' },
    { to: '/account', icon: User, label: 'Account' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-t shadow-lg md:hidden safe-area-bottom">
      <div className="flex items-center justify-around h-16">
        {links.map(({ to, icon: Icon, label, badge }) => {
          const active = location.pathname === to;
          return (
            <Link key={to} to={to}
              className={`flex flex-col items-center gap-0.5 text-xs font-semibold transition-all relative min-w-[56px] py-1.5 ${active ? 'text-secondary scale-110' : 'text-muted-foreground active:scale-95'}`}>
              <Icon size={22} strokeWidth={active ? 2.5 : 2} />
              {badge ? (
                <span className="absolute -top-0.5 right-1 bg-secondary text-secondary-foreground text-[10px] font-bold w-4.5 h-4.5 rounded-full flex items-center justify-center shadow-sm min-w-[18px] min-h-[18px]">
                  {badge}
                </span>
              ) : null}
              <span className="text-[10px]">{label}</span>
              {active && <span className="absolute -bottom-0.5 w-5 h-0.5 bg-secondary rounded-full" />}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;
