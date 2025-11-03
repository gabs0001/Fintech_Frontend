export type FiltragemInvestimentoProps = {
  tipos: string[];
  onTipoChange: (tipo: string) => void;
  onOrdenacaoChange?: (criterio: 'banco' | 'corretora' | 'data') => void;
  onBuscaChange?: (busca: string) => void;
};

export type Investimento = {
  id: number;
  nome: string;
  tipo: string; 
  banco: string;
  corretora: string;
  valor: number;
  data: string;
  vencimento?: string;
};

export type TableInvestimentosProps = {
  investimentos: Investimento[];
  onEditar: (investimento: Investimento) => void;
  onExcluir: (id: number) => void;
};

export type InvestimentoCardProps = {
  investimentos: Investimento[];
  onEditar: (investimento: Investimento) => void;
  onExcluir: (id: number) => void;
};