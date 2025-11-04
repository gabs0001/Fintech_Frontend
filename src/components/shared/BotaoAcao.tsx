'use client';

import { BotaoAcaoProps } from '@/types/components';

const icons: Record<BotaoAcaoProps['tipo'], string> = {
  edit: '/img/icons/edit.svg',
  delete: '/img/icons/delete.svg',
  favorite: '/img/icons/favorite.svg',
};

const labels: Record<BotaoAcaoProps['tipo'], string> = {
  edit: 'Editar',
  delete: 'Excluir',
  favorite: 'Favoritar',
};

export default function BotaoAcao({ tipo, onClick }: BotaoAcaoProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={labels[tipo]}
      title={labels[tipo]}
      className="p-2 rounded min-w-[40px] min-h-[40px] flex items-center justify-center hover:bg-white/10 transition"
    >
      <img src={icons[tipo]} alt={labels[tipo]} className="w-5 h-5 shrink-0" />
    </button>
  );
}