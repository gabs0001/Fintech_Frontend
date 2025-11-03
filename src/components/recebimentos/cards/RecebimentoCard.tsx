'use client';

import { RecebimentoCardProps } from '@/types/recebimento';

export default function RecebimentoCard({ recebimentos, onEditar, onExcluir }: RecebimentoCardProps) {
  return (
    <div className="block sm:hidden px-4">
      {recebimentos.map((r) => (
        <article
          key={r.id}
          aria-labelledby={`recebimento-${r.id}`}
          className="bg-[#077a7d33] border border-[rgba(245,238,221,0.6)] rounded-md shadow-sm mb-6 p-4"
        >
          <h3 id={`recebimento-${r.id}`} className="text-center text-lg font-semibold text-[#f5f5f5] mb-4">
            {r.tipo}
          </h3>
          <p className="text-sm text-white mb-1">
            <strong>Valor:</strong> R$ {r.valor.toFixed(2)}
          </p>
          <p className="text-sm text-white mb-1">
            <strong>Data:</strong> {r.data}
          </p>
          <p className="text-sm text-white mb-3">
            <strong>Descrição:</strong> {r.descricao}
          </p>
          <hr className="my-3" />
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={() => onEditar(r)}
              aria-label={`Editar ${r.tipo}`}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <img src="/img/icons/edit.svg" alt="editar" className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => onExcluir(r.id)}
              aria-label={`Excluir ${r.tipo}`}
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