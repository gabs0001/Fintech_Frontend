'use client';

import Link from 'next/link';
import { BotaoAdicionarProps } from '@/types/components';

export default function BotaoAdicionar({ texto, href }: BotaoAdicionarProps) {
  return (
    <div className="w-full flex justify-center my-6">
      <Link
        href={href}
        className="bg-[#872341] hover:bg-[#501426] text-white px-6 py-3 rounded-full text-center font-medium transition-colors"
      >
        {texto}
      </Link>
    </div>
  );
}