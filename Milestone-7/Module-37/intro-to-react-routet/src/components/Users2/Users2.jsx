import React, { use } from "react";

const Users2 = ({ userPromise }) => {
  const users = use(userPromise);
  console.log("User 2 suspense Data loaded", users);

  return (
    <div>
      <h2>This is User2</h2>
      
    </div>
  );
};

export default Users2;
