import { Investimento } from '@/types/investimento';

export const investimentoData: Investimento[] = [
  {
    id: 1,
    nome: 'Tesouro Selic 2025',
    tipo: 'CDB',
    banco: 'Banco do Brasil',
    corretora: 'Rico',
    valor: 1500.00,
    data: '2025-01-15',
  },
  {
    id: 2,
    nome: 'Ações Petrobras',
    tipo: 'Ações',
    banco: 'Itaú',
    corretora: 'XP',
    valor: 3200.00,
    data: '2025-03-10',
  },
  {
    id: 3,
    nome: 'Poupança Caixa',
    tipo: 'Poupança',
    banco: 'Caixa Econômica',
    corretora: 'N/A',
    valor: 800.00,
    data: '2025-02-05',
  },
  {
    id: 4,
    nome: 'Fundo Imobiliário XPML11',
    tipo: 'Imóveis',
    banco: 'Bradesco',
    corretora: 'Clear',
    valor: 2500.00,
    data: '2025-04-20',
  },
];