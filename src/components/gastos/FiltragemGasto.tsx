'use client';

import { ChangeEvent } from "react";
import { FiltragemGastoProps } from "@/types/gastos";

export default function FiltragemGasto({ categorias, onCategoriaChange, onOrdenacaoChange}: FiltragemGastoProps) {
  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onCategoriaChange(e.target.value);
  };

  return (
    <fieldset className="w-full flex flex-wrap justify-center gap-6 mt-6">
      <legend className="sr-only">Opções de filtro e ordenação</legend>

      <div className="w-full sm:w-1/2 sm:mx-0 sm:ml-6 lg:w-1/3 mx-4 lg:mx-0 lg:ml-10">
        <label htmlFor="filtrarPorNome" className="block text-sm font-medium text-white mb-1">
          Filtrar por:
        </label>
        <select
          name="filtrarPorNome"
          id="filtrarPorNome"
          defaultValue=""
          onChange={ handleChange }
          required
          className="w-full rounded-md py-1 border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 bg-[#343F57] text-white"
        >
          <option value="" disabled>
            Selecione uma categoria
          </option>
          {categorias.map((cat, index) => (
            <option key={index} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      <div className="w-full sm:w-1/3 flex items-center justify-evenly">
        <div className="flex items-center mb-4 sm:mb-0 sm:mt-5">
          <input
            id="valor-gasto"
            name="filtragem"
            type="radio"
            onChange={() => onOrdenacaoChange?.('valor')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="valor-gasto" className="ml-2 text-sm text-white">
            Valor
          </label>
        </div>
        <div className="flex items-center mb-4 sm:mb-0 sm:mt-5">
          <input
            id="data-gasto"
            name="filtragem"
            type="radio"
            onChange={() => onOrdenacaoChange?.('data')}
            className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
          />
          <label htmlFor="data-gasto" className="ml-2 text-sm text-white">
            Data
          </label>
        </div>
      </div>
    </fieldset>
  );
}