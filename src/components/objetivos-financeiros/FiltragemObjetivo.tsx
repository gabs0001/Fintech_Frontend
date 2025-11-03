'use client';

import { ChangeEvent } from 'react';
import { FiltragemObjetivoProps } from '@/types/objetivo';

export default function FiltragemObjetivo({
  onBuscaChange,
  onOrdenacaoChange,
}: FiltragemObjetivoProps) {
  const handleBuscaChange = (e: ChangeEvent<HTMLInputElement>) => {
    onBuscaChange?.(e.target.value);
  };

  return (
    <fieldset className="w-full flex flex-wrap justify-center items-center gap-6 mt-6 lg:flex-col">
      <legend className="sr-only">Filtragem e Ordenação</legend>

      <div className="w-full sm:w-2/3 lg:w-1/2 mx-4 lg:mx-0 mt-6">
        <label htmlFor="busca" className="block text-sm font-medium text-white mb-1">
          Pesquisar
        </label>
        <input
          type="search"
          name="busca"
          id="busca"
          placeholder="Digite o nome do seu objetivo"
          onChange={handleBuscaChange}
          className="w-full rounded-md p-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-[#343F57] text-white"
        />
      </div>

      <div className="w-full sm:w-1/3 flex items-center justify-evenly mb-5 sm:mb-0">
        <div className="flex items-center mt-5">
          <input
            id="valor-objetivo"
            name="filtragem"
            type="radio"
            onChange={() => onOrdenacaoChange?.('valor')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="valor-objetivo" className="ml-2 text-sm text-white">
            Valor
          </label>
        </div>
        <div className="flex items-center mt-5">
          <input
            id="data-objetivo"
            name="filtragem"
            type="radio"
            onChange={() => onOrdenacaoChange?.('data')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="data-objetivo" className="ml-2 text-sm text-white">
            Data
          </label>
        </div>
      </div>
    </fieldset>
  );
}