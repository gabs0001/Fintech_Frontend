const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/gastos`;

export async function listarGastos(token: string) {
  const res = await fetch(API_URL, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Erro ao listar gastos');
  return res.json();
}

export async function buscarGastoPorId(id: number, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Erro ao buscar gasto por ID');
  return res.json();
}

export async function cadastrarGasto(gasto: any, token: string) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(gasto),
  });
  if (!res.ok) throw new Error('Erro ao cadastrar gasto');
  return res.json();
}

export async function atualizarGasto(id: number, gasto: any, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(gasto),
  });
  if (!res.ok) throw new Error('Erro ao atualizar gasto');
  return res.json();
}

export async function excluirGasto(id: number, token: string) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error('Erro ao excluir gasto');
  return res;
}