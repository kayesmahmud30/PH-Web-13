/*

1. Component
2. JSX
3. Props
4. State
5. Event
6. Conditional Rendering

*/

/*
----> When we want to load data from a server using API.

1. API : url --> "https://jsonplaceholder.typicode.com/users"
2. Just write a simple fetch with json conversion.
3. Wrap the data loading component under suspense.


*/

// // ---------------- Way 1 for fetch -------------------

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// // ---------------- Way 2 for fetch -------------------

// const loadData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   const data = res.json();
//   return data;
// };
