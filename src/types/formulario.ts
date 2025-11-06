export type FormularioFinanceiroData = {
  descricao?: string;
  valor?: string;
  data?: string;
  vencimento?: string;

  categoriaGasto?: {
    id: number;
    nome: string;
  };

  tipoRecebimento?: string;
  tipoInvestimento?: string;

  banco?: string;
  corretora?: string;
  instituicao?: string;

  dataGasto?: string;
  dataRecebimento?: string;
  dataRealizacao?: string;
  dataVencimento?: string;
  dataConclusao?: string;
};

export type CampoFinanceiro = {
  label: string;
  name: keyof FormularioFinanceiroData;
  type: 'text' | 'number' | 'date' | 'time' | 'textarea' | 'select';
  placeholder?: string;
  options?: { value: string; label: string; disabled?: boolean }[];
  api?: 'categorias-gasto' | 'tipos-investimento' | 'instituicoes' | 'tipos-recebimento';
  permitirNovo?: boolean;
};