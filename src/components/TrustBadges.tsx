import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Leaf, Award, RotateCcw } from 'lucide-react';

const badges = [
  { icon: ShieldCheck, label: 'Child Safe Materials', emoji: '🛡️', desc: 'BIS certified & tested' },
  { icon: Leaf, label: 'Non Toxic Plastic', emoji: '🌿', desc: '100% BPA-free materials' },
  { icon: Award, label: 'BIS Certified Toys', emoji: '✅', desc: 'Indian safety standards' },
  { icon: RotateCcw, label: 'Easy Returns', emoji: '📦', desc: '7-day hassle-free returns' },
];

const TrustBadges = ({ compact = false }: { compact?: boolean }) => {
  if (compact) {
    return (
      <div className="flex flex-wrap gap-2">
        {badges.map((b, i) => (
          <span key={i} className="inline-flex items-center gap-1 text-[10px] font-bold bg-success/10 text-success px-2 py-1 rounded-full">
            {b.emoji} {b.label}
          </span>
        ))}
      </div>
    );
  }

  return (
    <section className="bg-gradient-to-r from-success/5 via-info/5 to-primary/5 border-y border-border/50">
      <div className="container py-6">
        <h2 className="font-display font-black text-xl md:text-2xl text-center mb-5">
          Why Parents Trust Us 💛
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {badges.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="bg-card rounded-2xl p-4 text-center border border-border/50 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="text-3xl mb-2">{b.emoji}</div>
              <b.icon size={22} className="mx-auto text-success mb-1" />
              <p className="font-display font-bold text-sm">{b.label}</p>
              <p className="text-[10px] text-muted-foreground mt-0.5">{b.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;
