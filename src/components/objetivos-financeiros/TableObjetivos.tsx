'use client';

import { TableObjetivosProps } from '@/types/objetivo';
import BotaoAcao from '@/components/gastos/buttons/BotaoAcao';
import CelulaDescricao from '@/components/shared/CelulaDescricao';

export default function TableObjetivos({
  objetivos,
  onEditar,
  onExcluir,
  abrirDrawer,
}: TableObjetivosProps) {
  return (
    <div className="my-6 overflow-x-auto hidden sm:block">
      <table className="min-w-full bg-[#077a7d33] border border-[rgba(245,238,221,0.6)] rounded-md shadow-sm">
        <thead className="bg-[rgba(122,226,207,0.5)] text-[#f5f5f5] text-sm">
          <tr>
            <th className="px-4 py-2 text-left">Nome</th>
            <th className="px-4 py-2 text-left">Descrição</th>
            <th className="px-4 py-2 text-left">Valor</th>
            <th className="px-4 py-2 text-left hidden lg:table-cell">Data</th>
            <th className="px-4 py-2 text-center">Ações</th>
          </tr>
        </thead>
        <tbody className="text-sm text-white">
          {objetivos.map((objetivo) => (
            <tr key={objetivo.id} className="border-t border-[var(--item-color)]">
              <td className="px-4 py-3">{objetivo.nome}</td>
              <td className="px-4 py-3">
                <CelulaDescricao
                  texto={objetivo.descricao}
                  titulo={`Detalhes de ${objetivo.nome}`}
                  abrirDrawer={abrirDrawer}
                />
              </td>
              <td className="px-4 py-3">R$ {objetivo.valor.toFixed(2)}</td>
              <td className="px-4 py-3 hidden lg:table-cell">{objetivo.data}</td>
              <td className="px-4 py-3 text-center">
                <div className="flex justify-center gap-2">
                  <BotaoAcao tipo="edit" onClick={() => onEditar(objetivo)} />
                  <BotaoAcao tipo="delete" onClick={() => onExcluir(objetivo.id)} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}