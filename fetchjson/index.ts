import axios from 'axios';
// node
const url = 'https://jsonplaceholder.typicode.com/todos/1';

axios.get(url).then((response) => {
  const todo = response.data;
  /* const ID = todo.id;
  const title = todo.title;
  const finished = todo.completed; */
  const ID = todo.ID; // using a wrong key
  const title = todo.Title; // using a wrong key
  const finished = todo.finished; // using a wrong key
  console.log(`
  The Todo with ID: ${ID} 
  Has a title of: ${title}
  Is it finished? ${finished}
  `);
});
