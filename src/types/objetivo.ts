export type FiltragemObjetivoProps = {
  onBuscaChange?: (busca: string) => void;
  onOrdenacaoChange?: (criterio: 'valor' | 'data') => void;
};

export type Objetivo = {
  id: number;
  nome: string;
  descricao: string;
  valor: number;
  dataConclusao: string;
};

export type TableObjetivosProps = {
  objetivos: Objetivo[];
  onEditar: (objetivo: Objetivo) => void;
  onExcluir: (id: number) => void;
  abrirDrawer: (titulo: string, descricao: string) => void;
};

export type ObjetivoCardProps = {
  objetivos: Objetivo[];
  onEditar: (objetivo: Objetivo) => void;
  onExcluir: (id: number) => void;
};