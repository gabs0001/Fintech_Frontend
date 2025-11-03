'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { buscarUsuario, atualizarEmail, atualizarSenha, excluirConta } from '@/services/usuarioService';
import Header from '@/components/shared/Header';
import Footer from '@/components/shared/Footer';
import { navItems } from '@/data/nav';
import { useRouter } from 'next/navigation';

export default function PerfilPage() {
  const { token, logout } = useAuth();
  const [usuario, setUsuario] = useState<any>(null);
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    if(token) {
      buscarUsuario(token)
        .then(setUsuario)
        .catch(() => logout())
        .finally(() => setLoading(false));
    } else {
      setLoading(false);
      router.push('/login');
    }
  }, [token]);

  const handleAtualizarEmail = async () => {
    await atualizarEmail(email, token!);
    alert('Email atualizado com sucesso!');
  };

  const handleAtualizarSenha = async () => {
    await atualizarSenha(senha, token!);
    alert('Senha atualizada com sucesso!');
  };

  const handleExcluirConta = async () => {
    if (confirm('Tem certeza que deseja excluir sua conta?')) {
      await excluirConta(token!);
      logout();
      router.push('/cadastro');
    }
  };

  if(!usuario) return null;

  if(loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0c5270] text-white">
        <p>Carregando perfil...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-[#0c5270] text-white font-sans">
      <Header navItems={navItems} />

      <main className="flex-grow w-full max-w-3xl mx-auto px-4 py-10 space-y-8">
        <h2 className="text-2xl font-semibold text-center">Perfil do Usuário</h2>

        <div className="bg-white/10 border border-white/20 rounded-xl p-6 space-y-4">
          <p><strong>Nome:</strong> {usuario.nome}</p>
          <p><strong>Email:</strong> {usuario.email}</p>
          <p><strong>Data de nascimento:</strong> {usuario.dataNascimento}</p>
          <p><strong>Gênero:</strong> {usuario.genero}</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block mb-1">Novo email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white text-black"
            />
            <button onClick={handleAtualizarEmail} className="mt-2 bg-teal-600 px-4 py-2 rounded-full text-white">
              Atualizar Email
            </button>
          </div>

          <div>
            <label className="block mb-1">Nova senha</label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full px-3 py-2 rounded-md bg-white text-black"
            />
            <button onClick={handleAtualizarSenha} className="mt-2 bg-teal-600 px-4 py-2 rounded-full text-white">
              Atualizar Senha
            </button>
          </div>

          <div className="pt-4">
            <button onClick={handleExcluirConta} className="text-red-400 hover:underline">
              Excluir conta
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}