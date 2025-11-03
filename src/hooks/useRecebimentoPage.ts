import { useState } from 'react';
import { Recebimento } from '@/types/recebimento';

export function useRecebimentoPage(initialRecebimentos: Recebimento[]) {
  const [recebimentos, setRecebimentos] = useState(initialRecebimentos);
  const [tipoSelecionado, setTipoSelecionado] = useState('');
  const [ordenacao, setOrdenacao] = useState<'valor' | 'data' | null>(null);
  const [popupAberto, setPopupAberto] = useState(false);
  const [overlayAtivo, setOverlayAtivo] = useState(false);
  const [recebimentoEditado, setRecebimentoEditado] = useState<Recebimento | null>(null);
  const [drawerAberto, setDrawerAberto] = useState(false);
  const [tituloDrawer, setTituloDrawer] = useState('');
  const [descricaoDrawer, setDescricaoDrawer] = useState('');

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

  const salvarEdicao = () => {
    if (!recebimentoEditado) return;
    setRecebimentos((prev) =>
      prev.map((r) => (r.id === recebimentoEditado.id ? recebimentoEditado : r))
    );
    fecharPopup();
  };

  const excluirRecebimento = (id: number) => {
    setRecebimentos((prev) => prev.filter((r) => r.id !== id));
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