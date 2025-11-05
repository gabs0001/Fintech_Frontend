import { fetcher } from "@/utils/fetcher";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/dashboard`;

export async function getDashboard(token: string, inicio: string, fim: string, limite = 5) {
  return fetcher(`${API_URL}?limite=${limite}&inicio=${inicio}&fim=${fim}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function getSaldoPorPeriodo(token: string, inicio: string, fim: string) {
  return fetcher(`${API_URL}/saldo-por-periodo?inicio=${inicio}&fim=${fim}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function getSaldoGeral(token: string) {
  return fetcher(`${API_URL}/saldo-geral`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function getTotalInvestido(token: string) {
  return fetcher(`${API_URL}/total-investido`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function getUltimoGasto(token: string) {
  return fetcher(`${API_URL}/ultimo-gasto`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export async function getUltimoRecebimento(token: string) {
  return fetcher(`${API_URL}/ultimo-recebimento`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}