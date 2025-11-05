import { fetcher } from "@/utils/fetcher";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/investimentos`;

export async function listarInvestimentos(
  token: string,
  page = 1,
  limit = 10,
  sortBy = 'data',
  order = 'desc',
  filtros?: {
    tipo?: string;
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
    ...(filtros?.tipo && { tipo: filtros.tipo }),
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

export async function buscarInvestimentoPorId(id: number, token: string) {
  return fetcher(`${API_URL}/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}

export async function cadastrarInvestimento(dados: any, token: string) {
  return fetcher(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
}

export async function atualizarInvestimento(id: number, dados: any, token: string) {
  return fetcher(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
}

export async function excluirInvestimento(id: number, token: string) {
  return fetcher(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
}