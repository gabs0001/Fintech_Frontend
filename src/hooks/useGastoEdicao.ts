import { useState } from 'react';
import { GastoFormData } from '@/types/gastos';

export function useGastoEdicao() {
  const [popupAberto, setPopupAberto] = useState(false);
  const [formData, setFormData] = useState<GastoFormData>({
    categoria: '',
    descricao: '',
    valor: 0,
    data: '',
  });

  const abrirPopup = (gasto: GastoFormData) => {
    setFormData(gasto);
    setPopupAberto(true);
  };

  const atualizarCampo = (campo: string, valor: string) => {
    setFormData((prev:any) => ({ ...prev, [campo]: valor }));
  };

  return {
    popupAberto,
    formData,
    abrirPopup,
    atualizarCampo,
    fecharPopup: () => setPopupAberto(false),
  };
}