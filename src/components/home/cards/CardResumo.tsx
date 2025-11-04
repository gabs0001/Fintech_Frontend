'use client';

import { CardResumoProps } from "@/types/home";

export default function CardResumo({
  saldoMes,
  totalInvestido,
  ultimoGasto,
  onDetalhes,
}: CardResumoProps) {
  const resumo = [
    {
      titulo: 'Saldo mês',
      valor: saldoMes,
    },
    {
      titulo: 'Total investido',
      valor: totalInvestido,
    },
    {
      titulo: 'Último gasto',
      valor: ultimoGasto,
    },
  ];

  return (
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[30%] bg-[#0c5270] border border-gray-300 rounded-md shadow-sm p-4 h-[400px] overflow-y-auto flex-shrink-0">
      <section className="min-h-0">
        <h3 className="text-lg font-semibold text-white mb-2">Balanço</h3>
        <hr className="border-gray-400 mb-4" />

        <ul className="space-y-4">
          {resumo.map(({ titulo, valor }) => (
            <li key={titulo} className="bg-[#077a7d33] rounded-md p-3">
              <p className="text-white text-sm mb-1">{titulo}</p>
              <p className="text-white text-sm mb-2">
                R$ <span>{valor.toFixed(2)}</span>
              </p>
              <button
                className="bg-teal-700 text-white text-sm px-4 py-1 rounded-full hover:bg-teal-800"
                type="button"
                onClick={() => onDetalhes(titulo, valor.toString())}
              >
                Detalhes
              </button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}