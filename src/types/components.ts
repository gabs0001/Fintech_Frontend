export type CtaProps = {
    destaque: string;
}

export type DrawerLateralProps = {
  aberto: boolean;
  onFechar: () => void;
  titulo: string;
  descricao: string;
};

export type OverlayProps = {
  ativo: boolean;
  onClick?: () => void;
};

export type BotaoAdicionarProps = {
  texto: string;
  href: string;
};

export type BotaoAcaoProps = {
  tipo: 'edit' | 'delete' | 'favorite';
  onClick?: () => void;
};