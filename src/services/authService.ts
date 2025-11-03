const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

export async function login(email: string, senha: string) {
  const res = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha }),
  });

  if (!res.ok) throw new Error('Login inválido');
  return res.json();
}

export async function register(dados: {
  nome: string;
  dataNascimento: string;
  genero: string;
  email: string;
  senha: string;
}) {
  const res = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  });

  if (!res.ok) throw new Error('Erro ao registrar');
  return res.json();
}