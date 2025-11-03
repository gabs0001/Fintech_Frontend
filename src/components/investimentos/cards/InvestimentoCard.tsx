'use client';

import { InvestimentoCardProps } from '@/types/investimento';

export default function InvestimentoCard({ investimentos, onEditar, onExcluir }: InvestimentoCardProps) {
  return (
    <div className="block sm:hidden px-4">
      {investimentos.map((inv) => (
        <article
          key={inv.id}
          aria-labelledby={`investimento-${inv.id}`}
          className="bg-[#077a7d33] border border-[rgba(245,238,221,0.6)] rounded-md shadow-sm mb-6 p-4"
        >
          <h3 id={`investimento-${inv.id}`} className="text-center text-lg font-semibold text-[#f5f5f5] mb-4">
            {inv.nome}
          </h3>
          <p className="text-sm text-white mb-1">
            <strong>Tipo:</strong> {inv.tipo}
          </p>
          <p className="text-sm text-white mb-1">
            <strong>Valor:</strong> R$ {inv.valor.toFixed(2)}
          </p>
          <p className="text-sm text-white mb-1">
            <strong>Data:</strong> {inv.data}
          </p>
          <p className="text-sm text-white mb-1">
            <strong>Banco:</strong> {inv.banco}
          </p>
          <p className="text-sm text-white mb-3">
            <strong>Corretora:</strong> {inv.corretora}
          </p>
          <hr className="my-3" />
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={() => onEditar(inv)}
              aria-label={`Editar ${inv.nome}`}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <img src="/img/icons/edit.svg" alt="editar" className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => onExcluir(inv.id)}
              aria-label={`Excluir ${inv.nome}`}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <img src="/img/icons/delete.svg" alt="excluir" className="w-5 h-5" />
            </button>
          </div>
        </article>
      ))}
    </div>
  );
}