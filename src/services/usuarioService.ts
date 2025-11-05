import { fetcher } from '@/utils/fetcher';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/usuarios`;

export async function buscarUsuario(token: string) {
  return fetcher(`${API_URL}/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function atualizarEmail(novoEmail: string, token: string) {
  return fetcher(`${API_URL}/email`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email: novoEmail }),
  });
}

export async function atualizarSenha(novaSenha: string, token: string) {
  return fetcher(`${API_URL}/senha`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ senha: novaSenha }),
  });
}

export async function excluirConta(token: string) {
  return fetcher(`${API_URL}/me`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}