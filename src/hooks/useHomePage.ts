import { useState } from 'react';
import { Recebimento } from '@/types/recebimento';
import { Gasto } from '@/types/gastos';

export function useHomePage(initialRecebimentos: Recebimento[], initialGastos: Gasto[]) {
  const [recebimentos, setRecebimentos] = useState(initialRecebimentos);
  const [gastos, setGastos] = useState(initialGastos);

  const parseValor = (valor: string | number) =>
  typeof valor === 'string'
    ? Number(valor.replace(/[^\d,-]/g, '').replace(',', '.'))
    : valor;

  const saldoMes =
  recebimentos.reduce((acc, r) => acc + parseValor(r.valor), 0) -
  gastos.reduce((acc, g) => acc + parseValor(g.valor), 0);

  const totalInvestido = 0;

  const ultimoGasto = gastos.length
  ? parseValor(
      [...gastos]
        .sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())[0].valor
    )
  : 0;

  const abrirDrawer = (titulo: string, descricao: string) => {
    console.log('Abrir drawer:', titulo, descricao);
  };

  const editarItem = (item: Gasto | Recebimento, tipo: 'gasto' | 'recebimento') => {
    console.log('Editar', tipo, item);
  };

  const excluirItem = (id: number, tipo: 'gasto' | 'recebimento') => {
    if (tipo === 'gasto') {
      setGastos((prev) => prev.filter((g) => g.id !== id));
    } else {
      setRecebimentos((prev) => prev.filter((r) => r.id !== id));
    }
  };

  const favoritarItem = (id: number, tipo: 'gasto' | 'recebimento') => {
    console.log('Favoritar', tipo, id);
  };

  return {
    recebimentos,
    gastos,
    saldoMes,
    totalInvestido,
    ultimoGasto,
    abrirDrawer,
    editarItem,
    excluirItem,
    favoritarItem,
  };
}