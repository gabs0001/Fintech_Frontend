import { useState } from 'react';
import { FormularioFinanceiroData } from '@/types/formulario';

export function useFormularioFinanceiro(tipo: string) {
  const [formData, setFormData] = useState<FormularioFinanceiroData>({
    categoria: '',
    descricao: '',
    valor: '',
    data: '',
    hora: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Novo ${tipo} cadastrado:`, formData);
  };

  return { formData, handleChange, handleSubmit };
}