import React from "react";

const UserDetailPage = async ({ params }) => {
  const { userId } = await params;
  const user = await getUsersById(userId);
  console.log(user);

  return (
    <div>
      <h2>User Details</h2>
    </div>
  );
};

export default UserDetailPage;
