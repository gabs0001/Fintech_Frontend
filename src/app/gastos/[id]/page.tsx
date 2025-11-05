'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { buscarGastoPorId } from '@/services/gastoService';
import PaginaDetalhe from '@/components/shared/PaginaDetalhe';
import FormularioFinanceiro from '@/components/shared/FormularioFinanceiro';
import { Gasto } from '@/types/gastos';

export default function DetalheGastoPage() {
  const { id } = useParams();
  const { token } = useAuth();
  const [gasto, setGasto] = useState<Gasto | null>(null);
  const [erro, setErro] = useState(false);

  useEffect(() => {
    if (!token || !id) return;

    buscarGastoPorId(Number(id), token)
    .then((res) => setGasto(res as Gasto))
    .catch(() => setErro(true));

  }, [id, token]);

  if (erro) {
    return (
      <PaginaDetalhe titulo="Transação não encontrada">
        ID inválido ou inexistente.
      </PaginaDetalhe>
    );
  }

  if (!gasto) {
    return (
      <PaginaDetalhe titulo="Carregando gasto...">
        Aguarde enquanto buscamos os dados.
      </PaginaDetalhe>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0c5270] text-white font-sans">
      <PaginaDetalhe titulo="Editar Gasto" voltarPara="/gastos">
        <FormularioFinanceiro tipo="gasto" modo="editar" gasto={gasto} />
      </PaginaDetalhe>
    </div>
  );
}