export type CardType= {
  description: string,
  id: number,
};

export type ListType = {
  title: string,
  cards: Array<CardType>,
};

export const cards1 = [
  {
    description: 'Revisar to do list e limpar os bugs',
    id: 1,
  },
  {
    description: 'Alavancar as vendas do b2b com as reformas',
    id: 2,
  },
  {
    description: 'Permitir novos usuarios usarem o produto atraves de um beta release',
    id: 3,
  },
  {
    description: 'Ao compartilhar processo com pessoa, na tela de criar login, contextualizar melhor o motivo do preenchimento dos dados',
    id: 4,
  },
  {
    description: 'Assim que o usuário fizer o primeiro acesso, vamos buscar todos os processos para a OAB dele, precisamos exibir isso para ele, mostrando que a pesquisa está sendo feita',
    id: 5,
  },
  {
    description: 'Assim que o usuário fizer o primeiro acesso, vamos buscar todos os processos para a OAB dele, precisamos exibir isso para ele, mostrando que a pesquisa está sendo feita',
    id: 6,
  },
  {
    description: 'Capturar imagens de avatar de usuários que já tem avatar em outros serviços como Outlook, Gmail e redes sociais, conforme descrito no card do Git',
    id: 7,
  },
];

export const cards2 = [
  {
    description: 'Revisar to do list e limpar os bugs',
    id: 8,
  },
  {
    description: 'Alavancar as vendas do b2b com as reformas',
    id: 9,
  },
  {
    description: 'Permitir novos usuarios usarem o produto atraves de um beta release',
    id: 10,
  },
  {
    description: 'ast and nearly effortlessly.',
    id: 11,
  },
  {
    description: 'Ao compartilhar processo com pessoa, na tela de criar login, contextualizar melhor o motivo do preenchimento dos dados',
    id: 12,
  },
  {
    description: 'What is the most efficient organization in the world? That is what we all aspire to have — an efficient organization that generates money on automatic, which in turn gives us the freedom to do what we want, when we want. My Google result?',
    id: 13,
  },
  {
    description: 'Quando o processo não for encontrado, possibilitar Tentar pesquisar novamente o processo',
    id: 14,
  },
  {
    description: 'Assim que o usuário fizer o primeiro acesso, vamos buscar todos os processos para a OAB dele, precisamos exibir isso para ele, mostrando que a pesquisa está sendo feita',
    id: 15,
  },
  {
    description: 'Assim que o usuário fizer o primeiro acesso, vamos buscar todos os processos para a OAB dele, precisamos exibir isso para ele, mostrando que a pesquisa está sendo feita',
    id: 16,
  },
  {
    description: 'Capturar imagens de avatar de usuários que já tem avatar em outros serviços como Outlook, Gmail e redes sociais, conforme descrito no card do Git',
    id: 17,
  },
];

export const list1 = {
  title: 'Coisas que ja foram feitas',
  cards: cards1,
  id: 'list-1',
};

export const list2 = {
  title: 'Coisas para fazer',
  cards: cards2,
  id: 'list-2',
};

export const board = {
  lists: [list1, list2],
};
