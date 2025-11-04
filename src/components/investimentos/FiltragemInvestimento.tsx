'use client';

import { ChangeEvent } from 'react';
import { FiltragemInvestimentoProps } from '@/types/investimento';

export default function FiltragemInvestimento({
  tipos,
  onTipoChange,
  onOrdenacaoChange,
  onBuscaChange,
}: FiltragemInvestimentoProps) {
  const handleTipoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onTipoChange(e.target.value);
  };

  const handleBuscaChange = (e: ChangeEvent<HTMLInputElement>) => {
    onBuscaChange?.(e.target.value);
  };

  return (
    <fieldset className="w-full flex flex-wrap justify-center gap-6 mt-6">
      <legend className="sr-only">Opções de filtro e ordenação</legend>

      <div className="w-full sm:w-1/2 lg:w-1/3 mx-4 xl:mx-0">
        <label htmlFor="buscaPorNome" className="block text-sm font-medium text-white mb-1">
          Busca por nome:
        </label>
        <input
          id="buscaPorNome"
          name="buscaPorNome"
          type="search"
          placeholder="Digite o nome da aplicação"
          onChange={handleBuscaChange}
          className="w-full rounded-md py-2 px-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-[#343F57] text-white"
        />
      </div>

      <div className="w-full sm:w-1/2 lg:w-1/3 mx-4 xl:mx-0">
        <label htmlFor="filtrarPorTipo" className="block text-sm font-medium text-white mb-1">
          Filtrar por tipo:
        </label>
        <select
          id="filtrarPorTipo"
          name="filtrarPorTipo"
          defaultValue=""
          onChange={handleTipoChange}
          required
          className="w-full rounded-md py-2 px-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-[#343F57] text-white"
        >
          <option value="" disabled>
            Selecione o tipo de investimento
          </option>
          {tipos.map((tipo) => (
            <option key={tipo} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full sm:w-1/2 lg:w-1/3 flex items-center justify-evenly mb-5 sm:mb-0">
        {['banco', 'corretora', 'data'].map((campo) => (
          <div key={campo} className="flex items-center mt-5">
            <input
              id={`ordenar-${campo}`}
              name="ordenacao"
              type="radio"
              onChange={() => onOrdenacaoChange?.(campo as 'banco' | 'corretora' | 'data')}
              className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
            />
            <label htmlFor={`ordenar-${campo}`} className="ml-2 text-sm text-white capitalize">
              {campo}
            </label>
          </div>
        ))}
      </div>
    </fieldset>
  );
}