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
          className="w-full rounded-md p-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-[#343F57] text-white"
        />
      </div>

      <div className="w-full sm:w-1/2 lg:w-1/3 mx-4 xl:mx-0">
        <label htmlFor="filtrarPorTipo" className="block text-sm font-medium text-white mb-1">
          Filtrar por:
        </label>
        <select
          name="filtrarPorTipo"
          id="filtrarPorTipo"
          defaultValue=""
          onChange={handleTipoChange}
          required
          className="w-full rounded-md p-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-[#343F57] text-white"
        >
          <option value="" disabled>
            Selecione o tipo de investimento
          </option>
          {tipos.map((tipo, index) => (
            <option key={index} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full sm:w-1/2 lg:w-1/3 flex items-center justify-evenly mb-5 sm:mb-0">
        <div className="flex items-center mt-5">
          <input
            id="banco"
            name="ordenacao"
            type="radio"
            onChange={() => onOrdenacaoChange?.('banco')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="banco" className="ml-2 text-sm text-white">
            Banco
          </label>
        </div>
        <div className="flex items-center mt-5">
          <input
            id="corretora"
            name="ordenacao"
            type="radio"
            onChange={() => onOrdenacaoChange?.('corretora')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="corretora" className="ml-2 text-sm text-white">
            Corretora
          </label>
        </div>
        <div className="flex items-center mt-5">
          <input
            id="data-investimento"
            name="ordenacao"
            type="radio"
            onChange={() => onOrdenacaoChange?.('data')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="data-investimento" className="ml-2 text-sm text-white">
            Data
          </label>
        </div>
      </div>
    </fieldset>
  );
}