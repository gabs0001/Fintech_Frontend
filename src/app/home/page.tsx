'use client';

import Footer from '@/components/shared/Footer';
import Header from '@/components/shared/Header';
import { navItems } from '@/data/nav';
import { recebimentoData } from '@/data/recebimentos';
import { gastos as gastoData } from '@/data/gastos';
import { useHomePage } from '@/hooks/useHomePage';
import CardGrupo from '@/components/home/cards/CardGrupo';
import CardResumo from '@/components/home/cards/CardResumo';

export default function HomePage() {
  const {
    recebimentos,
    gastos,
    saldoMes,
    totalInvestido,
    ultimoGasto,
    abrirDrawer,
    editarItem,
    excluirItem,
    favoritarItem,
  } = useHomePage(recebimentoData, gastoData);

  return (
    <div className="min-h-screen flex flex-col">
      <Header navItems={navItems} />

      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-6">
        
        <section className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-semibold text-white">Bem-vindo, Gabriel!</h2>
          <h2 className="text-xl sm:text-2xl font-semibold text-white mt-2">
            Saldo Atual: <span className="bg-teal-700 text-white px-3 py-1 rounded-md">R$ ******</span>
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
              itens={ gastos.map((g) => ({
                id: g.id,
                descricao: g.descricao,
                valor: Number(g.valor.replace(/[^\d,-]/g, '').replace(',', '.')),
                data: g.data,
              })) }
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