'use client';

import { useParams } from 'next/navigation';
import PaginaDetalhe from '@/components/shared/PaginaDetalhe';

const recebimentosMock = [
  { id: '1', categoria: 'salário', valor: 3000, data: '2025-11-01', hora: '08:00', descricao: 'Salário de novembro' },
  { id: '2', categoria: 'aluguel', valor: 1500, data: '2025-11-05', hora: '09:30', descricao: 'Recebimento de aluguel' },
];

export default function DetalheRecebimentoPage() {
  const { id } = useParams();
  const recebimento = recebimentosMock.find((r) => r.id === id);

  if (!recebimento) {
    return <PaginaDetalhe titulo="Recebimento não encontrado">ID inválido ou inexistente.</PaginaDetalhe>;
  }

  return (
    <PaginaDetalhe titulo="Detalhes do Recebimento" voltarPara="/recebimentos">
      <p className="text-white"><strong>ID:</strong> {id}</p>
      <p className="text-white"><strong>Categoria:</strong> {recebimento.categoria}</p>
      <p className="text-white"><strong>Valor:</strong> R$ {recebimento.valor}</p>
      <p className="text-white"><strong>Data:</strong> {recebimento.data} às {recebimento.hora}</p>
      <p className="text-white"><strong>Descrição:</strong> {recebimento.descricao}</p>
    </PaginaDetalhe>
  );
}