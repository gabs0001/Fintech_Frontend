const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/investimentos`;

export async function listarInvestimentos(token: string) {
  const res = await fetch(API_URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Erro ao listar investimentos');
  return res.json();
}

export async function buscarInvestimentoPorId(id: number, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Erro ao buscar investimento por ID');
  return res.json();
}

export async function cadastrarInvestimento(dados: any, token: string) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
  if (!res.ok) throw new Error('Erro ao cadastrar investimento');
  return res.json();
}

export async function atualizarInvestimento(id: number, dados: any, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
  if (!res.ok) throw new Error('Erro ao atualizar investimento');
  return res.json();
}

export async function excluirInvestimento(id: number, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Erro ao excluir investimento');
  return res;
}