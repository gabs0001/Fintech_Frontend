'use client';

import { CardResumoProps } from "@/types/home";

export default function CardResumo({
  saldoMes,
  totalInvestido,
  ultimoGasto,
  onDetalhes,
}: CardResumoProps) {
  return (
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[30%] bg-[#0c5270] border border-gray-300 rounded-md shadow-sm p-4
                h-[400px] overflow-y-auto flex-shrink-0">
      <section className="min-h-0">
        <h3 className="text-lg font-semibold text-white mb-2">Balanço</h3>
        <hr className="border-gray-400 mb-4" />
        <ul className="space-y-4">
          <li className="bg-[#077a7d33] rounded-md p-3">
            <p className="text-white text-sm mb-1">Saldo mês</p>
            <p className="text-white text-sm mb-2">R$ <span>{saldoMes.toFixed(2)}</span></p>
            <button
              className="bg-teal-700 text-white text-sm px-4 py-1 rounded-full hover:bg-teal-800"
              type="button"
              onClick={() => onDetalhes('Saldo mês', saldoMes.toString())}
            >
              Detalhes
            </button>
          </li>
          <li className="bg-[#077a7d33] rounded-md p-3">
            <p className="text-white text-sm mb-1">Total investido</p>
            <p className="text-white text-sm mb-2">R$ <span>{totalInvestido.toFixed(2)}</span></p>
            <button
              className="bg-teal-700 text-white text-sm px-4 py-1 rounded-full hover:bg-teal-800"
              type="button"
              onClick={() => onDetalhes('Total investido', totalInvestido.toString())}
            >
              Detalhes
            </button>
          </li>
          <li className="bg-[#077a7d33] rounded-md p-3">
            <p className="text-white text-sm mb-1">Último gasto</p>
            <p className="text-white text-sm mb-2">R$ <span>{ultimoGasto.toFixed(2)}</span></p>
            <button
              className="bg-teal-700 text-white text-sm px-4 py-1 rounded-full hover:bg-teal-800"
              type="button"
              onClick={() => onDetalhes('Último gasto', ultimoGasto.toString())}
            >
              Detalhes
            </button>
          </li>
        </ul>
      </section>
    </div>
  );
}