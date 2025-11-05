import { fetcher } from '@/utils/fetcher';

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/objetivos-financeiros`;

export async function listarObjetivosFinanceiros(
  token: string,
  page = 1,
  limit = 10,
  sortBy = 'prazo',
  order = 'asc',
  filtros?: {
    status?: string;
    min?: number;
    max?: number;
  }
) {
  const params = new URLSearchParams({
    page: String(page),
    limit: String(limit),
    sortBy,
    order,
    ...(filtros?.status && { status: filtros.status }),
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

export async function buscarObjetivoFinanceiroPorId(id: number, token: string) {
  return fetcher(`${API_URL}/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function cadastrarObjetivoFinanceiro(dados: any, token: string) {
  return fetcher(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
}

export async function atualizarObjetivoFinanceiro(id: number, dados: any, token: string) {
  return fetcher(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
}

export async function excluirObjetivoFinanceiro(id: number, token: string) {
  return fetcher(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}