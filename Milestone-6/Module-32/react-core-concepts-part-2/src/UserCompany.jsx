import { use } from "react";

export default function UserCompany({ userData }) {
  const userJSON = use(userData);

  const UserTemp = ({ user }) => {
    return (
      <div className="card">
        <p>User name : {user.name}</p>
        <p>Company name : {user?.company.name}</p>
        <p>City : {user?.address.city}</p>
        <p></p>
      </div>
    );
  };

  return (
    <div className="card">
      <h2>Company Name of Users</h2>

      {userJSON.map((user) => (
        <UserTemp key={user.id} user={user}></UserTemp>
      ))}
    </div>
  );
}
