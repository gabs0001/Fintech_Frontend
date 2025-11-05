'use client';

import { useEffect, useState } from 'react';
import { Objetivo } from '@/types/objetivo';
import { useAuth } from '@/contexts/AuthContext';
import {
  listarObjetivosFinanceiros,
  atualizarObjetivoFinanceiro,
  excluirObjetivoFinanceiro,
} from '@/services/objetivoFinanceiroService';

export function useObjetivoPage() {
  const { token } = useAuth();
  const [objetivos, setObjetivos] = useState<Objetivo[]>([]);
  const [buscaPorNome, setBuscaPorNome] = useState('');
  const [ordenacao, setOrdenacao] = useState<'valor' | 'data' | null>(null);
  const [popupAberto, setPopupAberto] = useState(false);
  const [overlayAtivo, setOverlayAtivo] = useState(false);
  const [objetivoEditado, setObjetivoEditado] = useState<Objetivo | null>(null);
  const [drawerAberto, setDrawerAberto] = useState(false);
  const [tituloDrawer, setTituloDrawer] = useState('');
  const [descricaoDrawer, setDescricaoDrawer] = useState('');

  useEffect(() => {
    if (!token) return;

    listarObjetivosFinanceiros(token)
      .then((res) => setObjetivos(res as Objetivo[]))
      .catch((err) => console.error('Erro ao buscar objetivos:', err));
  }, [token]);

  const abrirDrawer = (titulo: string, descricao: string) => {
    setTituloDrawer(titulo);
    setDescricaoDrawer(descricao);
    setDrawerAberto(true);
  };

  const fecharDrawer = () => setDrawerAberto(false);

  const abrirEdicao = (objetivo: Objetivo) => {
    setObjetivoEditado(objetivo);
    setPopupAberto(true);
    setOverlayAtivo(true);
  };

  const salvarEdicao = async () => {
    if (!objetivoEditado || !token) return;

    try {
      const atualizado = await atualizarObjetivoFinanceiro(objetivoEditado.id, objetivoEditado, token);
      setObjetivos((prev) => {
        const objetivo = atualizado as Objetivo;
        return prev.map((o) => (o.id === objetivo.id ? objetivo : o));
      });
      fecharPopup();
    } catch (err) {
      console.error('Erro ao salvar objetivo:', err);
    }
  };

  const excluirObjetivo = async (id: number) => {
    if (!token) return;

    try {
      await excluirObjetivoFinanceiro(id, token);
      setObjetivos((prev) => prev.filter((o) => o.id !== id));
    } catch (err) {
      console.error('Erro ao excluir objetivo:', err);
    }
  };

  const atualizarCampo = (campo: string, valor: string | number) => {
    setObjetivoEditado((prev) => (prev ? { ...prev, [campo]: valor } : prev));
  };

  const fecharPopup = () => {
    setPopupAberto(false);
    setOverlayAtivo(false);
    setObjetivoEditado(null);
  };

  return {
    objetivos,
    buscaPorNome,
    setBuscaPorNome,
    ordenacao,
    setOrdenacao,
    popupAberto,
    overlayAtivo,
    objetivoEditado,
    drawerAberto,
    tituloDrawer,
    descricaoDrawer,
    abrirDrawer,
    abrirEdicao,
    salvarEdicao,
    excluirObjetivo,
    atualizarCampo,
    fecharPopup,
    fecharDrawer,
  };
}