'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PaginaDetalhe from '@/components/shared/PaginaDetalhe';
import { useAuth } from '@/contexts/AuthContext';
import { buscarRecebimentoPorId } from '@/services/recebimentoService';
import { Recebimento } from '@/types/recebimento';

export default function DetalheRecebimentoPage() {
  const { id } = useParams();
  const { token } = useAuth();
  const [recebimento, setRecebimento] = useState<Recebimento | null>(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (!id || !token) return;

    buscarRecebimentoPorId(Number(id), token).then((res) => setRecebimento(res as Recebimento))
    
  }, [id, token]);

  if (erro) {
    return (
      <PaginaDetalhe titulo="Recebimento não encontrado">
        ID inválido ou inexistente.
      </PaginaDetalhe>
    );
  }

  if (!recebimento) {
    return (
      <PaginaDetalhe titulo="Carregando recebimento...">
        Aguarde enquanto buscamos os dados.
      </PaginaDetalhe>
    );
  }

  return (
    <PaginaDetalhe titulo="Detalhes do Recebimento" voltarPara="/recebimentos">
      <p className="text-white"><strong>ID:</strong> {recebimento.id}</p>
      <p className="text-white"><strong>Categoria:</strong> {recebimento.tipo}</p>
      <p className="text-white"><strong>Valor:</strong> R$ {recebimento.valor}</p>
      <p className="text-white"><strong>Data:</strong> {recebimento.data}</p>
      <p className="text-white"><strong>Descrição:</strong> {recebimento.descricao}</p>
    </PaginaDetalhe>
  );
}