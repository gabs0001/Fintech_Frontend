'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import PaginaDetalhe from '@/components/shared/PaginaDetalhe';
import { useAuth } from '@/contexts/AuthContext';
import { buscarObjetivoFinanceiroPorId } from '@/services/objetivoFinanceiroService';
import { Objetivo } from '@/types/objetivo';

export default function DetalheObjetivoPage() {
  const { id } = useParams();
  const { token } = useAuth();
  const [objetivo, setObjetivo] = useState<Objetivo | null>(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (!id || !token) return;

    buscarObjetivoFinanceiroPorId(Number(id), token)
      .then(setObjetivo)
      .catch(() => setErro(true));
  }, [id, token]);

  if (erro) {
    return (
      <PaginaDetalhe titulo="Objetivo não encontrado">
        ID inválido ou inexistente.
      </PaginaDetalhe>
    );
  }

  if (!objetivo) {
    return (
      <PaginaDetalhe titulo="Carregando objetivo...">
        Aguarde enquanto buscamos os dados.
      </PaginaDetalhe>
    );
  }

  return (
    <PaginaDetalhe titulo={objetivo.nome} subtitulo="Objetivo financeiro" voltarPara="/objetivos-financeiros">
      <p className="text-white"><strong>ID:</strong> {objetivo.id}</p>
      <p className="text-white"><strong>Descrição:</strong> {objetivo.descricao}</p>
      <p className="text-white"><strong>Meta:</strong> R$ {objetivo.valor}</p>
      <p className="text-white"><strong>Prazo:</strong> {objetivo.data}</p>
    </PaginaDetalhe>
  );
}