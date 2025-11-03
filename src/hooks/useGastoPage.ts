import { useState } from "react";
import { Gasto } from "@/types/gastos";

export function useGastoPage(initialGastos: Gasto[]) {
  const [gastos, setGastos] = useState(initialGastos);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [ordenacao, setOrdenacao] = useState<'valor' | 'data' | null>(null);
  const [popupAberto, setPopupAberto] = useState(false);
  const [overlayAtivo, setOverlayAtivo] = useState(false);
  const [gastoEditado, setGastoEditado] = useState<Gasto | null>(null);
  const [drawerAberto, setDrawerAberto] = useState(false);
  const [tituloDrawer, setTituloDrawer] = useState('');
  const [descricaoDrawer, setDescricaoDrawer] = useState('');

  const abrirDrawer = (titulo: string, descricao: string) => {
    setTituloDrawer(titulo);
    setDescricaoDrawer(descricao);
    setDrawerAberto(true);
  };

  const fecharDrawer = () => setDrawerAberto(false);

  const abrirEdicao = (gasto: Gasto) => {
    setGastoEditado(gasto);
    setPopupAberto(true);
    setOverlayAtivo(true);
  };

  const salvarEdicao = () => {
    if (!gastoEditado) return;
    setGastos((prev) =>
      prev.map((g) => (g.id === gastoEditado.id ? gastoEditado : g))
    );
    fecharPopup();
  };

  const excluirGasto = (id: number) => {
    setGastos((prev) => prev.filter((g) => g.id !== id));
  };

  const atualizarCampo = (campo: string, valor: string | number) => {
    setGastoEditado((prev) => prev ? { ...prev, [campo]: valor } : prev);
  };

  const fecharPopup = () => {
    setPopupAberto(false);
    setOverlayAtivo(false);
    setGastoEditado(null);
  };

  return {
    gastos,
    categoriaSelecionada,
    setCategoriaSelecionada,
    ordenacao,
    setOrdenacao,
    popupAberto,
    overlayAtivo,
    gastoEditado,
    drawerAberto,
    tituloDrawer,
    descricaoDrawer,
    abrirDrawer,
    abrirEdicao,
    salvarEdicao,
    excluirGasto,
    atualizarCampo,
    fecharPopup,
    fecharDrawer
  };
}