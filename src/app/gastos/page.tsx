'use client';

import { useGastoPage } from "@/hooks/useGastoPage";
import { categoriasGasto } from "@/data/categorias";
import { navItems } from "@/data/nav";

import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import Cta from "@/components/shared/Cta";
import FiltragemGasto from "@/components/gastos/FiltragemGasto";
import TableGastos from "@/components/gastos/TableGastos";
import GastoCard from "@/components/gastos/cards/GastoCard";
import DrawerLateral from "@/components/shared/DrawerLateral";
import JanelaPopUp from "@/components/shared/JanelaPopUp";
import Overlay from "@/components/shared/Overlay";
import BotaoAdicionar from "@/components/shared/BotaoAdicionar";
import { CampoPopUp } from "@/types/gastos";

export default function GastoPage() {
  const {
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
  } = useGastoPage();

  const campos: CampoPopUp[] = [
    { nome: 'categoria', label: 'Categoria', tipo: 'text', valor: gastoEditado?.categoria ?? '' },
    { nome: 'descricao', label: 'Descrição', tipo: 'textarea', valor: gastoEditado?.descricao ?? '' },
    { nome: 'valor', label: 'Valor', tipo: 'number', valor: gastoEditado?.valor ?? 0 },
    { nome: 'data', label: 'Data', tipo: 'date', valor: gastoEditado?.data ?? '', readOnly: true },
  ];

  const gastosFiltrados = gastos
    .filter((g) =>
      categoriaSelecionada === 'Mostrar Todos' ||
      categoriaSelecionada === '' ||
      g.categoria === categoriaSelecionada
    )
    .sort((a, b) => {
      if (ordenacao === 'valor') {
        return Number(b.valor.toString().replace(/[^\d,.-]/g, '').replace(',', '.')) -
               Number(a.valor.toString().replace(/[^\d,.-]/g, '').replace(',', '.'));
      }
      if (ordenacao === 'data') {
        return new Date(b.data).getTime() - new Date(a.data).getTime();
      }
      return 0;
   });

  return (
    <div className="min-h-screen flex flex-col">
      <Header navItems={navItems} />

      <main className="flex-grow w-full mx-auto my-4">
        <Cta destaque="gastos" />

        <section className="w-full mt-6">
          <form name="form-gastos" id="form-gastos">
            <FiltragemGasto
              categorias={categoriasGasto}
              onCategoriaChange={setCategoriaSelecionada}
              onOrdenacaoChange={setOrdenacao}
            />

            <div className="flex-row justify-center">
              <div className="w-full sm:w-10/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
                <TableGastos
                  gastos={gastosFiltrados}
                  onEditar={abrirEdicao}
                  onExcluir={excluirGasto}
                  abrirDrawer={abrirDrawer}
                />
              </div>

              <DrawerLateral
                aberto={drawerAberto}
                onFechar={fecharDrawer}
                titulo={tituloDrawer}
                descricao={descricaoDrawer}
              />

              <Overlay ativo={overlayAtivo} onClick={fecharPopup} />

              <JanelaPopUp
                aberto={popupAberto}
                onFechar={fecharPopup}
                onSalvar={salvarEdicao}
                onChange={(campo, valor) => atualizarCampo(campo, valor)}
                campos={campos}
              />

              <GastoCard
                gastos={gastosFiltrados}
                onEditar={abrirEdicao}
                onExcluir={excluirGasto}
              />
            </div>

            <BotaoAdicionar texto="Novo Gasto" href="/gastos/novo" />
          </form>
        </section>
      </main>

      <Footer />
    </div>
  );
}