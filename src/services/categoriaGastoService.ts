import { fetcher } from "@/utils/fetcher";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/categorias-gastos`;

export async function listarCategoriasGasto(token: string) {
  return fetcher(`${API_URL}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function buscarCategoriaGastoPorId(id: number, token: string) {
  return fetcher(`${API_URL}/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function cadastrarCategoriaGasto(dados: any, token: string) {
  return fetcher(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
}

export async function atualizarCategoriaGasto(id: number, dados: any, token: string) {
  return fetcher(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
}

export async function excluirCategoriaGasto(id: number, token: string) {
  return fetcher(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}