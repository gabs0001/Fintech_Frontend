import { CampoFinanceiro } from '@/types/formulario';

export function getCamposPorTipo(tipo: 'gasto' | 'recebimento' | 'investimento' | 'objetivo'): CampoFinanceiro[] {
  if (tipo === 'objetivo') {
    return [
      {
        label: 'Descrição do objetivo',
        name: 'descricao',
        type: 'textarea',
        placeholder: 'Ex: Comprar um carro',
      },
      {
        label: 'Valor da meta',
        name: 'valor',
        type: 'number',
        placeholder: 'Digite o valor da meta',
      },
      {
        label: 'Data limite',
        name: 'data',
        type: 'date',
      },
    ];
  }

  if (tipo === 'investimento') {
    return [
      {
        label: 'Nome da aplicação',
        name: 'descricao',
        type: 'text',
        placeholder: 'Ex: Tesouro IPCA 2026',
      },
      {
        label: 'Tipo de investimento',
        name: 'tipoInvestimento',
        type: 'select',
        api: 'tipos-investimento',
        permitirNovo: false,
      },
      {
        label: 'Banco',
        name: 'banco',
        type: 'text',
        placeholder: 'Digite o nome do banco',
      },
      {
        label: 'Corretora',
        name: 'corretora',
        type: 'text',
        placeholder: 'Digite o nome da corretora',
      },
      {
        label: 'Valor investido',
        name: 'valor',
        type: 'number',
        placeholder: 'Digite o valor',
      },
      {
        label: 'Data de aplicação',
        name: 'data',
        type: 'date',
      },
      {
        label: 'Data de vencimento',
        name: 'vencimento',
        type: 'date',
      },
    ];
  }

  if (tipo === 'recebimento') {
    return [
      {
        label: 'Tipo de recebimento',
        name: 'tipoRecebimento',
        type: 'select',
        api: 'tipos-recebimento',
        permitirNovo: false,
      },
      {
        label: 'Descrição',
        name: 'descricao',
        type: 'textarea',
        placeholder: 'Detalhe o recebimento...',
      },
      {
        label: 'Valor',
        name: 'valor',
        type: 'number',
        placeholder: 'Digite o valor',
      },
      {
        label: 'Data de recebimento',
        name: 'data',
        type: 'date',
      },
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
    {
      label: 'Descrição',
      name: 'descricao',
      type: 'textarea',
      placeholder: 'Descreva o gasto...',
    },
    {
      label: 'Valor',
      name: 'valor',
      type: 'number',
      placeholder: 'Digite o valor',
    },
    {
      label: 'Data',
      name: 'data',
      type: 'date',
    }
  ];
}