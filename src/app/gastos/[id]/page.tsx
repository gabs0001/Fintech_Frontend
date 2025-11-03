'use client';

import { useParams } from 'next/navigation';
import PaginaDetalhe from '@/components/shared/PaginaDetalhe';

const transacoesMock = [
  { id: '1', nome: 'Aluguel', categoria: 'moradia', valor: 1200 },
  { id: '2', nome: 'Academia', categoria: 'saúde', valor: 150 },
];

export default function DetalheGastoPage() {
  const { id } = useParams();
  const transacao = transacoesMock.find((t) => t.id === id);

  if (!transacao) {
    return <PaginaDetalhe titulo="Transação não encontrada">ID inválido ou inexistente.</PaginaDetalhe>;
  }

  const gasto = {
    nome: 'Aluguel',
    categoria: 'moradia',
    valor: 1200,
    data: '2025-11-01',
    descricao: 'Pagamento do aluguel mensal',
    hora: '10:00',
  };

  return (
    <PaginaDetalhe titulo="Detalhes do Gasto" voltarPara="/gastos">
      <p className="text-white"><strong>Categoria:</strong> {gasto.categoria}</p>
      <p className="text-white"><strong>Valor:</strong> R$ {gasto.valor}</p>
      <p className="text-white"><strong>Data:</strong> {gasto.data} às {gasto.hora}</p>
      <p className="text-white"><strong>Descrição:</strong> {gasto.descricao}</p>
    </PaginaDetalhe>
  );
}
