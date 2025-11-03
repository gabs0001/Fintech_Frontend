'use client';

import { GastoCardProps } from "@/types/gastos";

export default function GastoCard({ gastos, onEditar, onExcluir }: GastoCardProps) {
  return (
    <div className="block sm:hidden px-4">
      {gastos.map((gasto) => (
        <article
          key={gasto.id}
          aria-labelledby={`gasto-${gasto.id}`}
          className="bg-[#077a7d33] border border-[rgba(245,238,221,0.6)] rounded-md shadow-sm mb-6 p-4"
        >
          <h3 id={`gasto-${gasto.id}`} className="text-center text-lg font-semibold text-[#f5f5f5] mb-4">
            {gasto.categoria}
          </h3>
          <p className="text-sm text-white mb-1">
            <strong>Valor:</strong> {gasto.valor}
          </p>
          <p className="text-sm text-white mb-1">
            <strong>Data:</strong> {gasto.data}
          </p>
          <p className="text-sm text-white mb-3">
            <strong>Descrição:</strong> {gasto.descricao}
          </p>
          <hr className="my-3" />
          <div className="flex justify-center gap-4">
            <button
              type="button"
              onClick={() => onEditar(gasto)}
              aria-label={`Editar ${gasto.categoria}`}
              className="p-2 hover:bg-gray-100 rounded"
            >
              <img src="/img/icons/edit.svg" alt="editar" className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => onExcluir(gasto.id)}
              aria-label={`Excluir ${gasto.categoria}`}
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