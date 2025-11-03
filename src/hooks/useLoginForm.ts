import { useState } from 'react';
import { LoginFormData } from '@/types/login';

export function useLoginForm() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    senha: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login enviado:', formData);
  };

  return { formData, handleChange, handleSubmit };
}