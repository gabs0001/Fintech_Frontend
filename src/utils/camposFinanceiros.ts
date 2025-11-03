import { CampoFinanceiro } from '@/types/formulario';

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
        api: 'tipos-investimentos',
        permitirNovo: false,
      },
      {
        label: 'Banco',
        name: 'banco',
        type: 'select',
        api: 'instituicoes',
        permitirNovo: false,
      },
      {
        label: 'Corretora',
        name: 'corretora',
        type: 'select',
        api: 'instituicoes',
        permitirNovo: false,
      },
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
        api: 'tipos-recebimento',
        permitirNovo: false,
      },
      { label: 'Descrição', name: 'descricao', type: 'textarea', placeholder: 'Detalhe o recebimento...' },
      { label: 'Valor', name: 'valor', type: 'number', placeholder: 'Digite o valor' },
      { label: 'Data de recebimento', name: 'data', type: 'date' },
    ];
  }

  // gasto
  return [
    {
      label: 'Categoria',
      name: 'categoria',
      type: 'select',
      api: 'categorias-gasto',
      permitirNovo: true,
    },
    { label: 'Descrição', name: 'descricao', type: 'textarea', placeholder: 'Descreva o gasto...' },
    { label: 'Valor', name: 'valor', type: 'number', placeholder: 'Digite o valor' },
    { label: 'Data', name: 'data', type: 'date' },
    { label: 'Hora', name: 'hora', type: 'time' },
  ];
}