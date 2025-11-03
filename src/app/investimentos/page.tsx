'use client';

import Cta from "@/components/shared/Cta";
import Footer from "@/components/shared/Footer";
import Header from "@/components/shared/Header";
import FiltragemInvestimento from "@/components/investimentos/FiltragemInvestimento";
import BotaoAdicionar from "@/components/shared/BotaoAdicionar";
import { navItems } from "@/data/nav";
import { categoriasInvestimento } from "@/data/categorias";
import { investimentoData } from "@/data/investimentos";
import { useInvestimentoPage } from "@/hooks/useInvestimentoPage";
import TableInvestimentos from "@/components/investimentos/TableInvestimentos";
import Overlay from "@/components/shared/Overlay";
import { CampoPopUp } from "@/types/gastos";
import JanelaPopUp from "@/components/shared/JanelaPopUp";
import InvestimentoCard from "@/components/investimentos/cards/InvestimentoCard";

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
    } = useInvestimentoPage(investimentoData)

    const campos : CampoPopUp[] = [
        { nome: 'nome', label: 'Nome', tipo: 'text', valor: investimentoEditado?.nome ?? '' },
        { nome: 'tipo', label: 'Tipo', tipo: 'text', valor: investimentoEditado?.tipo ?? '' },
        { nome: 'banco', label: 'Banco', tipo: 'text', valor: investimentoEditado?.banco ?? '' },
        { nome: 'corretora', label: 'Corretora', tipo: 'text', valor: investimentoEditado?.corretora ?? '' },
        { nome: 'valor', label: 'Valor', tipo: 'number', valor: investimentoEditado?.valor ?? 0 },
        { nome: 'data', label: 'Data', tipo: 'date', valor: investimentoEditado?.data ?? '', readOnly: true },
    ]

    const investimentosFiltrados = investimentos
    .filter((i) => tipoSelecionado === 'Mostrar Todos' || tipoSelecionado === '' || i.tipo === tipoSelecionado)
    .filter((i) => i.nome.toLowerCase().includes(buscaPorNome.toLowerCase()))
    .sort((a, b) => {
        if (ordenacao === 'banco') return a.banco.localeCompare(b.banco);
        if (ordenacao === 'corretora') return a.corretora.localeCompare(b.corretora);
        if (ordenacao === 'data') return new Date(b.data).getTime() - new Date(a.data).getTime();
        return 0;
    });

    return (
        <div className="min-h-screen flex flex-col">

            <Header
                navItems={ navItems }
            />

            <main className="flex-grow w-full mx-auto my-4">

                <Cta
                    destaque="investimentos"
                />

                <section className="w-full mt-6">

                    <form name="form-investimentos" id="form-investimentos">

                        <FiltragemInvestimento
                            tipos={categoriasInvestimento}
                            onTipoChange={setTipoSelecionado}
                            onOrdenacaoChange={setOrdenacao}
                            onBuscaChange={setBuscaPorNome}
                        />
                        
                        <div className="flex-row justify-center">
                            
                            <div className="w-full sm:w-10/12 md:w-10/12 lg:w-9/12 xl:w-8/12 mx-auto">
                                <TableInvestimentos
                                    investimentos={ investimentosFiltrados }
                                    onEditar={ abrirPopup }
                                    onExcluir={ excluirInvestimento }
                                />
                            </div>

                            <Overlay
                                ativo={ overlayAtivo }
                                onClick={ fecharPopup }
                            />

                            <JanelaPopUp
                                aberto={ popupAberto }
                                onFechar={ fecharPopup }
                                onSalvar={ salvarEdicao }
                                onChange={ (campo, valor) => atualizarCampo(campo, valor) }
                                campos={ campos }
                            />
                            
                            <InvestimentoCard
                                investimentos={ investimentosFiltrados }
                                onEditar={ abrirPopup }
                                onExcluir={ excluirInvestimento }
                            />

                        </div>

                        <BotaoAdicionar 
                            texto="Novo Investimento" 
                            href="/investimentos/novo" 
                        />
                    </form>

                </section>

            </main>

            <Footer />
        </div>
    )
}