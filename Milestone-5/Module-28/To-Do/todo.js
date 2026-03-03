//----------------------Module-28-(7)------------------------------

// const loadTodo = () => {
//   const url = "https://jsonplaceholder.typicode.com/todos";
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => displayTodo(data));
// };



// Converting into a synchronous way....
const loadTodo = async () => {
  const url = "https://jsonplaceholder.typicode.com/todos";

  const res = await fetch(url);
  const data = await res.json();
  displayTodo(data);
};


// {
//     "userId": 7,
//     "id": 129,
//     "title": "rerum culpa quis harum",
//     "completed": false
// }

const displayTodo = (todos) => {
  const todoContainer = document.getElementById("todo-container");
  todoContainer.innerHTML = "";

  todos.forEach((todo) => {
    const todoCard = document.createElement("div");

    todoCard.innerHTML = `

    <div class="todo-card">
        <p>${todo.completed == true ? `<i class="fa-solid fa-square-check"></i>` : `<i class="fa-regular fa-square-check"></i> `}</p>
        <h4>${todo.title}</h4>
    </div>
    
    `;
    todoContainer.append(todoCard);
  });
};

loadTodo();
