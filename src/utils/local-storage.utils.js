const LS_CURRENT_TODOS = "LS_CURRENT_TODOS";
const LS_COMPLETED_TODOS = "LS_COMPLETED_TODOS";

const getFormattedDate = () => {
  const date = new Date();
  const formattedDate = `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;

  return formattedDate;
};

export const getCurrentTodos = () => {
  return JSON.parse(localStorage.getItem(LS_CURRENT_TODOS)) ?? [];
};

export const getCompletedTodos = () => {
  const formattedDate = getFormattedDate();

  const completedTodos = (JSON.parse(localStorage.getItem(LS_COMPLETED_TODOS)) ?? [])[
    formattedDate
  ];

  return completedTodos ?? [];
};

export const saveCurrentTodos = (todos) => {
  localStorage.setItem(LS_CURRENT_TODOS, JSON.stringify(todos));
};

export const saveCompletedTodos = (todos) => {
  const formattedDate = getFormattedDate();

  localStorage.setItem(LS_COMPLETED_TODOS, JSON.stringify({ [formattedDate]: todos }));
};
