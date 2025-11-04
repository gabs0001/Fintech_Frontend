'use client';

import { RefObject } from 'react';

type CampoNovaCategoriaProps = {
  campoRef: RefObject<HTMLDivElement | null>;
  inputRef: RefObject<HTMLInputElement | null>;
  adicionarCategoria: () => void;
};

export default function CampoNovaCategoria({
  campoRef,
  inputRef,
  adicionarCategoria,
}: CampoNovaCategoriaProps) {
  return (
    <div
      ref={campoRef}
      id="novaCategoriaDiv"
      className="hidden flex flex-col items-center mt-4"
      aria-hidden="true"
    >
      <label htmlFor="novaCategoriaInput" className="text-sm font-medium text-white">
        Digite a nova categoria:
      </label>

      <input
        ref={inputRef}
        id="novaCategoriaInput"
        type="text"
        placeholder="Ex: Bônus, Freelance..."
        className="bg-white text-black px-3 py-2 rounded-md mt-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-teal-500"
        aria-label="Campo para nova categoria"
      />

      <button
        type="button"
        onClick={adicionarCategoria}
        className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full mt-4 transition-transform hover:scale-105"
      >
        Adicionar nova categoria
      </button>
    </div>
  );
}