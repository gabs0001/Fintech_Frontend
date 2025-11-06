'use client';

import { useEffect, useState } from 'react';
import { Investimento } from '@/types/investimento';
import { useAuth } from '@/contexts/AuthContext';
import {
  listarInvestimentos,
  atualizarInvestimento,
  cadastrarInvestimento,
  excluirInvestimento as excluirInvestimentoAPI
} from '@/services/investimentoService';

export function useInvestimentoPage() {
  const { token } = useAuth();
  const [investimentos, setInvestimentos] = useState<Investimento[]>([]);
  const [tipoSelecionado, setTipoSelecionado] = useState<string>('');
  const [buscaPorNome, setBuscaPorNome] = useState<string>('');
  const [ordenacao, setOrdenacao] = useState<'banco' | 'corretora' | 'data' | 'instituicao' | null>(null);

  const [popupAberto, setPopupAberto] = useState(false);
  const [overlayAtivo, setOverlayAtivo] = useState(false);
  const [investimentoEditado, setInvestimentoEditado] = useState<Investimento | null>(null);

  useEffect(() => {
    if (!token) return;
    listarInvestimentos(token)
      .then((res) => setInvestimentos(res as Investimento[]))
      .catch((err) => console.error('Erro ao buscar investimentos:', err));
  }, [token]);

  const abrirPopup = (investimento: Investimento) => {
    setInvestimentoEditado(investimento);
    setPopupAberto(true);
    setOverlayAtivo(true);
  };

  const fecharPopup = () => {
    setPopupAberto(false);
    setOverlayAtivo(false);
    setInvestimentoEditado(null);
  };

  const atualizarCampo = (campo: string, valor: string | number) => {
    setInvestimentoEditado((prev) => prev ? { ...prev, [campo]: valor } : prev);
  };

  const salvarEdicao = async () => {
    if (!investimentoEditado || !token) return;

    try {
      const investimentoSalvo = investimentoEditado.id
        ? await atualizarInvestimento(investimentoEditado.id, investimentoEditado, token)
        : await cadastrarInvestimento(investimentoEditado, token);

      setInvestimentos((prev) => {
        const investimento = investimentoSalvo as Investimento;
        const outros = prev.filter((i) => i.id !== investimento.id);
        return [...outros, investimento];
      });

      fecharPopup();
    } catch (err) {
      console.error('Erro ao salvar investimento:', err);
    }
  };

  const excluirInvestimento = async (id: number) => {
    if (!token) return;

    try {
      await excluirInvestimentoAPI(id, token);
      setInvestimentos((prev) => prev.filter((i) => i.id !== id));
    } catch (err) {
      console.error('Erro ao excluir investimento:', err);
    }
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