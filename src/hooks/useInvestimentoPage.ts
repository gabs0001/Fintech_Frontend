'use client';

import { useState } from 'react';
import { Investimento } from '@/types/investimento';

export function useInvestimentoPage(data: Investimento[]) {
  const [investimentos, setInvestimentos] = useState<Investimento[]>(data);
  const [tipoSelecionado, setTipoSelecionado] = useState<string>('');
  const [buscaPorNome, setBuscaPorNome] = useState<string>('');
  const [ordenacao, setOrdenacao] = useState<'banco' | 'corretora' | 'data' | null>(null);

  const [popupAberto, setPopupAberto] = useState(false);
  const [overlayAtivo, setOverlayAtivo] = useState(false);

  const [investimentoEditado, setInvestimentoEditado] = useState<Investimento | null>(null);

  const abrirPopup = (investimento: Investimento) => {
    setInvestimentoEditado(investimento);
    setPopupAberto(true);
  };

  const fecharPopup = () => {
    setPopupAberto(false);
    setOverlayAtivo(false);
    setInvestimentoEditado(null);
  };

  const atualizarCampo = (campo: string, valor: string | number) => {
    setInvestimentoEditado((prev) => prev ? { ...prev, [campo]: valor } : prev);
  };

  const salvarEdicao = () => {
    if (!investimentoEditado) return;
    setInvestimentos((prev) =>
      prev.map((i) => (i.id === investimentoEditado.id ? investimentoEditado : i))
    );
    fecharPopup();
  };

  const excluirInvestimento = (id: number) => {
    setInvestimentos((prev) => prev.filter((i) => i.id !== id));
  };

  return {
    investimentos,
    setInvestimentos,
    tipoSelecionado,
    setTipoSelecionado,
    buscaPorNome,
    setBuscaPorNome,
    ordenacao,
    setOrdenacao,
    popupAberto,
    abrirPopup,
    fecharPopup,
    overlayAtivo,
    investimentoEditado,
    atualizarCampo,
    salvarEdicao,
    excluirInvestimento,
  };
}