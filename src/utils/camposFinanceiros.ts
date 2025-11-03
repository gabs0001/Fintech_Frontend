import { CampoFinanceiro } from '@/types/formulario';
import {
  categoriasGasto,
  categoriasInvestimento,
  tiposRecebimento,
} from '@/data/categorias';

export function getCamposPorTipo(tipo: 'gasto' | 'recebimento' | 'investimento' | 'objetivo'): CampoFinanceiro[] {
  if (tipo === 'objetivo') {
    return [
      { label: 'Nome', name: 'nome', type: 'text', placeholder: 'Ex: Comprar um carro' },
      { label: 'Descrição', name: 'descricao', type: 'textarea', placeholder: 'Detalhe seu objetivo...' },
      { label: 'Valor', name: 'valor', type: 'number', placeholder: 'Digite o valor da meta' },
      { label: 'Data', name: 'data', type: 'date' },
    ];
  }

  if (tipo === 'investimento') {
    return [
      { label: 'Nome do investimento', name: 'nome', type: 'text', placeholder: 'Ex: Tesouro IPCA 2026' },
      {
        label: 'Categoria',
        name: 'categoria',
        type: 'select',
        options: [
          { value: '', label: 'Selecione uma categoria', disabled: true },
          ...categoriasInvestimento.map((cat) => ({
            value: cat.toLowerCase(),
            label: cat,
            disabled: cat === 'Mostrar Todos',
          })),
        ],
      },
      { label: 'Banco', name: 'banco', type: 'text', placeholder: 'Ex: Itaú, Bradesco' },
      { label: 'Corretora', name: 'corretora', type: 'text', placeholder: 'Ex: XP, Rico' },
      { label: 'Valor investido', name: 'valor', type: 'number', placeholder: 'Digite o valor' },
      { label: 'Data de aplicação', name: 'data', type: 'date' },
      { label: 'Data de vencimento', name: 'vencimento', type: 'date' },
    ];
  }

  if (tipo === 'recebimento') {
    return [
      {
        label: 'Tipo de recebimento',
        name: 'categoria',
        type: 'select',
        options: [
          { value: '', label: 'Selecione um tipo', disabled: true },
          ...tiposRecebimento.map((cat) => ({
            value: cat.toLowerCase(),
            label: cat,
            disabled: cat === 'Mostrar Todos',
          })),
        ],
      },
      { label: 'Descrição', name: 'descricao', type: 'textarea', placeholder: 'Detalhe o recebimento...' },
      { label: 'Valor', name: 'valor', type: 'number', placeholder: 'Digite o valor' },
      { label: 'Data de recebimento', name: 'data', type: 'date' }
    ];
  }

  return [
    {
      label: 'Categoria',
      name: 'categoria',
      type: 'select',
      options: [
        { value: '', label: 'Selecione uma categoria', disabled: true },
        ...categoriasGasto.map((cat) => ({
          value: cat.toLowerCase(),
          label: cat,
          disabled: cat === 'Mostrar Todos',
        })),
      ],
    },
    { label: 'Descrição', name: 'descricao', type: 'textarea', placeholder: 'Descreva o gasto...' },
    { label: 'Valor', name: 'valor', type: 'number', placeholder: 'Digite o valor' },
    { label: 'Data', name: 'data', type: 'date' },
    { label: 'Hora', name: 'hora', type: 'time' },
  ];
}