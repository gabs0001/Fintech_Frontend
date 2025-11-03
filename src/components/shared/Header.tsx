'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HeaderProps } from '@/types/layout';

export default function Header({ navItems }: HeaderProps) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-gray-900 text-white">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/login" aria-label="Página inicial" className="text-2xl font-bold text-white">
          Fintech
        </Link>

        <div className="hidden md:flex space-x-6">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white hover:text-indigo-400 transition-colors"
            >
              {label}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Abrir menu"
        >
          ☰
        </button>
      </nav>
      {menuAberto && (
        <div className="md:hidden bg-gray-800 px-4 pb-4">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="block py-2 text-white hover:text-indigo-400 transition-colors"
              onClick={() => setMenuAberto(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}