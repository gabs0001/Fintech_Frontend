import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/contexts/AuthContext';
import { FormularioFinanceiroData } from '@/types/formulario';
import { cadastrarGasto, atualizarGasto } from '@/services/gastoService';

type GastoComId = FormularioFinanceiroData & { id: number };

type UseFormularioFinanceiroProps = {
  tipo: 'gasto' | 'recebimento' | 'investimento' | 'objetivo';
  modo?: 'novo' | 'editar';
  gasto?: GastoComId;
};

export function useFormularioFinanceiro({ tipo, modo = 'novo', gasto }: UseFormularioFinanceiroProps) {
  const router = useRouter();
  const { token } = useAuth();

  const [formData, setFormData] = useState<FormularioFinanceiroData>({
    categoriaGasto: undefined,
    tipoRecebimento: '',
    tipoInvestimento: '',
    descricao: '',
    valor: '',
    data: '',
    vencimento: ''
  });

  useEffect(() => {
    if (modo === 'editar' && gasto) {
      setFormData({
        categoriaGasto: gasto.categoriaGasto,
        tipoRecebimento: gasto.tipoRecebimento,
        tipoInvestimento: gasto.tipoInvestimento,
        descricao: gasto.descricao,
        valor: gasto.valor,
        data: gasto.data,
        vencimento: gasto.vencimento
      });
    }
  }, [modo, gasto]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoriaChange = (id: number, nome: string) => {
    setFormData((prev) => ({
      ...prev,
      categoriaGasto: { id, nome }
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    try {
      const dataFormatada = formData.data
        ? new Date(formData.data).toISOString().split('T')[0]
        : '';
      const vencimentoFormatado = formData.vencimento
        ? new Date(formData.vencimento).toISOString().split('T')[0]
        : '';

      let dadosFinal: Record<string, any> = { ...formData };

      switch (tipo) {
        case 'gasto':
          dadosFinal = {
            ...formData,
            dataGasto: dataFormatada,
            categoriaGasto: formData.categoriaGasto
          };
          delete dadosFinal.data;
          break;

        case 'recebimento':
          dadosFinal = {
            ...formData,
            dataRecebimento: dataFormatada,
            tipoRecebimento: formData.tipoRecebimento
          };
          delete dadosFinal.data;
          break;

        case 'investimento':
          dadosFinal = {
            ...formData,
            dataRealizacao: dataFormatada,
            dataVencimento: vencimentoFormatado,
            tipoInvestimento: formData.tipoInvestimento
          };
          delete dadosFinal.data;
          delete dadosFinal.vencimento;
          break;

        case 'objetivo':
          dadosFinal = {
            ...formData,
            dataConclusao: dataFormatada
          };
          delete dadosFinal.data;
          break;
      }

      if (modo === 'editar' && gasto) {
        await atualizarGasto(gasto.id, dadosFinal, token);
      } else {
        await cadastrarGasto(dadosFinal, token);
      }

      router.push(`/${tipo}s`);
    } catch (err) {
      console.error(`Erro ao ${modo === 'editar' ? 'atualizar' : 'cadastrar'} ${tipo}:`, err);
    }
  };

  return { formData, handleChange, handleCategoriaChange, handleSubmit };
}