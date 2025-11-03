import { useState } from 'react';
import { Objetivo } from '@/types/objetivo';

export function useObjetivoPage(initialObjetivos: Objetivo[]) {
  const [objetivos, setObjetivos] = useState(initialObjetivos);
  const [buscaPorNome, setBuscaPorNome] = useState('');
  const [ordenacao, setOrdenacao] = useState<'valor' | 'data' | null>(null);
  const [popupAberto, setPopupAberto] = useState(false);
  const [overlayAtivo, setOverlayAtivo] = useState(false);
  const [objetivoEditado, setObjetivoEditado] = useState<Objetivo | null>(null);
  const [drawerAberto, setDrawerAberto] = useState(false);
  const [tituloDrawer, setTituloDrawer] = useState('');
  const [descricaoDrawer, setDescricaoDrawer] = useState('');

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

  const salvarEdicao = () => {
    if (!objetivoEditado) return;
    setObjetivos((prev) =>
      prev.map((o) => (o.id === objetivoEditado.id ? objetivoEditado : o))
    );
    fecharPopup();
  };

  const excluirObjetivo = (id: number) => {
    setObjetivos((prev) => prev.filter((o) => o.id !== id));
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