const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/usuarios`;

export async function buscarUsuario(token: string) {
  const res = await fetch(`${API_URL}/me`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error('Erro ao buscar dados do usuário');
  return res.json();
}

export async function atualizarEmail(novoEmail: string, token: string) {
  const res = await fetch(`${API_URL}/email`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ email: novoEmail }),
  });

  if (!res.ok) throw new Error('Erro ao atualizar email');
  return res.json();
}

export async function atualizarSenha(novaSenha: string, token: string) {
  const res = await fetch(`${API_URL}/senha`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ senha: novaSenha }),
  });

  if (!res.ok) throw new Error('Erro ao atualizar senha');
  return res.json();
}

export async function excluirConta(token: string) {
  const res = await fetch(`${API_URL}/me`, {
    method: 'DELETE',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!res.ok) throw new Error('Erro ao excluir conta');
  return res.json();
}