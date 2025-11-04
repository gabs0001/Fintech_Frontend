'use client';

import { DrawerLateralProps } from '@/types/components';
import { useEscapeKey } from '@/hooks/useEscapeKey';

export default function DrawerLateral({ aberto, onFechar, titulo, descricao }: DrawerLateralProps) {
  useEscapeKey(onFechar);

  return (
    <aside
      aria-hidden={!aberto}
      aria-label="Painel lateral de detalhes"
      className={`fixed top-0 right-0 h-full w-full sm:w-[35rem] bg-teal-700 text-white shadow-lg z-[9999] transition-transform duration-300 ${
        aberto ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <button
        onClick={onFechar}
        className="absolute top-4 right-6 text-3xl font-bold hover:text-gray-300"
        aria-label="Fechar drawer"
      >
        ×
      </button>

      <div className="p-6 mt-10">
        <h2 className="text-2xl font-semibold">{titulo}</h2>
        <p className="mt-6 text-base leading-relaxed whitespace-pre-line">{descricao}</p>

        <button
          onClick={onFechar}
          className="mt-6 w-full sm:w-64 h-12 text-sm font-medium bg-teal-600 hover:bg-teal-800 border border-gray-300 rounded-md transition-transform hover:scale-105"
        >
          Fechar
        </button>
      </div>
    </aside>
  );
}