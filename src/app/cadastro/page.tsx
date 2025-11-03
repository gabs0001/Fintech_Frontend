'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { navItems } from '@/data/nav';
import { register } from '@/services/authService';

export default function CadastroPage() {
  const [form, setForm] = useState({
    nome: '',
    dataNascimento: '',
    genero: '',
    email: '',
    senha: '',
  });

  const [erro, setErro] = useState('');
  const [carregando, setCarregando] = useState(false);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErro('');
    setCarregando(true);

    try {
      await register(form);
      router.push('/login');
    } catch (err: any) {
      setErro(err?.message || 'Erro ao cadastrar. Verifique os dados e tente novamente.');
    } finally {
      setCarregando(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0c5270] text-white font-sans">
      <Header navItems={navItems} />

      <main className="flex-grow w-full max-w-4xl mx-auto px-4 py-10">
        <section className="text-center mb-10">
          <h2 className="text-xl sm:text-2xl font-semibold">
            Antes de começarmos, precisamos de algumas informações básicas!
          </h2>
        </section>

        <form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto bg-white/10 border border-white/20 rounded-xl p-6 space-y-4"
        >
          <div className="flex flex-col gap-2">
            <label htmlFor="nome" className="text-sm font-medium">Nome completo</label>
            <input
              id="nome"
              name="nome"
              type="text"
              value={form.nome}
              onChange={handleChange}
              required
              className="bg-white text-black px-3 py-2 rounded-md"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="dataNascimento" className="text-sm font-medium">Data de nascimento</label>
            <input
              id="dataNascimento"
              name="dataNascimento"
              type="date"
              value={form.dataNascimento}
              onChange={handleChange}
              required
              className="bg-white text-black px-3 py-2 rounded-md"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="genero" className="text-sm font-medium">Gênero</label>
            <select
              id="genero"
              name="genero"
              value={form.genero}
              onChange={handleChange}
              required
              className="bg-white text-black px-3 py-2 rounded-md"
            >
              <option value="">Selecione</option>
              <option value="MASCULINO">Masculino</option>
              <option value="FEMININO">Feminino</option>
              <option value="OUTRO">Outro</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              required
              className="bg-white text-black px-3 py-2 rounded-md"
              placeholder="Digite seu email"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="senha" className="text-sm font-medium">Senha</label>
            <input
              id="senha"
              name="senha"
              type="password"
              value={form.senha}
              onChange={handleChange}
              required
              className="bg-white text-black px-3 py-2 rounded-md"
              placeholder="Crie uma senha segura"
            />
          </div>

          {erro && <p className="text-red-400 text-sm">{erro}</p>}

          <div className="flex justify-center pt-2">
            <button
              type="submit"
              disabled={carregando}
              className={`${
                carregando ? 'opacity-50 cursor-not-allowed' : 'hover:bg-teal-700'
              } bg-teal-600 text-white font-semibold px-6 py-2 rounded-full`}
            >
              {carregando ? 'Cadastrando...' : 'Cadastrar'}
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
}