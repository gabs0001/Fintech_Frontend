'use client';

import { useLoginForm } from '@/hooks/useLoginForm';
import { LoginField } from '@/types/login';
import { useRouter } from 'next/navigation';

export default function LoginForm() {
  const { formData, handleChange, handleSubmit } = useLoginForm();
  const router = useRouter();

  const fields: LoginField[] = [
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
        </div>
      ))}

      <div className="flex justify-center">
        <button
          type="submit"
          className="bg-[#863b3b] hover:bg-[#642c2c] text-white font-semibold px-10 py-2 rounded-full"
        >
          Login
        </button>
      </div>

      <div className="text-center mt-6">
        <p>
          Ainda não tem conta?{' '}
          <button
            type="button"
            onClick={() => router.push('/cadastro')}
            className="font-bold underline cursor-pointer hover:text-teal-300"
          >
            Cadastre-se!
          </button>
        </p>
        <button
          type="button"
          onClick={() => router.push('/cadastro')}
          className="mt-2 bg-teal-600 hover:bg-teal-700 text-white px-8 py-2 rounded-full"
        >
          Cadastre-se
        </button>
      </div>
    </form>
  );
}