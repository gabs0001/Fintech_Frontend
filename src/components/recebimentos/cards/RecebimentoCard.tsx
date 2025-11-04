'use client';

import { RecebimentoCardProps } from '@/types/recebimento';
import BotaoAcao from '@/components/shared/BotaoAcao';

export default function RecebimentoCard({ recebimentos, onEditar, onExcluir }: RecebimentoCardProps) {
  return (
    <div className="block sm:hidden px-4">
      {recebimentos.map((r) => (
        <article
          key={r.id}
          aria-labelledby={`recebimento-${r.id}`}
          className="bg-[#077a7d33] border border-[rgba(245,238,221,0.6)] rounded-md shadow-sm mb-6 p-4"
        >
          <h3
            id={`recebimento-${r.id}`}
            className="text-center text-lg font-semibold text-[#f5f5f5] mb-4"
          >
            {r.tipo}
          </h3>

          <div className="text-sm text-white space-y-1 mb-3">
            <p><strong>Valor:</strong> R$ {r.valor.toFixed(2)}</p>
            <p><strong>Data:</strong> {r.data}</p>
            <p><strong>Descrição:</strong> {r.descricao}</p>
          </div>

          <hr className="my-3" />

          <div className="flex justify-center gap-4">
            <BotaoAcao tipo="edit" onClick={() => onEditar(r)} />
            <BotaoAcao tipo="delete" onClick={() => onExcluir(r.id)} />
          </div>
        </article>
      ))}
    </div>
  );
}