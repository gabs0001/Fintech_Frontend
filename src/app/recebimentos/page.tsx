'use client';

import Cta from "@/components/shared/Cta";
import Header from "@/components/shared/Header";
import FiltragemRecebimento from "@/components/recebimentos/FiltragemRecebimento";
import BotaoAdicionar from "@/components/shared/BotaoAdicionar";
import { navItems } from "@/data/nav";
import { CampoPopUp } from "@/types/gastos";
import { useRecebimentoPage } from "@/hooks/useRecebimentoPage";
import { tiposRecebimento } from "@/data/categorias";
import DrawerLateral from "@/components/shared/DrawerLateral";
import Overlay from "@/components/shared/Overlay";
import JanelaPopUp from "@/components/shared/JanelaPopUp";
import TableRecebimentos from "@/components/recebimentos/TableRecebimentos";
import RecebimentoCard from "@/components/recebimentos/cards/RecebimentoCard";
import RotaProtegida from "@/components/shared/RotaProtegida";
import Footer from "@/components/shared/Footer";

export default function RecebimentosPage() {
  const {
    recebimentos,
    tipoSelecionado,
    setTipoSelecionado,
    ordenacao,
    setOrdenacao,
    popupAberto,
    overlayAtivo,
    recebimentoEditado,
    abrirEdicao,
    salvarEdicao,
    excluirRecebimento,
    atualizarCampo,
    fecharPopup,
    drawerAberto,
    abrirDrawer,
    fecharDrawer,
    tituloDrawer,
    descricaoDrawer,
  } = useRecebimentoPage();

  const campos: CampoPopUp[] = [
    { nome: 'tipo', label: 'Tipo', tipo: 'text', valor: recebimentoEditado?.tipo ?? '' },
    { nome: 'descricao', label: 'Descrição', tipo: 'textarea', valor: recebimentoEditado?.descricao ?? '' },
    { nome: 'valor', label: 'Valor', tipo: 'number', valor: recebimentoEditado?.valor ?? 0 },
    { nome: 'data', label: 'Data', tipo: 'date', valor: recebimentoEditado?.data ?? '', readOnly: true },
  ];

  const recebimentosFiltrados = recebimentos
    .filter((r) => tipoSelecionado === 'Mostrar Todos' || tipoSelecionado === '' || r.tipo === tipoSelecionado)
    .sort((a, b) => {
      if (ordenacao === 'valor') return b.valor - a.valor;
      if (ordenacao === 'data') return new Date(b.data).getTime() - new Date(a.data).getTime();
      return 0;
    });

  return (
    <RotaProtegida>
      <div className="min-h-screen flex flex-col">
        <Header navItems={navItems} />

        <main className="flex-grow w-full mx-auto my-4">
          <Cta destaque="recebimentos" />

          <section className="w-full mt-6">
            <form name="form-recebimentos" id="form-recebimentos">
              <FiltragemRecebimento
                tipos={tiposRecebimento}
                onTipoChange={setTipoSelecionado}
                onOrdenacaoChange={setOrdenacao}
              />

              <div className="flex-row justify-center">
                <div className="w-full sm:w-10/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
                  <TableRecebimentos
                    recebimentos={recebimentosFiltrados}
                    onEditar={abrirEdicao}
                    onExcluir={excluirRecebimento}
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

                <RecebimentoCard
                  recebimentos={recebimentosFiltrados}
                  onEditar={abrirEdicao}
                  onExcluir={excluirRecebimento}
                />
              </div>

              <BotaoAdicionar texto="Novo Recebimento" href="/recebimentos/novo" />
            </form>
          </section>
        </main>

        <Footer />
      </div>
    </RotaProtegida>
  );
}