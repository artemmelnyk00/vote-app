export type Poll = {
  id: number;
  title: string;
  votes: Vote[];
};

export type Vote = {
  id: number;
  poll_id: number;
  option: string;
};

export const polls: Poll[] = [
  {
    id: 1,
    title: "Яку мову ви вважаєте найкращою для початківців?",
    votes: [
      { id: 1, poll_id: 1, option: "Ruby" },
      { id: 2, poll_id: 1, option: "JavaScript" },
      { id: 3, poll_id: 1, option: "Python" }
    ]
  },
  {
    id: 2,
    title: "Яку систему контролю версій ви віддаєте перевагу?",
    votes: [
      { id: 4, poll_id: 2, option: "Git" },
      { id: 5, poll_id: 2, option: "Mercurial" },
      { id: 6, poll_id: 2, option: "SVN" }
    ]
  },
  {
    id: 3,
    title: "Який редактор коду ви використовуєте найчастіше?",
    votes: [
      { id: 7, poll_id: 3, option: "VS Code" },
      { id: 8, poll_id: 3, option: "Windsurf" },
      { id: 9, poll_id: 3, option: "Vim" }
    ]
  },
  {
    id: 4,
    title: "Який інструмент для тестування ви використовуєте?",
    votes: [
      { id: 10, poll_id: 4, option: "RSpec" },
      { id: 11, poll_id: 4, option: "Jest" },
      { id: 12, poll_id: 4, option: "JUnit" }
    ]
  },
  {
    id: 5,
    title: "Який пакетний менеджер ви використовуєте найчастіше?",
    votes: [
      { id: 13, poll_id: 5, option: "npm" },
      { id: 14, poll_id: 5, option: "yarn" },
      { id: 15, poll_id: 5, option: "pip" }
    ]
  }
];