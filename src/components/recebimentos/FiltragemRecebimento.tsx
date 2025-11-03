'use client';

import { ChangeEvent } from 'react';
import { FiltragemRecebimentoProps } from '@/types/recebimento';

export default function FiltragemRecebimento({
  tipos,
  onTipoChange,
  onOrdenacaoChange,
}: FiltragemRecebimentoProps) {
  const handleTipoChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onTipoChange?.(e.target.value);
  };

  return (
    <fieldset className="w-full flex flex-wrap justify-center gap-6 mt-6 sm:gap-0 xl:flex-col xl:items-center">

      <legend className="sr-only">Filtragem e Ordenação</legend>

      <div className="w-full sm:w-1/2 lg:w-1/3 mx-4 xl:mt-6">
        <label htmlFor="filtrarPorTipo" className="block text-sm font-medium text-white mb-1">
          Filtrar por:
        </label>
        <select
          name="filtrarPorTipo"
          id="filtrarPorTipo"
          defaultValue=""
          onChange={handleTipoChange}
          required
          className="w-full rounded-md py-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-[#343F57] text-white"
        >
          <option value="" disabled>
            Selecione um tipo
          </option>
          {tipos.map((tipo, index) => (
            <option key={index} value={tipo}>
              {tipo}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full sm:w-1/3 flex items-center justify-evenly mb-5 sm:mb-0">
        <div className="flex items-center mt-5">
          <input
            id="valor-recebimento"
            name="filtragem"
            type="radio"
            onChange={() => onOrdenacaoChange?.('valor')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="valor-recebimento" className="ml-2 text-sm text-white">
            Valor
          </label>
        </div>
        <div className="flex items-center mt-5">
          <input
            id="data-recebimento"
            name="filtragem"
            type="radio"
            onChange={() => onOrdenacaoChange?.('data')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="data-recebimento" className="ml-2 text-sm text-white">
            Data
          </label>
        </div>
      </div>
    </fieldset>
  );
}