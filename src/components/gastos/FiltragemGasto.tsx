'use client';

import { ChangeEvent } from 'react';
import { FiltragemGastoProps } from '@/types/gastos';

export default function FiltragemGasto({
  categorias,
  onCategoriaChange,
  onOrdenacaoChange,
}: FiltragemGastoProps) {
  const handleCategoriaChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onCategoriaChange(e.target.value);
  };

  return (
    <fieldset className="w-full flex flex-wrap justify-center gap-6 mt-6">
      <legend className="sr-only">Opções de filtro e ordenação</legend>

      <div className="w-full sm:w-1/2 lg:w-1/3 mx-4 sm:ml-6 lg:ml-10">
        <label htmlFor="filtrarPorCategoria" className="block text-sm font-medium text-white mb-1">
          Filtrar por categoria:
        </label>
        <select
          id="filtrarPorCategoria"
          name="filtrarPorCategoria"
          defaultValue=""
          onChange={handleCategoriaChange}
          required
          className="w-full rounded-md py-2 px-3 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-[#343F57] text-white"
        >
          <option value="" disabled>
            Selecione uma categoria
          </option>
          {categorias.map((cat) => (
            <option key={cat.id} value={cat.descricao}>
              {cat.descricao}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full sm:w-1/3 flex items-center justify-evenly">
        <div className="flex items-center mt-5">
          <input
            id="ordenar-valor"
            name="ordenacao"
            type="radio"
            onChange={() => onOrdenacaoChange?.('valor')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="ordenar-valor" className="ml-2 text-sm text-white">
            Valor
          </label>
        </div>
        <div className="flex items-center mt-5">
          <input
            id="ordenar-data"
            name="ordenacao"
            type="radio"
            onChange={() => onOrdenacaoChange?.('data')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="ordenar-data" className="ml-2 text-sm text-white">
            Data
          </label>
        </div>
      </div>
    </fieldset>
  );
}