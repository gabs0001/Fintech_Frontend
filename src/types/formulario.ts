export type FormularioFinanceiroData = {
  nome?: string;
  categoria?: string;
  banco?: string;
  corretora?: string;
  descricao?: string;
  valor?: string;
  data?: string;
  hora?: string;
  vencimento?: string;
};

export type CampoFinanceiro = {
  label: string;
  name: keyof FormularioFinanceiroData;
  type: 'text' | 'number' | 'date' | 'time' | 'textarea' | 'select';
  placeholder?: string;
  options?: { value: string; label: string; disabled?: boolean }[];
  api?: 'categorias-gasto' | 'tipos-investimentos' | 'instituicoes' | 'tipos-recebimento';
  permitirNovo?: boolean;
};