export type FiltragemRecebimentoProps = {
  tipos: { id: number; descricao: string }[];
  onTipoChange?: (tipo: string) => void;
  onOrdenacaoChange?: (criterio: 'valor' | 'data') => void;
};

export type Recebimento = {
  id: number;
  tipoRecebimento: string;
  descricao: string;
  valor: number;
  data: string;
};

export type TableRecebimentosProps = {
  recebimentos: Recebimento[];
  onEditar: (recebimento: Recebimento) => void;
  onExcluir: (id: number) => void;
  abrirDrawer: (titulo: string, descricao: string) => void;
};

export type RecebimentoCardProps = {
  recebimentos: Recebimento[];
  onEditar: (recebimento: Recebimento) => void;
  onExcluir: (id: number) => void;
};