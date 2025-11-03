'use client';

import { useParams } from 'next/navigation';
import PaginaDetalhe from '@/components/shared/PaginaDetalhe';

const investimentosMock = [
  {
    id: '1',
    nome: 'Tesouro IPCA 2026',
    categoria: 'cdb',
    banco: 'Nubank',
    corretora: 'XP',
    valor: 5000,
    data: '2025-10-01',
    vencimento: '2026-10-01',
  },
  {
    id: '2',
    nome: 'Ações Petrobras',
    categoria: 'ações',
    banco: 'Inter',
    corretora: 'Clear',
    valor: 3000,
    data: '2025-09-15',
    vencimento: '2026-09-15',
  },
];

export default function DetalheInvestimentoPage() {
  const { id } = useParams();
  const investimento = investimentosMock.find((i) => i.id === id);

  if (!investimento) {
    return <PaginaDetalhe titulo="Investimento não encontrado">ID inválido ou inexistente.</PaginaDetalhe>;
  }

  return (
    <PaginaDetalhe titulo="Detalhes do Investimento" voltarPara="/investimentos">
      <p className="text-white"><strong>ID:</strong> {id}</p>
      <p className="text-white"><strong>Nome:</strong> {investimento.nome}</p>
      <p className="text-white"><strong>Categoria:</strong> {investimento.categoria}</p>
      <p className="text-white"><strong>Banco:</strong> {investimento.banco}</p>
      <p className="text-white"><strong>Corretora:</strong> {investimento.corretora}</p>
      <p className="text-white"><strong>Valor:</strong> R$ {investimento.valor}</p>
      <p className="text-white"><strong>Aplicação:</strong> {investimento.data}</p>
      <p className="text-white"><strong>Vencimento:</strong> {investimento.vencimento}</p>
    </PaginaDetalhe>
  );
}