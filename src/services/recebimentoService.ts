import { fetcher } from '@/utils/fetcher';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/recebimentos`;

export async function listarRecebimentos(
  token: string,
  page = 1,
  limit = 10,
  sortBy = 'data',
  order = 'desc',
  filtros?: {
    origem?: string;
    inicio?: string;
    fim?: string;
    min?: number;
    max?: number;
  }
) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    sortBy,
    order,
    ...(filtros?.origem && { origem: filtros.origem }),
    ...(filtros?.inicio && { inicio: filtros.inicio }),
    ...(filtros?.fim && { fim: filtros.fim }),
    ...(filtros?.min && { min: String(filtros.min) }),
    ...(filtros?.max && { max: String(filtros.max) }),
  });

  return fetcher(`${API_URL}?${params.toString()}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function buscarRecebimentoPorId(id: number, token: string) {
  return fetcher(`${API_URL}/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function cadastrarRecebimento(dados: any, token: string) {
  return fetcher(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
}

export async function atualizarRecebimento(id: number, dados: any, token: string) {
  return fetcher(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
}

export async function excluirRecebimento(id: number, token: string) {
  return fetcher(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}