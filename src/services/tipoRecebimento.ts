const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/tipos-recebimentos`;

export async function listarTiposRecebimento(token: string) {
  const res = await fetch(API_URL, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Erro ao listar tipos de recebimento');
  return res.json();
}

export async function buscarTipoRecebimentoPorId(id: number, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Erro ao buscar tipo de recebimento por ID');
  return res.json();
}

export async function cadastrarTipoRecebimento(dados: any, token: string) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
  if (!res.ok) throw new Error('Erro ao cadastrar tipo de recebimento');
  return res.json();
}

export async function atualizarTipoRecebimento(id: number, dados: any, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(dados),
  });
  if (!res.ok) throw new Error('Erro ao atualizar tipo de recebimento');
  return res.json();
}

export async function excluirTipoRecebimento(id: number, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (!res.ok) throw new Error('Erro ao excluir tipo de recebimento');
  return res;
}