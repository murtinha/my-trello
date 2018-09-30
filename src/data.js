export type CardType= {
  description: string,
  id: number,
};

export type ListType = {
  title: string,
  id: string,
  cardIds: Array<string>,
};

export const initialData = {
  cards: {
    'card-1': {
      id: 'card-1',
      description: 'Capturar imagens de avatar de usuários que já tem avatar em outros serviços como Outlook, Gmail e redes sociais, conforme descrito no card do Git',
    },
    'card-2': {
      id: 'card-2',
      description: 'Assim que o usuário fizer o primeiro acesso, vamos buscar todos os processos para a OAB dele, precisamos exibir isso para ele, mostrando que a pesquisa está sendo feita',
    },
    'card-3': {
      id: 'card-3',
      description: 'Quando o processo não for encontrado, possibilitar Tentar pesquisar novamente o processo',
    },
    'card-4': {
      id: 'card-4',
      description: 'Permitir novos usuarios usarem o produto atraves de um beta release',
    },
    'card-5': {
      id: 'card-5',
      description: 'Ligar para agendar reunião',
    },
    'card-6': {
      id: 'card-6',
      description: 'Ao compartilhar processo com pessoa, na tela de criar login, contextualizar melhor o motivo do preenchimento dos dados',
    },
    'card-7': {
      id: 'card-7',
      description: 'Resolver os problemas relacionados com a questão do aquecimento global com o diretor oficial da ONU',
    },
    'card-8': {
      id: 'card-8',
      description: 'Acordar cedo',
    },
    'card-9': {
      id: 'card-9',
      description: 'Alavancar as vendas do b2b com as reformas',
    },
    'card-10': {
      id: 'card-10',
      description: 'Revisar to do list e limpar os bugs',
    },
    'card-11': {
      id: 'card-11',
      description: 'Cancelar o envio de mensagens para não beta tester',
    },
    'card-12': {
      id: 'card-12',
      description: 'Ao compartilhar processo com pessoa, na tela de criar login, contextualizar melhor o motivo do preenchimento dos dados',
    },
    'card-13': {
      id: 'card-13',
      description: 'Enviar email de confirmação para toda a base',
    },
    'card-14': {
      id: 'card-14',
      description: 'Testar todo o fluxo novamente',
    },
  },
  lists: {
    'list-1': {
      id: 'list-1',
      title: 'Tarefas urgentes',
      cardIds: ['card-1', 'card-2', 'card-3', 'card-4', 'card-5', 'card-6', 'card-7', 'card-8'],
    },
    'list-2': {
      id: 'list-2',
      title: 'Coisas para fazer',
      cardIds: ['card-9', 'card-10', 'card-11', 'card-12', 'card-13', 'card-14'],
    },
  },
  listOrder: ['list-1', 'list-2'],
};
