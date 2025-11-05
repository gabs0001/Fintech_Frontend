'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PaginaDetalhe from '@/components/shared/PaginaDetalhe';
import { useAuth } from '@/contexts/AuthContext';
import { buscarInvestimentoPorId } from '@/services/investimentoService';
import { Investimento } from '@/types/investimento';

export default function DetalheInvestimentoPage() {
  const { id } = useParams();
  const { token } = useAuth();
  const [investimento, setInvestimento] = useState<Investimento | null>(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (!id || !token) return;

    buscarInvestimentoPorId(Number(id), token)
      .then((res) => setInvestimento(res as Investimento))
      .catch(() => setErro(true));
  }, [id, token]);

  if (erro) {
    return (
      <PaginaDetalhe titulo="Investimento não encontrado">
        ID inválido ou inexistente.
      </PaginaDetalhe>
    );
  }

  if (!investimento) {
    return (
      <PaginaDetalhe titulo="Carregando investimento...">
        Aguarde enquanto buscamos os dados.
      </PaginaDetalhe>
    );
  }

  return (
    <PaginaDetalhe titulo="Detalhes do Investimento" voltarPara="/investimentos">
      <p className="text-white"><strong>ID:</strong> {investimento.id}</p>
      <p className="text-white"><strong>Nome:</strong> {investimento.nome}</p>
      <p className="text-white"><strong>Tipo:</strong> {investimento.tipo}</p>
      <p className="text-white"><strong>Banco:</strong> {investimento.banco}</p>
      <p className="text-white"><strong>Corretora:</strong> {investimento.corretora}</p>
      <p className="text-white"><strong>Valor:</strong> R$ {investimento.valor}</p>
      <p className="text-white"><strong>Aplicação:</strong> {investimento.data}</p>
      <p className="text-white"><strong>Vencimento:</strong> {investimento.vencimento}</p>
    </PaginaDetalhe>
  );
}