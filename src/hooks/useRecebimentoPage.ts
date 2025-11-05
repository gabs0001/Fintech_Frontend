'use client';

import { useEffect, useState } from 'react';
import { Recebimento } from '@/types/recebimento';
import { useAuth } from '@/contexts/AuthContext';
import {
  listarRecebimentos,
  atualizarRecebimento,
  excluirRecebimento as excluirRecebimentoAPI,
} from '@/services/recebimentoService';

export function useRecebimentoPage() {
  const { token } = useAuth();
  const [recebimentos, setRecebimentos] = useState<Recebimento[]>([]);
  const [tipoSelecionado, setTipoSelecionado] = useState('');
  const [ordenacao, setOrdenacao] = useState<'valor' | 'data' | null>(null);
  const [popupAberto, setPopupAberto] = useState(false);
  const [overlayAtivo, setOverlayAtivo] = useState(false);
  const [recebimentoEditado, setRecebimentoEditado] = useState<Recebimento | null>(null);
  const [drawerAberto, setDrawerAberto] = useState(false);
  const [tituloDrawer, setTituloDrawer] = useState('');
  const [descricaoDrawer, setDescricaoDrawer] = useState('');

  useEffect(() => {
    if (!token) return;
    listarRecebimentos(token)
      .then((res) => setRecebimentos(res as Recebimento[]))
      .catch((err) => console.error('Erro ao buscar recebimentos:', err));
  }, [token]);

  const abrirDrawer = (titulo: string, descricao: string) => {
    setTituloDrawer(titulo);
    setDescricaoDrawer(descricao);
    setDrawerAberto(true);
  };

  const fecharDrawer = () => setDrawerAberto(false);

  const abrirEdicao = (recebimento: Recebimento) => {
    setRecebimentoEditado(recebimento);
    setPopupAberto(true);
    setOverlayAtivo(true);
  };

  const salvarEdicao = async () => {
    if (!recebimentoEditado || !token) return;

    try {
      const atualizado = await atualizarRecebimento(recebimentoEditado.id, recebimentoEditado, token);
      setRecebimentos((prev) => {
        const recebimento = atualizado as Recebimento;
        return prev.map((r) => (r.id === recebimento.id ? recebimento : r));
      });
      fecharPopup();
    } catch (err) {
      console.error('Erro ao salvar edição:', err);
    }
  };

  const excluirRecebimento = async (id: number) => {
    if (!token) return;

    try {
      await excluirRecebimentoAPI(id, token);
      setRecebimentos((prev) => prev.filter((r) => r.id !== id));
    } catch (err) {
      console.error('Erro ao excluir recebimento:', err);
    }
  };

  const atualizarCampo = (campo: string, valor: string | number) => {
    setRecebimentoEditado((prev) => (prev ? { ...prev, [campo]: valor } : prev));
  };

  const fecharPopup = () => {
    setPopupAberto(false);
    setOverlayAtivo(false);
    setRecebimentoEditado(null);
  };

  return {
    recebimentos,
    tipoSelecionado,
    setTipoSelecionado,
    ordenacao,
    setOrdenacao,
    popupAberto,
    overlayAtivo,
    recebimentoEditado,
    drawerAberto,
    tituloDrawer,
    descricaoDrawer,
    abrirDrawer,
    abrirEdicao,
    salvarEdicao,
    excluirRecebimento,
    atualizarCampo,
    fecharPopup,
    fecharDrawer,
  };
}