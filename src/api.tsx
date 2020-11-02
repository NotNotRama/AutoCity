export const createTodo = (todo: string) =>
  fetch('http://localhost:4000/create', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo),
  });
