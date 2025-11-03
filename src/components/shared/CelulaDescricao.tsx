'use client';

import { useState } from 'react';

type CelulaDescricaoProps = {
  texto: string;
  titulo?: string;
  abrirDrawer?: (titulo: string, descricao: string) => void;
};

export default function CelulaDescricao({ texto, titulo = 'Detalhes', abrirDrawer }: CelulaDescricaoProps) {
  const [expandido, setExpandido] = useState(false);

  const handleVerMais = () => {
    if (abrirDrawer) {
      abrirDrawer(titulo, texto);
    } else {
      setExpandido(!expandido);
    }
  };

  return (
    <div className="relative">
      <span className="block">
        {expandido ? texto : texto.slice(0, 80) + (texto.length > 80 ? '...' : '')}
      </span>
      {texto.length > 80 && (
        <button
          onClick={ handleVerMais }
          className="text-gray-200 text-sm mt-1 hover:underline cursor-pointer"
        >
          {abrirDrawer ? 'ver mais' : expandido ? 'ver menos' : 'ver mais'}
        </button>
      )}
    </div>
  );
}
