export type FiltragemGastoProps = {
  categorias: string[];
  onCategoriaChange: (categoria: string) => void;
  onOrdenacaoChange?: (criterio: 'valor' | 'data') => void;
};

export type CampoPopUp = {
  nome: string;
  label: string;
  tipo: 'text' | 'textarea' | 'number' | 'date';
  valor: string | number;
  readOnly?: boolean;
};

export type JanelaPopUpProps = {
  aberto: boolean;
  onFechar: () => void;
  onSalvar: () => void;
  campos: CampoPopUp[];
  onChange: (campo: string, valor: string | number) => void;
};

export type Gasto = {
  id: number;
  categoria: string;
  descricao: string;
  valor: string;
  data: string;
};

export type GastoData = Omit<Gasto, 'descricao'>;

export type GastoFormData = {
  categoria: string;
  descricao: string;
  valor: number;
  data: string;
};

export type GastoCardProps = {
  gastos: Gasto[];
  onEditar: (gasto: Gasto) => void;
  onExcluir: (id: number) => void;
};

export type TableGastosProps = {
  gastos: Gasto[];
  onEditar: (gasto: Gasto) => void;
  onExcluir: (id: number) => void;
  abrirDrawer: (titulo: string, descricao: string) => void;
};