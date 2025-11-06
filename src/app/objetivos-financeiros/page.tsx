'use client';

import Cta from "@/components/shared/Cta";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import FiltragemObjetivo from "@/components/objetivos-financeiros/FiltragemObjetivo";
import BotaoAdicionar from "@/components/shared/BotaoAdicionar";
import { navItems } from "@/data/nav";
import { useObjetivoPage } from "@/hooks/useObjetivoPage";
import DrawerLateral from "@/components/shared/DrawerLateral";
import Overlay from "@/components/shared/Overlay";
import JanelaPopUp from "@/components/shared/JanelaPopUp";
import { CampoPopUp } from "@/types/gastos";
import TableObjetivos from "@/components/objetivos-financeiros/TableObjetivos";
import ObjetivoCard from "@/components/objetivos-financeiros/cards/ObjetivoCard";
import RotaProtegida from "@/components/shared/RotaProtegida";

export default function ObjetivosFinanceirosPage() {
  const {
    objetivos,
    buscaPorNome,
    setBuscaPorNome,
    ordenacao,
    setOrdenacao,
    popupAberto,
    overlayAtivo,
    objetivoEditado,
    abrirEdicao,
    salvarEdicao,
    excluirObjetivo,
    atualizarCampo,
    fecharPopup,
    drawerAberto,
    abrirDrawer,
    fecharDrawer,
    tituloDrawer,
    descricaoDrawer,
  } = useObjetivoPage();

  const campos: CampoPopUp[] = [
    { nome: 'nome', label: 'Nome', tipo: 'text', valor: objetivoEditado?.nome ?? '' },
    { nome: 'descricao', label: 'Descrição', tipo: 'textarea', valor: objetivoEditado?.descricao ?? '' },
    { nome: 'valor', label: 'Valor', tipo: 'number', valor: objetivoEditado?.valor ?? 0 },
    { nome: 'data', label: 'Data', tipo: 'date', valor: objetivoEditado?.dataConclusao ?? '', readOnly: true },
  ];

  const objetivosFiltrados = objetivos
    .filter((o) => o.nome.toLowerCase().includes(buscaPorNome.toLowerCase()))
    .sort((a, b) => {
      if (ordenacao === 'valor') return b.valor - a.valor;
      if (ordenacao === 'data') return new Date(b.dataConclusao).getTime() - new Date(a.dataConclusao).getTime();
      return 0;
    });

  return (
    <RotaProtegida>
      <div className="min-h-screen flex flex-col">
        <Header navItems={navItems} />

        <main className="flex-grow w-full mx-auto my-4">
          <Cta destaque="objetivos financeiros" />

          <section className="w-full mt-6">
            <form name="form-objetivos" id="form-objetivos">
              <FiltragemObjetivo
                onBuscaChange={setBuscaPorNome}
                onOrdenacaoChange={setOrdenacao}
              />

              <div className="flex-row justify-center">
                <div className="w-full sm:w-10/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
                  <TableObjetivos
                    objetivos={objetivosFiltrados}
                    onEditar={abrirEdicao}
                    onExcluir={excluirObjetivo}
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

                <ObjetivoCard
                  objetivos={objetivosFiltrados}
                  onEditar={abrirEdicao}
                  onExcluir={excluirObjetivo}
                />
              </div>

              <BotaoAdicionar texto="Novo Objetivo" href="/objetivos-financeiros/novo" />
            </form>
          </section>
        </main>

        <Footer />
      </div>
    </RotaProtegida>
  );
}