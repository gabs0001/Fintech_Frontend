import { Gasto, GastoData } from '@/types/gastos';

export const gastos: Gasto[] = [
  {
    id: 1,
    categoria: 'Aluguel',
    descricao:
      'Aluguel mensal referente ao apartamento localizado na Av. Paulista, nº 1000. Valor de R$ 1.500,00 com vencimento dia 05.',
    valor: 'R$ 1500,00',
    data: '2024-04-20',
  },
  {
    id: 2,
    categoria: 'Transporte',
    descricao:
      'Transporte para o trabalho via fretado empresarial da Zona Sul para o Centro. Valor mensal de R$ 320,00 com embarque às 07h.',
    valor: 'R$ 320,00',
    data: '2024-03-02',
  },
  {
    id: 3,
    categoria: 'Academia',
    descricao:
      'Mensalidade de academia Fitness Life, plano completo com acesso à musculação, aulas coletivas e piscina aquecida. Valor de R$ 230,00 mensais.',
    valor: 'R$ 230,00',
    data: '2024-02-15',
  },
];

export const gastosData: GastoData[] = [
  { id: 1, categoria: 'Aluguel', valor: 'R$ 1500,00', data: '20/04/2024' },
  { id: 2, categoria: 'Transporte', valor: 'R$ 320,00', data: '02/03/2024' },
  { id: 3, categoria: 'Academia', valor: 'R$ 230,00', data: '15/02/2024' },
];