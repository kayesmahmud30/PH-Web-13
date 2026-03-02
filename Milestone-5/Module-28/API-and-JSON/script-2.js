//----------------------Module-28-(3)-----------------------------

// fetch() --> To show JSON data. (Promise of response.)

const loadData = () => {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    // Promise of response.
    .then((res) => res.json())
    // Promise of JSON Data.
    .then((data) => console.log(data));
};

//----------------------Module-28-(4)------------------------------

// const loadPost = () => {
//   const url = "https://jsonplaceholder.typicode.com/posts";

//   fetch(url)
//     .then((res) => res.json())
//     .then((json) => {
//       console.log(json);
//       displayPost(json);
//     });
// };

// const displayPost = (posts) => {
//   posts.forEach((post) => {
//     console.log(post);
//   });
// };
