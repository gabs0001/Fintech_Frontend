'use client';

import { useEffect, useState } from "react";
import Cta from "@/components/shared/Cta";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import FiltragemInvestimento from "@/components/investimentos/FiltragemInvestimento";
import BotaoAdicionar from "@/components/shared/BotaoAdicionar";
import { navItems } from "@/data/nav";
import { useInvestimentoPage } from "@/hooks/useInvestimentoPage";
import TableInvestimentos from "@/components/investimentos/TableInvestimentos";
import Overlay from "@/components/shared/Overlay";
import { CampoPopUp } from "@/types/gastos";
import JanelaPopUp from "@/components/shared/JanelaPopUp";
import InvestimentoCard from "@/components/investimentos/cards/InvestimentoCard";
import RotaProtegida from "@/components/shared/RotaProtegida";
import { Categoria } from "@/types/categoria";

export default function InvestimentosPage() {
  const {
    investimentos,
    tipoSelecionado,
    buscaPorNome,
    ordenacao,
    setTipoSelecionado,
    setBuscaPorNome,
    setOrdenacao,
    abrirPopup,
    fecharPopup,
    popupAberto,
    overlayAtivo,
    investimentoEditado,
    salvarEdicao,
    atualizarCampo,
    excluirInvestimento
  } = useInvestimentoPage();

  const [tiposInvestimento, setTiposInvestimento] = useState<Categoria[]>([]);

  useEffect(() => {
    async function fetchTipos() {
      try {
        const res = await fetch("http://localhost:8080/api/tipos-investimentos");
        const data: Categoria[] = await res.json();
        setTiposInvestimento([...data, { id: 0, descricao: "Mostrar Todos" }]);
      } catch (error) {
        console.error("Erro ao buscar tipos de investimento:", error);
        setTiposInvestimento([{ id: 0, descricao: "Mostrar Todos" }]);
      }
    }

    fetchTipos();
  }, []);

  const campos: CampoPopUp[] = [
    { nome: 'nomeAplicacao', label: 'Nome da Aplicação', tipo: 'text', valor: investimentoEditado?.nomeAplicacao ?? '' },
    { nome: 'tipoInvestimento', label: 'Tipo', tipo: 'text', valor: investimentoEditado?.tipoInvestimento ?? '' },
    { nome: 'instituicao', label: 'Instituição', tipo: 'text', valor: investimentoEditado?.instituicao ?? '' },
    { nome: 'valorAplicacao', label: 'Valor', tipo: 'number', valor: investimentoEditado?.valorAplicacao ?? 0 },
    { nome: 'dataRealizacao', label: 'Data de Realização', tipo: 'date', valor: investimentoEditado?.dataRealizacao ?? '', readOnly: true },
    { nome: 'dataVencimento', label: 'Data de Vencimento', tipo: 'date', valor: investimentoEditado?.dataVencimento ?? '', readOnly: true },
  ];

  const hoje = new Date();
  const inicioDoMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
  const fimDoMes = new Date(hoje.getFullYear(), hoje.getMonth() + 1, 0);

  const investimentosFiltrados = investimentos
    .filter((i) =>
      tipoSelecionado === 'Mostrar Todos' ||
      tipoSelecionado === '' ||
      i.tipoInvestimento === tipoSelecionado
    )
    .filter((i) =>
      i.nomeAplicacao?.toLowerCase().includes(buscaPorNome.toLowerCase())
    )
    .filter((i) => {
      const data = new Date(i.dataRealizacao);
      return data >= inicioDoMes && data <= fimDoMes;
    })
    .sort((a, b) => {
      if (ordenacao === 'instituicao') return (a.instituicao || '').localeCompare(b.instituicao || '');
      if (ordenacao === 'data') return new Date(b.dataRealizacao || 0).getTime() - new Date(a.dataRealizacao || 0).getTime();
      return 0;
    });

  return (
    <RotaProtegida>
      <div className="min-h-screen flex flex-col">
        <Header navItems={navItems} />

        <main className="flex-grow w-full mx-auto my-4">
          <Cta destaque="investimentos" />

          <section className="w-full mt-6">
            <form name="form-investimentos" id="form-investimentos">
              <FiltragemInvestimento
                tipos={tiposInvestimento}
                onTipoChange={setTipoSelecionado}
                onOrdenacaoChange={setOrdenacao}
                onBuscaChange={setBuscaPorNome}
              />

              <div className="flex-row justify-center">
                <div className="w-full sm:w-10/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
                  <TableInvestimentos
                    investimentos={investimentosFiltrados}
                    onEditar={abrirPopup}
                    onExcluir={excluirInvestimento}
                  />
                </div>

                <Overlay ativo={overlayAtivo} onClick={fecharPopup} />

                <JanelaPopUp
                  aberto={popupAberto}
                  onFechar={fecharPopup}
                  onSalvar={salvarEdicao}
                  onChange={(campo, valor) => atualizarCampo(campo, valor)}
                  campos={campos}
                />

                <InvestimentoCard
                  investimentos={investimentosFiltrados}
                  onEditar={abrirPopup}
                  onExcluir={excluirInvestimento}
                />
              </div>

              <BotaoAdicionar texto="Novo Investimento" href="/investimentos/novo" />
            </form>
          </section>
        </main>

        <Footer />
      </div>
    </RotaProtegida>
  );
}