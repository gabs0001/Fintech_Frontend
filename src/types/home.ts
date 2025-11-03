export type CardGrupoProps = {
  titulo: string;
  tipo: 'gasto' | 'recebimento';
  itens: { id: number; descricao: string; valor: number; data: string }[];
  onEditar: (item: any, tipo: 'gasto' | 'recebimento') => void;
  onExcluir: (id: number, tipo: 'gasto' | 'recebimento') => void;
  onFavoritar: (id: number, tipo: 'gasto' | 'recebimento') => void;
  onDetalhes: (titulo: string, descricao: string) => void;
};

export type CardResumoProps = {
  saldoMes: number;
  totalInvestido: number;
  ultimoGasto: number;
  onDetalhes: (titulo: string, descricao: string) => void;
};