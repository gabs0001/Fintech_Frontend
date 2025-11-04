'use client';

import { TableInvestimentosProps } from '@/types/investimento';
import BotaoAcao from '../shared/BotaoAcao';

export default function TableInvestimentos({
  investimentos,
  onEditar,
  onExcluir,
}: TableInvestimentosProps) {
  if (!investimentos.length) {
    return (
      <div className="hidden sm:block text-center text-white mt-6">
        Nenhum investimento encontrado.
      </div>
    );
  }

  return (
    <div className="my-6 overflow-x-auto hidden sm:block">
      <table className="min-w-full bg-[#077a7d33] border border-[rgba(245,238,221,0.6)] rounded-md shadow-sm text-[#f5eedd] text-sm">
        <thead className="bg-[rgba(122,226,207,0.5)] text-[#f5f5f5] text-sm">
          <tr>
            <th className="px-4 py-2 text-center">Nome</th>
            <th className="px-4 py-2 text-center">Tipo</th>
            <th className="px-4 py-2 text-center">Valor</th>
            <th className="px-4 py-2 text-center hidden lg:table-cell">Corretora</th>
            <th className="px-4 py-2 text-center hidden lg:table-cell">Banco</th>
            <th className="px-4 py-2 text-center hidden lg:table-cell">Data</th>
            <th className="px-4 py-2 text-center">Vencimento</th>
            <th className="px-4 py-2 text-center">Ações</th>
          </tr>
        </thead>
        <tbody className="text-sm font-medium text-white">
          {investimentos.map((inv) => (
            <tr key={inv.id} className="border-t border-white/20 text-center">
              <td className="px-4 py-3">{inv.nome}</td>
              <td className="px-4 py-3">{inv.tipo}</td>
              <td className="px-4 py-3">R$ {inv.valor.toFixed(2)}</td>
              <td className="px-4 py-3 hidden lg:table-cell">{inv.corretora}</td>
              <td className="px-4 py-3 hidden lg:table-cell">{inv.banco}</td>
              <td className="px-4 py-3 hidden lg:table-cell">{inv.data}</td>
              <td className="px-4 py-3">{inv.vencimento ?? 'N/A'}</td>
              <td className="px-4 py-3">
                <div className="flex justify-center gap-2">
                  <BotaoAcao tipo="edit" onClick={() => onEditar(inv)} />
                  <BotaoAcao tipo="delete" onClick={() => onExcluir(inv.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}