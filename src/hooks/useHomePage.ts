import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { getDashboard, getTotalInvestido, getUltimoGasto } from '@/services/dashboardService';
import { Recebimento } from '@/types/recebimento';
import { Gasto } from '@/types/gastos';

export function useHomePage() {
  const { token } = useAuth();
  const [recebimentos, setRecebimentos] = useState<Recebimento[]>([]);
  const [gastos, setGastos] = useState<Gasto[]>([]);
  const [saldoMes, setSaldoMes] = useState(0);
  const [totalInvestido, setTotalInvestido] = useState(0);
  const [ultimoGasto, setUltimoGasto] = useState<number>(0);

  const parseValor = (valor: string | number) =>
    typeof valor === 'string'
      ? Number(valor.replace(/[^\d,-]/g, '').replace(',', '.'))
      : valor;

  useEffect(() => {
    if (!token) return;

    const hoje = new Date();
    const inicio = new Date(hoje.getFullYear(), hoje.getMonth(), 1).toISOString().split('T')[0];
    const fim = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0).toISOString().split('T')[0];

    getDashboard(token, inicio, fim, 5)
      .then((data) => {
        const dashboard = data as {
          recebimentos: any[];
          gastos: any[];
          saldoMes: number;
        };

        setRecebimentos(dashboard.recebimentos || []);
        setGastos(dashboard.gastos || []);
        setSaldoMes(dashboard.saldoMes || 0);
      })
      .catch((err) => console.error('Erro ao buscar dashboard:', err));

    getTotalInvestido(token)
      .then((valor) => setTotalInvestido(parseValor(valor as string)))
      .catch((err) => console.error('Erro ao buscar total investido:', err));

    getUltimoGasto(token)
      .then((gasto) => {
        const gastoTipado = gasto as { valor: string };
        setUltimoGasto(parseValor(gastoTipado.valor));
      })
      .catch(() => setUltimoGasto(0));
  }, 
  [token]);

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