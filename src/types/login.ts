export type LoginFormData = {
  email: string;
  senha: string;
};

export type LoginField = {
  label: string;
  name: keyof LoginFormData;
  type: 'email' | 'password';
  placeholder?: string;
};