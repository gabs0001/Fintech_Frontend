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
    >
      <label htmlFor="outros" className="text-sm font-medium">
        Digite a categoria:
      </label>
      <input
        ref={inputRef}
        id="outros"
        type="text"
        className="bg-white text-black px-3 py-2 rounded-md ml-6"
      />
      <button
        type="button"
        onClick={adicionarCategoria}
        className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full mt-4"
      >
        Adicionar nova categoria
      </button>
    </div>
  );
}