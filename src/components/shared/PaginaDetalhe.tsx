'use client';

import { ReactNode } from 'react';
import { useRouter } from 'next/navigation';

type PaginaDetalheProps = {
  titulo: string;
  subtitulo?: string;
  children: ReactNode;
  voltarPara?: string;
};

export default function PaginaDetalhe({
  titulo,
  subtitulo,
  children,
  voltarPara,
}: PaginaDetalheProps) {
  const router = useRouter();

  return (
    <main
      className="mx-auto w-full max-w-2xl px-4 py-8"
      aria-label={`Detalhes de ${titulo}`}
    >
      <section className="bg-white/10 border border-white/20 rounded-xl p-6 space-y-6">
        <header className="flex flex-col gap-1">
          <h1 className="text-2xl font-bold text-white">{titulo}</h1>
          {subtitulo && <p className="text-sm text-white/70">{subtitulo}</p>}
        </header>

        <div className="space-y-4">{children}</div>

        {voltarPara && (
          <footer className="pt-4">
            <button
              type="button"
              onClick={() => router.push(voltarPara)}
              className="text-sm text-teal-400 hover:underline focus:outline-none focus:ring-2 focus:ring-teal-400 rounded"
              aria-label={`Voltar para ${voltarPara}`}
            >
              ← Voltar
            </button>
          </footer>
        )}
      </section>
    </main>
  );
}