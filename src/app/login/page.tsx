'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { navItems } from '@/data/nav';
import { useAuth } from '@/contexts/AuthContext';
import { login } from '@/services/authService';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const { login: setToken } = useAuth();
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');

    try {
      const { token } = await login(email, senha) as { token: string };
      setToken(token);
      router.push('/dashboard');
    } catch (err) {
      setErro('Email ou senha inválidos');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c5270] text-white font-sans">
      <Header navItems={navItems} />

      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-10">
        <section className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Bem-vindo de volta! Faça login para acessar sua conta.
          </h2>
        </section>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white/10 border border-white/20 rounded-xl p-6 space-y-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="bg-white text-black px-3 py-2 rounded-md"
              placeholder="Digite seu email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="senha" className="text-sm font-medium">Senha</label>
            <input
              id="senha"
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className="bg-white text-black px-3 py-2 rounded-md"
              placeholder="Digite sua senha"
            />
          </div>

          {erro && <p className="text-red-400 text-sm">{erro}</p>}

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 py-2 rounded-full"
            >
              Entrar
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}