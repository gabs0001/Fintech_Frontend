const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/recebimentos`;

export async function listarRecebimentos(token: string) {
  const res = await fetch(API_URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Erro ao listar recebimentos');
  return res.json();
}

export async function buscarRecebimentoPorId(id: number, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Erro ao buscar recebimento por ID');
  return res.json();
}

export async function cadastrarRecebimento(dados: any, token: string) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
  if (!res.ok) throw new Error('Erro ao cadastrar recebimento');
  return res.json();
}

export async function atualizarRecebimento(id: number, dados: any, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
  if (!res.ok) throw new Error('Erro ao atualizar recebimento');
  return res.json();
}

export async function excluirRecebimento(id: number, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Erro ao excluir recebimento');
  return res;
}