// const usersPromise = fetch("").then((res) => res.json());

const getUsers = async () => {
  const res = await fetch("");
  return res.json();
};

const Users2Page = () => {
  return (
    <div>
      <h2>Users2: </h2>
    </div>
  );
};

export default Users2Page;
