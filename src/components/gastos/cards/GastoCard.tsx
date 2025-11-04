'use client';

import { GastoCardProps } from "@/types/gastos";
import BotaoAcao from "../../shared/BotaoAcao";

export default function GastoCard({ gastos, onEditar, onExcluir }: GastoCardProps) {
  return (
    <div className="block sm:hidden px-4">
      {gastos.map((gasto) => (
        <article
          key={gasto.id}
          aria-labelledby={`gasto-${gasto.id}`}
          className="bg-[#077a7d33] border border-[rgba(245,238,221,0.6)] rounded-md shadow-sm mb-6 p-4"
        >
          <h3
            id={`gasto-${gasto.id}`}
            className="text-center text-lg font-semibold text-[#f5f5f5] mb-4"
          >
            {gasto.categoria}
          </h3>

          <div className="text-sm text-white space-y-1 mb-3">
            <p><strong>Valor:</strong> R$ {gasto.valor}</p>
            <p><strong>Data:</strong> {gasto.data}</p>
            <p><strong>Descrição:</strong> {gasto.descricao}</p>
          </div>

          <hr className="my-3" />

          <div className="flex justify-center gap-4">
            <BotaoAcao tipo="edit" onClick={() => onEditar(gasto)} />
            <BotaoAcao tipo="delete" onClick={() => onExcluir(gasto.id)} />
          </div>
        </article>
      ))}
    </div>
  );
}