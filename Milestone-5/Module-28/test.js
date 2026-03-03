const data = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts/1");

  console.log("Hello");

  const json = await res.json();
  console.log(json);

  console.log(true);
};

data();

// This is the way to convert into a synchronous loading by using "async()" and "await" for fetching data.
