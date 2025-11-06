'use client';

import { TableGastosProps } from '@/types/gastos';
import BotaoAcao from '../shared/BotaoAcao';
import CelulaDescricao from '../shared/CelulaDescricao';

export default function TableGastos({ gastos, onEditar, onExcluir, abrirDrawer }: TableGastosProps) {
  if(!gastos.length) {
    return (
      <div className="hidden sm:block text-center text-white mt-6">
        Nenhum gasto encontrado.
      </div>
    );
  }

  return (
    <div className="my-6 overflow-x-auto hidden sm:block">
      <table className="min-w-full bg-[#077a7d33] border border-[rgba(245,238,221,0.6)] rounded-md shadow-sm">
        <thead className="bg-[rgba(122,226,207,0.5)] text-[#f5f5f5] text-sm">
          <tr>
            <th className="px-4 py-2 text-left">Categoria</th>
            <th className="px-4 py-2 text-left">Descrição</th>
            <th className="px-4 py-2 text-left">Valor</th>
            <th className="px-4 py-2 text-left">Data</th>
            <th className="px-4 py-2 text-center">Ações</th>
          </tr>
        </thead>
        <tbody className="text-sm text-white">
          {gastos.map((gasto) => (
            <tr key={gasto.id} className="border-t border-white/20">
              <td className="px-4 py-3">{gasto.categoria}</td>
              <td className="px-4 py-3">
                <CelulaDescricao
                  texto={gasto.descricao}
                  titulo={`Detalhes de ${gasto.categoria}`}
                  abrirDrawer={abrirDrawer}
                />
              </td>
              <td className="px-4 py-3">R$ {Number(gasto.valor).toFixed(2)}</td>
              <td className="px-4 py-3">{gasto.data}</td>
              <td className="px-4 py-3 text-center">
                <div className="flex justify-center gap-2">
                  <BotaoAcao tipo="edit" onClick={() => onEditar(gasto)} />
                  <BotaoAcao tipo="delete" onClick={() => onExcluir(gasto.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}