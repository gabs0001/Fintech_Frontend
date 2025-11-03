'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type PaginaDetalheProps = {
  titulo: string;
  subtitulo?: string;
  children: ReactNode;
  voltarPara?: string;
};

export default function PaginaDetalhe({ titulo, subtitulo, children, voltarPara }: PaginaDetalheProps) {
  const router = useRouter();

  return (
    <main className="mx-auto w-full max-w-2xl px-4 py-8">
      <div className="bg-white/10 border border-white/20 rounded-xl p-6 space-y-6">
        <div className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-white">{titulo}</h1>
          {subtitulo && <p className="text-sm text-white/70">{subtitulo}</p>}
        </div>

        <div className="space-y-4">{children}</div>

        {voltarPara && (
          <div className="pt-4">
            <button
              onClick={() => router.push(voltarPara)}
              className="text-sm text-teal-400 hover:underline"
            >
              ← Voltar
            </button>
          </div>
        )}
      </div>
    </main>
  );
}