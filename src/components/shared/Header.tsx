'use client';

import { useState } from 'react';
import Link from 'next/link';
import { HeaderProps } from '@/types/layout';

export default function Header({ navItems }: HeaderProps) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-md">
      <nav
        className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between"
        aria-label="Navegação principal"
      >
        <Link
          href="/login"
          aria-label="Página inicial"
          className="text-2xl font-bold text-white hover:text-teal-300 transition-colors"
        >
          Fintech
        </Link>

        <div className="hidden md:flex space-x-6">
          {navItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
            >
              {label}
            </Link>
          ))}
        </div>

        <button
          className="md:hidden text-white text-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
          onClick={() => setMenuAberto((prev) => !prev)}
          aria-label={menuAberto ? 'Fechar menu' : 'Abrir menu'}
        >
          ☰
        </button>
      </nav>

      <div
        className={`md:hidden bg-gray-800 px-4 pt-2 pb-4 transition-all duration-300 ${
          menuAberto ? 'max-h-screen opacity-100' : 'max-h-0 overflow-hidden opacity-0'
        }`}
        aria-hidden={!menuAberto}
      >
        {navItems.map(({ label, href }) => (
          <Link
            key={label}
            href={href}
            className="block py-2 text-white hover:text-indigo-400 transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-400 rounded"
            onClick={() => setMenuAberto(false)}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
}