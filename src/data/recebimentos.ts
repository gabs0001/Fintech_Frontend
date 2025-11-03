import { Recebimento } from '@/types/recebimento';

export const recebimentoData: Recebimento[] = [
  {
    id: 1,
    tipo: 'Salário',
    descricao: 'Salário mensal recebido da empresa TechCorp referente ao mês de outubro.',
    valor: 3200,
    data: '2025-10-30',
  },
  {
    id: 2,
    tipo: 'Aluguel',
    descricao: 'Recebimento de aluguel do imóvel localizado na Rua das Flores, nº 123.',
    valor: 1200,
    data: '2025-10-10',
  },
  {
    id: 3,
    tipo: 'Auxílio Governamental',
    descricao: 'Auxílio emergencial recebido do programa federal de apoio à renda.',
    valor: 600,
    data: '2025-09-25',
  },
  {
    id: 4,
    tipo: '13° Salário',
    descricao: 'Primeira parcela do décimo terceiro salário depositada pela empresa.',
    valor: 1600,
    data: '2025-11-20',
  },
];