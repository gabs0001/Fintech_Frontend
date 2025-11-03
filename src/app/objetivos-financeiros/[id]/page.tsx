'use client';

import { useParams } from 'next/navigation';
import PaginaDetalhe from '@/components/shared/PaginaDetalhe';

const objetivosMock = [
  {
    id: '1',
    nome: 'Viagem para Europa',
    descricao: 'Férias de 15 dias em 2026',
    valor: 15000,
    data: '2025-11-01',
  },
  {
    id: '2',
    nome: 'Comprar carro novo',
    descricao: 'Trocar o carro atual por um modelo híbrido',
    valor: 80000,
    data: '2025-12-15',
  },
];

export default function DetalheObjetivoPage() {
  const { id } = useParams();
  const objetivo = objetivosMock.find((o) => o.id === id);

  if (!objetivo) {
    return <PaginaDetalhe titulo="Objetivo não encontrado">ID inválido ou inexistente.</PaginaDetalhe>;
  }

  return (
    <PaginaDetalhe titulo={objetivo.nome} subtitulo="Objetivo financeiro" voltarPara="/objetivos">
      <p className="text-white"><strong>ID:</strong> {id}</p>
      <p className="text-white"><strong>Descrição:</strong> {objetivo.descricao}</p>
      <p className="text-white"><strong>Meta:</strong> R$ {objetivo.valor}</p>
      <p className="text-white"><strong>Prazo:</strong> {objetivo.data}</p>
    </PaginaDetalhe>
  );
}