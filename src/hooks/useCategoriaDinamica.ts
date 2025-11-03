import { useEffect, useRef } from 'react';

type CategoriaConfig = {
  valorAlvo: string;
  classeOpcao: string;
};

export function useCategoriaDinamica({ valorAlvo, classeOpcao }: CategoriaConfig) {
  const selectRef = useRef<HTMLSelectElement>(null);
  const campoRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const select = selectRef.current;
    const campo = campoRef.current;

    if (!select || !campo) return;

    const handleChange = () => {
      campo.style.display = select.value === valorAlvo ? 'block' : 'none';
    };

    select.addEventListener('change', handleChange);
    return () => {
      select.removeEventListener('change', handleChange);
    };
  }, [valorAlvo]);

  const adicionarCategoria = () => {
    const select = selectRef.current;
    const input = inputRef.current;
    const campo = campoRef.current;

    if (!select || !input || !campo) return;

    const novaCategoria = input.value.trim();
    if (!novaCategoria) return;

    const opcao = document.createElement('option');
    opcao.value = novaCategoria.toLowerCase();
    opcao.text = novaCategoria;
    opcao.classList.add(classeOpcao);

    const referencia = select.querySelector(`option[value="${valorAlvo}"]`);
    if (referencia) {
      select.insertBefore(opcao, referencia);
    } else {
      select.appendChild(opcao);
    }

    campo.style.display = 'none';
    input.value = '';
  };

  return {
    selectRef,
    campoRef,
    inputRef,
    adicionarCategoria,
  };
}