'use client';

import { BotaoAcaoProps } from '@/types/components';

const icons = {
  edit: '/img/icons/edit.svg',
  delete: '/img/icons/delete.svg',
  favorite: '/img/icons/favorite.svg'
};

export default function BotaoAcao({ tipo, onClick }: BotaoAcaoProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={tipo === 'edit' ? 'Editar Gasto' : 'Excluir Gasto'}
      className="p-2 rounded min-w-[40px] min-h-[40px] flex items-center justify-center"
    >
      <img src={icons[tipo]} alt={tipo} className="w-5 h-5 shrink-0" />
    </button>
  );
}