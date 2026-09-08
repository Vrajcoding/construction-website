import React, { useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { Badge } from '@/components/ui/Badge';
import { Container } from './Container';

export const PromoBar: React.FC = () => {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="bg-[#111111] text-white py-2 px-4 text-xs font-medium border-b border-neutral-800">
      <Container className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Badge variant="green">Deals up to 70% OFF</Badge>
          <span className="hidden sm:inline text-neutral-300">
            Special promotion on commercial architecture & turnkey design services.
          </span>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-1 font-semibold text-white hover:text-[#FA6400] transition-colors uppercase tracking-wider text-[11px]"
          >
            <span>Buy now</span>
            <ArrowRight className="w-3 h-3" />
          </a>

          <button
            onClick={() => setVisible(false)}
            className="text-neutral-400 hover:text-white transition-colors p-0.5"
            aria-label="Close promo banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </Container>
    </div>
  );
};
