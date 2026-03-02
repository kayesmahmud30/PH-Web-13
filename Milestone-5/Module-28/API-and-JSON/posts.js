//----------------------Module-28-(5)------------------------------

const loadPost = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data);
      displayPost(data);
    });
};

//------------------------------------------------------------------
// // To show the data in UI.
// const displayPost = (posts) => {
//   // 1. Get the container.
//   const postContainer = document.getElementById("post-container");
//   postContainer.innerHTML = "";

//   //   console.log(postContainer);

//   posts.forEach((post) => {
//     // 2. Create HTML elements.
//     const li = document.createElement("li");
//     li.innerText = post.title;

//     // 3. Append the elements into container.

//     postContainer.appendChild(li);
//   });
// };
//-----------------------------------------------------------------

//----------------------Module-28-(6)------------------------------

// {
//     "userId": 10,
//     "id": 97,
//     "title": "quas fugiat ut perspiciatis vero provident",
//     "body": "eum non blanditiis soluta porro quibusdam voluptas\nvel voluptatem qui placeat dolores qui velit aut\nvel inventore aut cumque culpa explicabo aliquid at\nperspiciatis est et voluptatem dignissimos dolor itaque sit nam"
// }

const displayPost = (posts) => {
  // 1. Get the container and empty the container.
  const postContainer = document.getElementById("post-container");
  postContainer.innerHTML = "";

  posts.forEach((post) => {
    // 2. Create elements.
    const postCard = document.createElement("div");
    postCard.innerHTML = `
          <div class="post-card">
        <h2>${post.title}</h2>
        <p>${post.body}</p>
      </div>

    `;
    // 3. Append to the container.
    postContainer.append(postCard);
  });
};

loadPost();
