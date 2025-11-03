export type CadastroFormData = {
  nome: string;
  dtNascimento: string;
  genero: string;
  email: string;
  senha: string;
  confirmaSenha: string;
};

export type CadastroField = {
  label: string;
  name: keyof CadastroFormData;
  type: 'text' | 'date' | 'email' | 'password' | 'select';
  placeholder?: string;
  options?: { value: string; label: string; disabled?: boolean }[];
};