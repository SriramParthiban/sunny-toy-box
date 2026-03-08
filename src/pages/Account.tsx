import React, { useState, useEffect } from 'react';
import { User, Package, Heart, MapPin, LogOut, LogIn, Mail, Lock, Phone, Edit2, Save, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { toast } from 'sonner';
import { Link } from 'react-router-dom';

interface UserProfile {
  name: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  pincode: string;
}

const mockOrders = [
  { id: 'ORD-20260301-7821', date: '01 Mar 2026', total: 2598, status: 'Delivered', items: 3 },
  { id: 'ORD-20260215-4532', date: '15 Feb 2026', total: 4999, status: 'Delivered', items: 1 },
  { id: 'ORD-20260308-9910', date: '08 Mar 2026', total: 1698, status: 'Shipped', items: 2 },
];

const Account = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => localStorage.getItem('toystore_logged_in') === 'true');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [isSignUp, setIsSignUp] = useState(false);
  const [signUpName, setSignUpName] = useState('');
  const [editing, setEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'orders' | 'addresses'>('profile');

  const [profile, setProfile] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('toystore_profile');
    return saved ? JSON.parse(saved) : {
      name: 'Test User',
      email: 'testuser@toystore.com',
      phone: '+91-9876543210',
      address: '123, Rainbow Lane, Sunshine Apartments',
      city: 'Mumbai',
      pincode: '400001',
    };
  });

  useEffect(() => {
    if (isLoggedIn) {
      localStorage.setItem('toystore_profile', JSON.stringify(profile));
    }
  }, [profile, isLoggedIn]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!loginEmail) { toast.error('Please enter an email'); return; }
    const userProfile = { ...profile, email: loginEmail, name: signUpName || loginEmail.split('@')[0] };
    setProfile(userProfile);
    localStorage.setItem('toystore_logged_in', 'true');
    localStorage.setItem('toystore_profile', JSON.stringify(userProfile));
    setIsLoggedIn(true);
    toast.success(`Welcome${isSignUp ? '' : ' back'}, ${userProfile.name}! 🎉`);
  };

  const handleLogout = () => {
    localStorage.removeItem('toystore_logged_in');
    setIsLoggedIn(false);
    toast.success('Logged out successfully 👋');
  };

  const handleSaveProfile = () => {
    localStorage.setItem('toystore_profile', JSON.stringify(profile));
    setEditing(false);
    toast.success('Profile updated! ✅');
  };

  if (!isLoggedIn) {
    return (
      <div className="container py-10 pb-24 md:pb-10 flex justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
              <User size={36} className="text-primary" />
            </div>
            <h1 className="font-display font-black text-2xl">{isSignUp ? 'Create Account' : 'Welcome Back!'} 🧸</h1>
            <p className="text-sm text-muted-foreground mt-1">
              {isSignUp ? 'Join ToyStore for exclusive deals' : 'Sign in to your ToyStore account'}
            </p>
          </div>

          <form onSubmit={handleLogin} className="bg-card rounded-2xl shadow-md p-6 space-y-4">
            {isSignUp && (
              <div>
                <label className="text-sm font-bold mb-1 block">Full Name</label>
                <div className="relative">
                  <User size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                  <Input placeholder="Enter your name" value={signUpName} onChange={e => setSignUpName(e.target.value)}
                    className="pl-10 rounded-xl" />
                </div>
              </div>
            )}
            <div>
              <label className="text-sm font-bold mb-1 block">Email Address</label>
              <div className="relative">
                <Mail size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input type="email" placeholder="you@example.com" value={loginEmail} onChange={e => setLoginEmail(e.target.value)}
                  className="pl-10 rounded-xl" />
              </div>
            </div>
            <div>
              <label className="text-sm font-bold mb-1 block">Password</label>
              <div className="relative">
                <Lock size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
                <Input type="password" placeholder="Enter any password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)}
                  className="pl-10 rounded-xl" />
              </div>
              <p className="text-[10px] text-muted-foreground mt-1">🧪 Test mode: any password works!</p>
            </div>

            <Button type="submit" className="w-full bg-primary text-primary-foreground font-bold rounded-xl py-3">
              <LogIn size={16} /> {isSignUp ? 'Create Account' : 'Sign In'}
            </Button>

            <div className="text-center">
              <button type="button" onClick={() => setIsSignUp(!isSignUp)}
                className="text-sm text-secondary font-semibold hover:underline">
                {isSignUp ? 'Already have an account? Sign In' : "Don't have an account? Sign Up"}
              </button>
            </div>
          </form>

          <div className="mt-6 bg-muted rounded-2xl p-4 text-center">
            <p className="text-xs text-muted-foreground">
              🔓 <strong>Demo Mode:</strong> Enter any email & password to explore. No real authentication required.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-6 pb-24 md:pb-6">
      {/* Profile Header */}
      <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-6 text-primary-foreground mb-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 bg-card/20 backdrop-blur rounded-full flex items-center justify-center text-2xl font-black">
            {profile.name.charAt(0).toUpperCase()}
          </div>
          <div className="flex-1">
            <h1 className="font-display font-black text-xl">{profile.name}</h1>
            <p className="text-sm opacity-80">{profile.email}</p>
            <p className="text-xs opacity-60 mt-0.5">Member since Feb 2026</p>
          </div>
          <Button variant="ghost" size="sm" onClick={handleLogout}
            className="text-primary-foreground hover:bg-card/20 rounded-xl">
            <LogOut size={16} /> Logout
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        <div className="bg-card rounded-2xl p-4 text-center shadow-sm">
          <ShoppingBag size={20} className="mx-auto text-secondary mb-1" />
          <p className="font-display font-black text-lg">{mockOrders.length}</p>
          <p className="text-[10px] text-muted-foreground">Orders</p>
        </div>
        <Link to="/wishlist" className="bg-card rounded-2xl p-4 text-center shadow-sm hover:shadow-md transition-shadow">
          <Heart size={20} className="mx-auto text-destructive mb-1" />
          <p className="font-display font-black text-lg">5</p>
          <p className="text-[10px] text-muted-foreground">Wishlist</p>
        </Link>
        <div className="bg-card rounded-2xl p-4 text-center shadow-sm">
          <Package size={20} className="mx-auto text-primary mb-1" />
          <p className="font-display font-black text-lg">120</p>
          <p className="text-[10px] text-muted-foreground">Points</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex gap-2 mb-4 overflow-x-auto">
        {(['profile', 'orders', 'addresses'] as const).map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-sm font-bold whitespace-nowrap transition-colors ${activeTab === tab ? 'bg-primary text-primary-foreground' : 'bg-muted hover:bg-muted/80'}`}>
            {tab === 'profile' && '👤 Profile'}
            {tab === 'orders' && '📦 Orders'}
            {tab === 'addresses' && '📍 Address'}
          </button>
        ))}
      </div>

      {/* Profile Tab */}
      {activeTab === 'profile' && (
        <div className="bg-card rounded-2xl shadow-sm p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-bold text-lg">Personal Details</h2>
            {!editing ? (
              <Button variant="outline" size="sm" onClick={() => setEditing(true)} className="rounded-xl">
                <Edit2 size={14} /> Edit
              </Button>
            ) : (
              <Button size="sm" onClick={handleSaveProfile} className="rounded-xl bg-primary text-primary-foreground">
                <Save size={14} /> Save
              </Button>
            )}
          </div>

          <div className="grid gap-4">
            <div>
              <label className="text-xs font-bold text-muted-foreground mb-1 block">Full Name</label>
              {editing ? (
                <Input value={profile.name} onChange={e => setProfile({ ...profile, name: e.target.value })} className="rounded-xl" />
              ) : (
                <p className="font-semibold">{profile.name}</p>
              )}
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground mb-1 block">Email</label>
              {editing ? (
                <Input value={profile.email} onChange={e => setProfile({ ...profile, email: e.target.value })} className="rounded-xl" />
              ) : (
                <p className="font-semibold">{profile.email}</p>
              )}
            </div>
            <div>
              <label className="text-xs font-bold text-muted-foreground mb-1 block">Phone</label>
              {editing ? (
                <Input value={profile.phone} onChange={e => setProfile({ ...profile, phone: e.target.value })} className="rounded-xl" />
              ) : (
                <p className="font-semibold">{profile.phone}</p>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Orders Tab */}
      {activeTab === 'orders' && (
        <div className="space-y-3">
          {mockOrders.map(order => (
            <div key={order.id} className="bg-card rounded-2xl shadow-sm p-4">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-xs font-bold text-muted-foreground">{order.id}</span>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${order.status === 'Delivered' ? 'bg-green-100 text-green-700' : 'bg-blue-100 text-blue-700'}`}>
                  {order.status === 'Delivered' ? '✅' : '🚚'} {order.status}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold">{order.items} item{order.items > 1 ? 's' : ''}</p>
                  <p className="text-xs text-muted-foreground">{order.date}</p>
                </div>
                <p className="font-display font-black text-lg">₹{order.total.toLocaleString()}</p>
              </div>
            </div>
          ))}
          <div className="text-center pt-4">
            <Link to="/products">
              <Button variant="outline" className="rounded-xl font-bold">
                Continue Shopping 🛍️
              </Button>
            </Link>
          </div>
        </div>
      )}

      {/* Address Tab */}
      {activeTab === 'addresses' && (
        <div className="bg-card rounded-2xl shadow-sm p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="font-display font-bold text-lg">Saved Address</h2>
            {!editing ? (
              <Button variant="outline" size="sm" onClick={() => setEditing(true)} className="rounded-xl">
                <Edit2 size={14} /> Edit
              </Button>
            ) : (
              <Button size="sm" onClick={handleSaveProfile} className="rounded-xl bg-primary text-primary-foreground">
                <Save size={14} /> Save
              </Button>
            )}
          </div>
          <div className="bg-muted rounded-xl p-4">
            <div className="flex items-start gap-3">
              <MapPin size={18} className="text-secondary mt-0.5 shrink-0" />
              <div className="flex-1 space-y-3">
                {editing ? (
                  <>
                    <Input placeholder="Address" value={profile.address} onChange={e => setProfile({ ...profile, address: e.target.value })} className="rounded-xl" />
                    <div className="grid grid-cols-2 gap-3">
                      <Input placeholder="City" value={profile.city} onChange={e => setProfile({ ...profile, city: e.target.value })} className="rounded-xl" />
                      <Input placeholder="Pincode" value={profile.pincode} onChange={e => setProfile({ ...profile, pincode: e.target.value })} className="rounded-xl" />
                    </div>
                  </>
                ) : (
                  <>
                    <p className="font-semibold text-sm">{profile.name}</p>
                    <p className="text-sm text-muted-foreground">{profile.address}</p>
                    <p className="text-sm text-muted-foreground">{profile.city} - {profile.pincode}</p>
                    <p className="text-sm text-muted-foreground">{profile.phone}</p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
