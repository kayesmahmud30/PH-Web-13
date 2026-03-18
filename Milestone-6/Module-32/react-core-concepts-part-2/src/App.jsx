import Counter from "./Counter";
import Batsman from "./Batsman";
import Users from "./Users";
import Friends from "./Friends";
import Posts from "./Posts";
import Players from "./Players";
import "./App.css";
import { Suspense } from "react";
import Counter2 from "./Counter2";
import Toggle from "./Toggle";
import UserCompany from "./UserCompany";

// const fetchUser = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json(),
// );

// const fetchFriends = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");
//   return res.json();
// };

// const fetchPost = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   return res.json();
// };

const userData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  return res.json();
};

function App() {
  // const friendsPromise = fetchFriends();
  // const postsPromise = fetchPost()

  function handleClick() {
    alert("I am clicked");
  }

  const handleClick3 = () => {
    alert("Clicked 3");
  };

  const handleAdd5 = (num) => {
    const newNum = num + 5;
    alert(newNum);
  };

  return (
    <>
      <section id="center">
        <h3>Vite + React</h3>

        <Suspense fallback={<h3>User Data loading...</h3>}>
          <UserCompany userData={userData()}></UserCompany>
        </Suspense>

        <Counter2></Counter2>

        <Toggle></Toggle>

        <Players></Players>

        {/* <Suspense fallback={<h4>Posts are coming....</h4>}>
          <Posts postsPromise={postsPromise}></Posts>
        </Suspense> */}

        {/* <Suspense fallback={<h3>Loading...</h3>}>
          <Users fetchUser={fetchUser}></Users>
        </Suspense> */}

        {/* 
        <Suspense fallback={<h3>Friends are coming for treat</h3>}>
          <Friends friendsPromise={friendsPromise}></Friends>
        </Suspense> */}

        <Batsman></Batsman>
        <Counter></Counter>

        {/* <button onclick="handleClick()">click Me</button> */}
        <button onClick={handleClick}>click Me</button>

        <button
          onClick={function handleClick() {
            alert("Clicked 2");
          }}
        >
          click Me 2
        </button>

        <button onClick={handleClick3}>Click me 3</button>

        <button onClick={() => alert("Click 4")}>Click me 4</button>

        <button onClick={() => handleAdd5(10)}>Click Add 5</button>
      </section>
    </>
  );
}

export default App;
