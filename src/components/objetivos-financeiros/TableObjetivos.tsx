'use client';

import { TableObjetivosProps } from '@/types/objetivo';
import BotaoAcao from '@/components/shared/BotaoAcao';
import CelulaDescricao from '@/components/shared/CelulaDescricao';

export default function TableObjetivos({
  objetivos,
  onEditar,
  onExcluir,
  abrirDrawer,
}: TableObjetivosProps) {
  if (!objetivos.length) {
    return (
      <div className="hidden sm:block text-center text-white mt-6">
        Nenhum objetivo cadastrado.
      </div>
    );
  }

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
            <tr key={objetivo.id} className="border-t border-white/20 text-center">
              <td className="px-4 py-3 text-left">{objetivo.nome}</td>
              <td className="px-4 py-3 text-left">
                <CelulaDescricao
                  texto={objetivo.descricao}
                  titulo={`Detalhes de ${objetivo.nome}`}
                  abrirDrawer={abrirDrawer}
                />
              </td>
              <td className="px-4 py-3 text-left">R$ {objetivo.valor.toFixed(2)}</td>
              <td className="px-4 py-3 hidden lg:table-cell text-left">{objetivo.data}</td>
              <td className="px-4 py-3">
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