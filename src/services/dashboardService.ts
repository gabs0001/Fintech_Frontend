const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/dashboard`;

export async function getDashboard(token: string, inicio: string, fim: string, limite = 5) {
  const res = await fetch(`${API_URL}?limite=${limite}&inicio=${inicio}&fim=${fim}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Erro ao buscar dados do dashboard');
  return res.json();
}

export async function getSaldoPorPeriodo(token: string, inicio: string, fim: string) {
  const res = await fetch(`${API_URL}/saldo-por-periodo?inicio=${inicio}&fim=${fim}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Erro ao buscar saldo por período');
  return res.json();
}

export async function getSaldoGeral(token: string) {
  const res = await fetch(`${API_URL}/saldo-geral`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Erro ao buscar saldo geral');
  return res.json();
}

export async function getTotalInvestido(token: string) {
  const res = await fetch(`${API_URL}/total-investido`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Erro ao buscar total investido');
  return res.json();
}

export async function getUltimoGasto(token: string) {
  const res = await fetch(`${API_URL}/ultimo-gasto`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Erro ao buscar último gasto');
  return res.json();
}

export async function getUltimoRecebimento(token: string) {
  const res = await fetch(`${API_URL}/ultimo-recebimento`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Erro ao buscar último recebimento');
  return res.json();
}