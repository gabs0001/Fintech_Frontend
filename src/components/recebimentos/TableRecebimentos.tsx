'use client';

import { TableRecebimentosProps } from '@/types/recebimento';
import BotaoAcao from '../shared/BotaoAcao';
import CelulaDescricao from '../shared/CelulaDescricao';

export default function TableRecebimentos({
  recebimentos,
  onEditar,
  onExcluir,
  abrirDrawer,
}: TableRecebimentosProps) {
  if (!recebimentos.length) {
    return (
      <div className="hidden sm:block text-center text-white mt-6">
        Nenhum recebimento registrado.
      </div>
    );
  }

  return (
    <div className="my-6 overflow-x-auto hidden sm:block">
      <table className="min-w-full bg-[#077a7d33] border border-[rgba(245,238,221,0.6)] rounded-md shadow-sm">
        <thead className="bg-[rgba(122,226,207,0.5)] text-[#f5f5f5] text-sm">
          <tr>
            <th className="px-4 py-2 text-left">Tipo</th>
            <th className="px-4 py-2 text-left">Descrição</th>
            <th className="px-4 py-2 text-left">Valor</th>
            <th className="px-4 py-2 text-left hidden lg:table-cell">Data</th>
            <th className="px-4 py-2 text-center">Ações</th>
          </tr>
        </thead>
        <tbody className="text-sm text-white">
          {recebimentos.map((r) => (
            <tr key={r.id} className="border-t border-white/20 text-center">
              <td className="px-4 py-3 text-left">{r.tipo}</td>
              <td className="px-4 py-3 text-left">
                <CelulaDescricao
                  texto={r.descricao}
                  titulo={`Detalhes de ${r.tipo}`}
                  abrirDrawer={abrirDrawer}
                />
              </td>
              <td className="px-4 py-3 text-left">R$ {r.valor.toFixed(2)}</td>
              <td className="px-4 py-3 hidden lg:table-cell text-left">{r.data}</td>
              <td className="px-4 py-3">
                <div className="flex justify-center gap-2">
                  <BotaoAcao tipo="edit" onClick={() => onEditar(r)} />
                  <BotaoAcao tipo="delete" onClick={() => onExcluir(r.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}