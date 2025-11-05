import { useEffect, useState } from "react";
import { Gasto } from "@/types/gastos";
import { useAuth } from "@/contexts/AuthContext";
import {
  listarGastos,
  cadastrarGasto,
  atualizarGasto,
  excluirGasto as excluirGastoAPI
} from "@/services/gastoService";

export function useGastoPage() {
  const { token } = useAuth();
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('');
  const [ordenacao, setOrdenacao] = useState<'valor' | 'data' | null>(null);
  const [popupAberto, setPopupAberto] = useState(false);
  const [overlayAtivo, setOverlayAtivo] = useState(false);
  const [gastoEditado, setGastoEditado] = useState<Gasto | null>(null);
  const [drawerAberto, setDrawerAberto] = useState(false);
  const [tituloDrawer, setTituloDrawer] = useState('');
  const [descricaoDrawer, setDescricaoDrawer] = useState('');

  useEffect(() => {
    if (!token) return;
    listarGastos(token)
      .then((res) => setGastos(res as Gasto[]))
      .catch((err) => console.error("Erro ao listar gastos:", err));
  }, [token]);

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

  const salvarEdicao = async () => {
    if (!gastoEditado || !token) return;

    try {
      const gastoSalvo = gastoEditado.id
        ? await atualizarGasto(gastoEditado.id, gastoEditado, token)
        : await cadastrarGasto(gastoEditado, token);

      setGastos((prev) => {
        const outros = prev.filter((g) => g.id !== (gastoSalvo as Gasto).id);
        return [...outros, gastoSalvo as Gasto];
      });

      fecharPopup();
    } catch (err) {
      console.error("Erro ao salvar gasto:", err);
    }
  };

  const excluirGasto = async (id: number) => {
    if (!token) return;

    try {
      await excluirGastoAPI(id, token);
      setGastos((prev) => prev.filter((g) => g.id !== id));
    } catch (err) {
      console.error("Erro ao excluir gasto:", err);
    }
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