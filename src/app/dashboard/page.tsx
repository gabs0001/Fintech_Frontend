'use client';

import { useEffect, useState } from 'react';
import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { navItems } from '@/data/nav';
import CardGrupo from '@/components/home/cards/CardGrupo';
import CardResumo from '@/components/home/cards/CardResumo';
import { useAuth } from '@/contexts/AuthContext';
import {
  getDashboard,
  getTotalInvestido,
  getUltimoGasto,
} from '@/services/dashboardService';
import { Recebimento } from '@/types/recebimento';
import { Gasto } from '@/types/gastos';

export default function HomePage() {
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

  return (
    <div className="min-h-screen flex flex-col">
      <Header navItems={navItems} />

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-6">
        <section className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">Bem-vindo, Gabriel!</h2>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mt-2">
            Saldo Atual: <span className="bg-teal-700 text-white px-3 py-1 rounded-md">
              R$ {saldoMes.toFixed(2).replace('.', ',')}
            </span>
          </h2>
        </section>

        <form name="form-dashboard" id="form-dashboard">
          <div className="flex flex-col sm:items-center xl:flex-row xl:items-start xl:justify-center gap-8">
            <CardGrupo
              titulo="Recebimentos"
              itens={recebimentos}
              tipo="recebimento"
              onEditar={editarItem}
              onExcluir={excluirItem}
              onFavoritar={favoritarItem}
              onDetalhes={abrirDrawer}
            />
            <CardGrupo
              titulo="Gastos"
              itens={gastos.map((g) => ({
                id: g.id,
                descricao: g.descricao,
                valor: parseValor(g.valor),
                data: g.data,
              }))}
              tipo="gasto"
              onEditar={editarItem}
              onExcluir={excluirItem}
              onFavoritar={favoritarItem}
              onDetalhes={abrirDrawer}
            />
            <CardResumo
              saldoMes={saldoMes}
              totalInvestido={totalInvestido}
              ultimoGasto={ultimoGasto}
              onDetalhes={abrirDrawer}
            />
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}