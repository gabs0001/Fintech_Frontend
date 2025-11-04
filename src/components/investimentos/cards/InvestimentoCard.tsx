'use client';

import { InvestimentoCardProps } from '@/types/investimento';
import BotaoAcao from '@/components/shared/BotaoAcao';

export default function InvestimentoCard({ investimentos, onEditar, onExcluir }: InvestimentoCardProps) {
  return (
    <div className="block sm:hidden px-4">
      {investimentos.map((inv) => (
        <article
          key={inv.id}
          aria-labelledby={`investimento-${inv.id}`}
          className="bg-[#077a7d33] border border-[rgba(245,238,221,0.6)] rounded-md shadow-sm mb-6 p-4"
        >
          <h3
            id={`investimento-${inv.id}`}
            className="text-center text-lg font-semibold text-[#f5f5f5] mb-4"
          >
            {inv.nome}
          </h3>

          <div className="text-sm text-white space-y-1 mb-3">
            <p><strong>Tipo:</strong> {inv.tipo}</p>
            <p><strong>Valor:</strong> R$ {inv.valor.toFixed(2)}</p>
            <p><strong>Data:</strong> {inv.data}</p>
            <p><strong>Banco:</strong> {inv.banco}</p>
            <p><strong>Corretora:</strong> {inv.corretora}</p>
          </div>

          <hr className="my-3" />

          <div className="flex justify-center gap-4">
            <BotaoAcao tipo="edit" onClick={() => onEditar(inv)} />
            <BotaoAcao tipo="delete" onClick={() => onExcluir(inv.id)} />
          </div>
        </article>
      ))}
    </div>
  );
}