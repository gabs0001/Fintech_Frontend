import { fetcher } from "@/utils/fetcher";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/gastos`;

export async function listarGastos(
  token: string,
  page = 1,
  limit = 10,
  sortBy = 'data',
  order = 'desc',
  filtros?: {
    categoria?: string;
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
    ...(filtros?.categoria && { categoria: filtros.categoria }),
    ...(filtros?.inicio && { inicio: filtros.inicio }),
    ...(filtros?.fim && { fim: filtros.fim }),
    ...(filtros?.min && { min: String(filtros.min) }),
    ...(filtros?.max && { max: String(filtros.max) }),
  });

  return fetcher(`${API_URL}?${params.toString()}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function buscarGastoPorId(id: number, token: string) {
  return fetcher(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function cadastrarGasto(gasto: any, token: string) {
  return fetcher(`${API_URL}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(gasto),
  });
}

export async function atualizarGasto(id: number, gasto: any, token: string) {
  return fetcher(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(gasto),
  });
}

export async function excluirGasto(id: number, token: string) {
  return fetcher(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
}