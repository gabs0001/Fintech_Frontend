const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/tipos-investimentos`;

export async function listarTiposInvestimento(token: string) {
  const res = await fetch(API_URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Erro ao listar tipos de investimento');
  return res.json();
}

export async function buscarTipoInvestimentoPorId(id: number, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Erro ao buscar tipo de investimento por ID');
  return res.json();
}

export async function cadastrarTipoInvestimento(dados: any, token: string) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
  if (!res.ok) throw new Error('Erro ao cadastrar tipo de investimento');
  return res.json();
}

export async function atualizarTipoInvestimento(id: number, dados: any, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
  if (!res.ok) throw new Error('Erro ao atualizar tipo de investimento');
  return res.json();
}

export async function excluirTipoInvestimento(id: number, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Erro ao excluir tipo de investimento');
  return res;
}