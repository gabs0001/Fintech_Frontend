'use client';

import { OverlayProps } from '@/types/components';

export default function Overlay({ ativo, onClick }: OverlayProps) {
  if(!ativo) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-[9998] transition-opacity duration-300"
      onClick={onClick}
      role="presentation"
      aria-hidden="true"
      aria-label="Camada de fundo"
    />
  );
}