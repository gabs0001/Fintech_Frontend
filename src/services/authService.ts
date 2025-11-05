import { fetcher } from "@/utils/fetcher";

const API_URL = `${process.env.NEXT_PUBLIC_API_URL}/auth`;

export async function login(email: string, senha: string) {
  return fetcher(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email, senha }),
  });
}

export async function register(dados: {
  nome: string;
  dataNascimento: string;
  genero: string;
  email: string;
  senha: string;
}) {
  return fetcher(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(dados),
  });
}