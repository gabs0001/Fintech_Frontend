export type FiltragemInvestimentoProps = {
  tipos: { id: number; descricao: string }[];
  onTipoChange: (tipo: string) => void;
  onOrdenacaoChange?: (criterio: 'banco' | 'corretora' | 'data' | 'instituicao') => void;
  onBuscaChange?: (busca: string) => void;
};

export type Investimento = {
  id: number;
  nomeAplicacao: string;
  valorAplicacao: number;
  descricao: string;
  dataRealizacao: string;
  dataVencimento?: string;
  tipoInvestimento: string;
  instituicao: string;
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