import axios from 'axios';
// node
const url = 'https://jsonplaceholder.typicode.com/todos/1';

// interface
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then((response) => {
  const todo = response.data as Todo;
  /* const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed; */
  const ID = todo.id; // using a wrong key
  const title = todo.title; // using a wrong key
  const finished = todo.completed; // using a wrong key
  console.log(`
  The Todo with ID: ${ID} 
  Has a title of: ${title}
  Is it finished? ${finished}
  `);
});
