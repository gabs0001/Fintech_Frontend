const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/objetivos-financeiros`;

export async function listarObjetivosFinanceiros(token: string) {
  const res = await fetch(API_URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Erro ao listar objetivos financeiros');
  return res.json();
}

export async function buscarObjetivoFinanceiroPorId(id: number, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Erro ao buscar objetivo financeiro por ID');
  return res.json();
}

export async function cadastrarObjetivoFinanceiro(dados: any, token: string) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
  if (!res.ok) throw new Error('Erro ao cadastrar objetivo financeiro');
  return res.json();
}

export async function atualizarObjetivoFinanceiro(id: number, dados: any, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
  if (!res.ok) throw new Error('Erro ao atualizar objetivo financeiro');
  return res.json();
}

export async function excluirObjetivoFinanceiro(id: number, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Erro ao excluir objetivo financeiro');
  return res;
}