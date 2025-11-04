'use client';

import { ObjetivoCardProps } from '@/types/objetivo';
import BotaoAcao from '@/components/shared/BotaoAcao';

export default function ObjetivoCard({ objetivos, onEditar, onExcluir }: ObjetivoCardProps) {
  return (
    <div className="block sm:hidden px-4">
      {objetivos.map((objetivo) => (
        <article
          key={objetivo.id}
          aria-labelledby={`objetivo-${objetivo.id}`}
          className="bg-[#077a7d33] border border-[rgba(245,238,221,0.6)] rounded-md shadow-sm mb-6 p-4"
        >
          <h3
            id={`objetivo-${objetivo.id}`}
            className="text-center text-lg font-semibold text-[#f5f5f5] mb-4"
          >
            {objetivo.nome}
          </h3>

          <div className="text-sm text-white space-y-1 mb-3">
            <p><strong>Valor:</strong> R$ {objetivo.valor.toFixed(2)}</p>
            <p><strong>Data:</strong> {objetivo.data}</p>
            <p><strong>Descrição:</strong> {objetivo.descricao}</p>
          </div>

          <hr className="my-3" />

          <div className="flex justify-center gap-4">
            <BotaoAcao tipo="edit" onClick={() => onEditar(objetivo)} />
            <BotaoAcao tipo="delete" onClick={() => onExcluir(objetivo.id)} />
          </div>
        </article>
      ))}
    </div>
  );
}