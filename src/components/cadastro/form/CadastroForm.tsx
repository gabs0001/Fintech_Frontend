'use client';

import { useCadastroForm } from '@/hooks/useCadastroForm';
import { CadastroField } from '@/types/cadastro';
import { useRouter } from 'next/navigation';

export default function CadastroForm() {
  const { formData, handleChange, handleSubmit } = useCadastroForm();
  const router = useRouter();

  const fields: CadastroField[] = [
    { label: 'Nome', name: 'nome', type: 'text', placeholder: 'Digite seu nome completo' },
    { label: 'Data de Nascimento', name: 'dtNascimento', type: 'date' },
    {
      label: 'Gênero',
      name: 'genero',
      type: 'select',
      options: [
        { value: '', label: 'Selecione uma opção', disabled: true },
        { value: 'MASCULINO', label: 'Masculino' },
        { value: 'FEMININO', label: 'Feminino' },
        { value: 'OUTRO', label: 'Outro' },
      ],
    },
    { label: 'Email', name: 'email', type: 'email', placeholder: 'email123@email.com' },
    { label: 'Senha', name: 'senha', type: 'password', placeholder: 'Digite sua senha...' },
  ];

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full sm:max-w-md bg-white/10 border border-white/20 rounded-xl p-6 space-y-6"
    >
      {fields.map((field) => (
        <div key={field.name} className="flex flex-col gap-2">
          <label htmlFor={field.name} className="text-sm font-medium">
            {field.label}
          </label>
          {field.type === 'select' ? (
            <select
              id={field.name}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              required
              className="bg-white text-black px-3 py-2 rounded-md"
            >
              {field.options?.map((opt) => (
                <option key={opt.value} value={opt.value} disabled={opt.disabled}>
                  {opt.label}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={field.name}
              name={field.name}
              type={field.type}
              value={formData[field.name]}
              onChange={handleChange}
              placeholder={field.placeholder}
              required
              className="bg-white text-black px-3 py-2 rounded-md"
            />
          )}
        </div>
      ))}

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-full"
        >
          Cadastre-se
        </button>
      </div>

      <div className="text-center mt-6">
        <p>
          Já possui conta?{' '}
          <button
            type="button"
            onClick={() => router.push('/login')}
            className="font-bold underline cursor-pointer hover:text-teal-300"
          >
            Faça login!
          </button>
        </p>
      </div>
    </form>
  );
}