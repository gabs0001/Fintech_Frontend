'use client';

import { CardGrupoProps } from '@/types/home';
import BotaoAcao from '@/components/gastos/buttons/BotaoAcao';

export default function CardGrupo({
  titulo,
  itens,
  tipo,
  onEditar,
  onExcluir,
  onFavoritar,
  onDetalhes,
}: CardGrupoProps) {
  return (
    <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[70%] xl:w-[30%] bg-[#0c5270] border border-gray-300 rounded-md shadow-sm p-4
    h-[400px] overflow-y-auto flex-shrink-0"
    >
      <section className="min-h-0">
        <h3 className="text-lg font-semibold text-white mb-2">{titulo}</h3>
        <hr className="border-gray-400 mb-4" />
        <ul className="space-y-4">
          {itens.map((item) => (
            <li key={item.id} className="bg-[#077a7d33] rounded-md p-3">
              <p className="text-white text-sm mb-2">{item.descricao}</p>
              <button
                className="bg-teal-700 text-white text-sm px-4 py-1 rounded-full hover:bg-teal-800 mb-2"
                type="button"
                onClick={() => onDetalhes(item.descricao, item.data)}
              >
                Detalhes
              </button>
              <div className="flex justify-center gap-3">
                <BotaoAcao tipo="edit" onClick={() => onEditar(item, tipo)} />
                <BotaoAcao tipo="delete" onClick={() => onExcluir(item.id, tipo)} />
                <BotaoAcao tipo="favorite" onClick={() => onFavoritar(item.id, tipo)} />                
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}