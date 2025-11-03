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
    categoria: '',
    descricao: '',
    valor: '',
    data: '',
    hora: '',
  });

  useEffect(() => {
    if (modo === 'editar' && gasto) {
      setFormData({
        categoria: gasto.categoria,
        descricao: gasto.descricao,
        valor: gasto.valor,
        data: gasto.data,
        hora: gasto.hora,
      });
    }
  }, [modo, gasto]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!token) return;

    try {
      if (modo === 'editar' && gasto) {
        await atualizarGasto(gasto.id, formData, token);
      } else {
        await cadastrarGasto(formData, token);
      }

      router.push('/gastos');
    } catch (err) {
      console.error(`Erro ao ${modo === 'editar' ? 'atualizar' : 'cadastrar'} ${tipo}:`, err);
    }
  };

  return { formData, handleChange, handleSubmit };
}