'use client';

import { useState } from 'react';

type CelulaDescricaoProps = {
  texto: string;
  titulo?: string;
  abrirDrawer?: (titulo: string, descricao: string) => void;
};

export default function CelulaDescricao({
  texto,
  titulo = 'Detalhes',
  abrirDrawer,
}: CelulaDescricaoProps) {
  const [expandido, setExpandido] = useState(false);

  const handleVerMais = () => {
    if (abrirDrawer) {
      abrirDrawer(titulo, texto);
    } else {
      setExpandido((prev) => !prev);
    }
  };

  const textoExibido = expandido ? texto : texto.slice(0, 80) + (texto.length > 80 ? '...' : '');

  return (
    <div className="relative text-sm text-white">
      <span className="block">{textoExibido}</span>

      {texto.length > 80 && (
        <button
          type="button"
          onClick={handleVerMais}
          className="text-teal-300 hover:underline mt-1"
          aria-label={expandido ? 'Ver menos descrição' : 'Ver mais descrição'}
        >
          {abrirDrawer ? 'ver mais' : expandido ? 'ver menos' : 'ver mais'}
        </button>
      )}
    </div>
  );
}