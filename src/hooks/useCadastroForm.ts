import { useState } from 'react';
import { CadastroFormData } from '@/types/cadastro';

export function useCadastroForm() {
  const [formData, setFormData] = useState<CadastroFormData>({
    nome: '',
    dtNascimento: '',
    genero: '',
    email: '',
    senha: '',
    confirmaSenha: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Dados enviados:', formData);
  };

  return { formData, handleChange, handleSubmit };
}