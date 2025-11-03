'use client';

import { OverlayProps } from "@/types/components";

export default function Overlay({ ativo, onClick }: OverlayProps) {
  if (!ativo) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-60 z-[9998]"
      onClick={onClick ?? undefined}
      role="presentation"
      aria-hidden="true"
    />
  );
}